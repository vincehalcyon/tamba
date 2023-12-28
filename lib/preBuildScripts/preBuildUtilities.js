const dotenv = require("dotenv");
const fs = require("fs");
const https = require("https");
const axios = require("axios").default;
const { Jsona } = require("jsona");
const dataFormatter = new Jsona();
module.exports.preBuildDevelopment = async () => {
  dotenv.config();
  // Convert the environment variables to a JSON object
  const envVars = {};
  for (const key in process.env) {
    envVars[key] = process.env[key];
  }

  // Form Setting
  const formSettingHandler = await axios.get(
    envVars.NEXT_PUBLIC_TENANT_API + "/api/settings/form"
  );
  const formSetting = dataFormatter.deserialize(formSettingHandler.data);

  // Locales
  const localesHandler = await axios.get(
    envVars.NEXT_PUBLIC_TENANT_API + "/api/locales"
  );
  const locales = localesHandler.data;

  // Form
  // const formHandler = await axios.get(
  //   envVars.NEXT_PUBLIC_TENANT_API + "/api/forms/get-in-touch?include=blueprint"
  // );
  // const form = dataFormatter.deserialize(formHandler.data);

  // Global Data
  const tenantDetailsHandler = await axios.get(
    envVars.NEXT_PUBLIC_TENANT_API + "/api/globals/tenant-details"
  );
  const tenantDetails = dataFormatter.deserialize(tenantDetailsHandler.data);

  // Menu Data
  const headerHandler = await axios.get(
    envVars.NEXT_PUBLIC_TENANT_API +
      "/api/menus/header?include=nodes.children,nodes.model,parentNodes"
  );
  const header = dataFormatter.deserialize(headerHandler.data);

  const menuNodes = header?.parentNodes.map((e) => {
    return {
      id: e.id,
      target: e.target,
      label: e.label,
      url: e.url,
      route_url: e.model?.route_url,
      children: e.children.map((e1) => {
        return {
          label: e1.label,
          urls: e1.url,
          url: e1.model?.data?.main?.url?.attributes?.route_url,
          route_url: e1.model?.route_url,
        };
      }),
    };
  });

  // Footer Data
  const footerHandler = await axios.get(
    envVars.NEXT_PUBLIC_TENANT_API +
      "/api/menus/footer?include=nodes.children,nodes.model,parentNodes"
  );
  const footer = dataFormatter.deserialize(footerHandler.data);

  const footerNodes = footer?.parentNodes.map((e) => {
    return {
      id: e.id,
      target: e.target,
      label: e.label,
      url: e.url,
      route_url: e.model?.route_url,
      children: e.children.map((e1) => {
        return { label: e1.label, urls: e1.url, url: e1.model?.route_url };
      }),
    };
  });

  // Generate default Image
  const generateImage = (imageUrl, path) => {
    const file = fs.createWriteStream(path);
    https.get(imageUrl, function (response) {
      response.pipe(file);
      file.on("finish", () => {
        file.close();
        console.log("Default Image Downloaded");
      });
    });
  };
  [].forEach((e, i) => {
    generateImage(e, `./public/image${i}.webp`);
  });

  fs.writeFileSync(
    "./lib/preBuildScripts/static/globalData.json",
    JSON.stringify({
      formSetting,
      tenantDetails,
      header,
      menuNodes,
      footer,
      footerNodes,
      locales,
    })
  );

  console.log("New Global Data Generated!");
};

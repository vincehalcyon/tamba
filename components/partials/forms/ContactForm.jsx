import FormField from "@/components/forms/FormField";
import { Fragment, useState } from "react";
import { formSubmit, isError, RenderCaptcha } from "@/lib/services/formService";
import formStore from "@/lib/store/formStore";
import globalState from "@/lib/store/globalState";
export default function ContactForm({ form }) {
  const formData = formStore((state) => state);
  const captcha = globalState((state) => state.captcha);
  const sections = form?.fields?.blueprint?.schema?.sections || [];
  const [errors, setErrors] = useState([]);
  const showLazy = globalState((state) => state.showLazy);

  const findClass = (field) => {
    switch (field) {
      // case "name":
      //   return "border outline-0 border-[#C9AAE1] rounded-[5px] h-[35px] text-[#424242] p-[10px] w-[100%]";
      // case "message":
      //   return "w-full rounded-[5px] border-[1px] border-[#C9AAE1] py-[8.5px] px-3 min-h-[100px] col-span-2";
      // case "file":
      //   return "";
      // case "multi_select":
      // case "single_select":
      //   return "react-select cursor-pointer border-[1px] rounded-[5px] h-[35px] pt-[1px] text-sm";
      // case "radio_list":
      //   return "cursor-pointer";
      case "country":
        return "w-full h-[50px] border-[1px] border-[#ABABAB] rounded-[20px] bg-white outline-0 px-[20px]";
      default:
        return "w-full h-[50px] border-[1px] border-[#ABABAB] rounded-[20px] bg-white outline-0 px-[20px]";
    }
  };
  const findWrapperClass = (field) => {
    switch (field) {
      case "message":
      case "name":
        return "col-span-2";
      case "radio_list":
        return "flex flex-col";
      default:
        return "col-span-2 sm:col-span-1";
    }
  };
  const formatRequiredTitleField = (field) => {
    return field?.rules?.includes("required")
      ? field?.title + "*"
      : field?.title;
  };
  const [token, setToken] = useState();
  const errorCallback = () => {
    captcha?.current?.reset();
    setToken("");
  };
  return (
    <>
      {sections.map((section) => {
        const fields = section?.fields || [];
        return (
          <Fragment key={section?.state_name}>
            <form
              onSubmit={(e) =>
                formSubmit({
                  e,
                  formId: form.id,
                  setToken,
                  token,
                  captcha,
                  sections,
                  setErrors,
                  formData,
                  errorCallback,
                })
              }
            >
              <div className="text-sm grid grid-col-1 gap-[30px] mt-[10px]">
                {fields.map((field) => (
                  <Fragment key={field?.state_name}>
                    <div className="flex flex-col gap-[5px]">
                      <label className="text-white text-[14px] font-[400] leading-[21px]">
                        {formatRequiredTitleField(field)}
                      </label>
                      <FormField
                        {...field}
                        className={findClass(field?.state_name)}
                        wrapperclassname={findWrapperClass(field?.state_name)}
                        error={isError(
                          errors,
                          section?.state_name,
                          field?.state_name
                        )}
                      />
                    </div>
                  </Fragment>
                ))}
              </div>

              <div className="relative flex flex-col lg:flex-row justify-between gap-[40px] items-center mt-[30px]">
                {form?.attributes?.uses_captcha && (
                  <>
                    <div className="relative flex justify-center items-center scale-[.75] 3sm:scale-100 lg:scale-[.75] items-st z-[90] w-[270px] h-[63px]">
                      <div className="absolute z-20 left-0">
                        <div className="flex items-center z-10 animate-pulse">
                          <svg
                            aria-hidden="true"
                            className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-brand-main"
                            viewBox="0 0 100 101"
                            fill="white"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                            />
                          </svg>
                          <p className="text-white">Loading ReCAPTCHA...</p>
                        </div>
                      </div>
                      {showLazy && (
                        <div className="z-20 mx-auto lg:-ml-[40px]">
                          <RenderCaptcha setToken={setToken} />
                        </div>
                      )}
                    </div>
                  </>
                )}
                <button
                  disabled={formData.uploading || formData.submitLoading}
                  className="button w-full lg:w-auto py-[10px] px-[25px] text-[16px] font-[400] leading-normal"
                >
                  Submit
                </button>
              </div>
            </form>
          </Fragment>
        );
      })}
    </>
  );
}

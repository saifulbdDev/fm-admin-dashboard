import React, { useCallback, useEffect, useMemo } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";
import {plugins, toolbarConfig} from "@/utils/CkEditorPlugin"

const CKEditorComponent = ({
  required = false,
  containerClass,
  data,
  id,
  error,
  onChange,
  label,
  errorText,
  errorColor = "text-red-600 ",
  labelClass = "block mb-[5px] text-sm font-medium text-white"
}) => {
  const memoizedOnChange = useCallback(
    (event, editor) => {
      const newData = editor.getData();
      onChange(newData);
    },
    [onChange]
  );



  // Toolbar configuration
  const configToolbar = useMemo(
    () => toolbarConfig,
    []
  );
  const ConfigPlugins = useMemo(
    () => plugins,
    []
  );

  return (
    <div className={containerClass}>
      {label && (
        <label htmlFor={id} className={`${labelClass}`}>
          {label} {required && <span className="text-red-700 text-700">*</span>}
        </label>
      )}

      <CKEditor
        editor={ClassicEditor}
        id={id}
        config={{
          plugins:ConfigPlugins,
          toolbar: {
            items: configToolbar,
            shouldNotGroupWhenFull: true
          },
          image: {
            toolbar: [
              "imageStyle:block",
              "imageStyle:side",
              "|",
              "toggleImageCaption",
              "imageTextAlternative",
              "|",
              "linkImage"
            ]
          },
          enterMode: 2,
          linkDefaultProtocol: "https://"
          // Other CKEditor configuration options
        }}

        data={data}
        onChange={memoizedOnChange}
      />

      {errorText && error && <p className={`my-2 text-xs ${errorColor}`}>{errorText}</p>}
    </div>
  );
};

export default CKEditorComponent;
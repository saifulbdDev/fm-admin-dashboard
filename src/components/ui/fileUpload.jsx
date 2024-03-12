/* eslint-disable react/prop-types */
import { useRef } from "react";

 const FileUploader = ({ 
    id,
    inputClass,
    placeholder,
    field,
    form,
    
    ...rest
   }) => {
  // Create a reference to the hidden file input element
  const hiddenFileInput = useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
   

    form.setFieldValue(
      field.name,
      fileUploaded
    );
  };
  let img;
  const imageTypeRegExp = /^image\//;
  if (field.value !== null && imageTypeRegExp.test(field.value?.type)) {
   
    img =   URL.createObjectURL(field.value)
  }else if(field.value !== null){
    img = import.meta.env.VITE_APP_URL+field.value 
  }


  return (
    <label htmlFor={id}>
    <img src={img} className="w-[200px] max-h-[200px]" />
      <button type="button" className="bg-theme-color-200 mt-2 rounded-sm text-white text-xs p-1.5 font-bold" onClick={handleClick}>
      Change Image
      </button>
      <input
      className={inputClass}
      { ...rest}
      placeholder={placeholder}
        type="file"
        onChange={handleChange}
        ref={hiddenFileInput}
        style={{ display: "none" }} // Make the file input element invisible
      />
    </label>
  );
};
export default FileUploader;
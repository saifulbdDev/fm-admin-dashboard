import React from "react";

type PartialInputProps = Pick<
  React.ComponentPropsWithoutRef<"input">,
  "className" | "style"
>;

type Props = {
  /**
   * full value of the otp input, up to {size} characters
   */
  value: string;
  onChange(value: string): void;
  /**
   * Number of characters/input for this component
   */
  size?: number;
  /**
   * Validation pattern for each input.
   * e.g: /[0-9]{1}/ for digits only or /[0-9a-zA-Z]{1}/ for alphanumeric
   */
  validationPattern?: RegExp;
} & PartialInputProps;

const OtpInput = (props: Props) => {
  const {
    //Set the default size to 6 characters
    size = 4,
    //Default validation is digits
    validationPattern = /[0-9]{1}/,
    value,
    onChange,
    className,
    ...restProps
  } = props;

  // Create an array based on the size.
  const arr = new Array(size).fill("-");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const elem = e.target;
    const val = e.target.value;

    // check if the value is valid
    if (!validationPattern.test(val) && val !== "") return;

    // change the value using onChange props
    const valueArr = value.split("");
    valueArr[index] = val;
    const newVal = valueArr.join("").slice(0, 6);
    onChange(newVal);

    //focus the next element if there's a value
    if (val) {
      const next = elem.nextElementSibling as HTMLInputElement | null;
      next?.focus();
    }
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const current = e.currentTarget;
    if (e.key === "ArrowLeft" || e.key === "Backspace") {
      const prev = current.previousElementSibling as HTMLInputElement | null;
      prev?.focus();
      prev?.setSelectionRange(0, 1);
      return;
    }

    if (e.key === "ArrowRight") {
      const prev = current.nextSibling as HTMLInputElement | null;
      prev?.focus();
      prev?.setSelectionRange(0, 1);
      return;
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const val = e.clipboardData.getData("text").substring(0, size);
    onChange(val);
  };

  return (
    <div className="flex w-full justify-center my-5  gap-3">
      {/* Map through the array and render input components */}
      {arr.map((_, index) => {
        return (
          <input
            key={index}
            {...restProps}
            /**
             * Add some styling to the input using daisyUI + tailwind.
             * Allows the user to override the classname for a different styling
             */
            className={
              className ||
              `input border px-0 
              w-10 h-10  
              font-bold text-base focus:ring-primary-300 border-[#C1C1C1] focus:border-primary-300 hover:border-primary-300 ring-primary-300 outline-none hover:ring-primary-300 text-primary-300 text-center rounded-lg`
            }
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            pattern={validationPattern.source}
            maxLength={4}
            value={value.at(index) ?? ""}
            onChange={(e) => handleInputChange(e, index)}
            onKeyUp={handleKeyUp}
            onPaste={handlePaste}
          />
        );
      })}
    </div>
  );
};

export default OtpInput;
import React, { useRef } from "react";
import { useState } from "react";

const InputField = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const isFocused = useRef({ isFocused: false });

  const generateNumber = () => {
    setValue("");
    const randomQuantity = Math.floor(Math.random() * 7 + 5);
    let newValue = "";
    for (let i = 0; i < randomQuantity; i++) {
      const random = Math.floor(Math.random() * 1000);
      if (i > 0) {
        newValue += `, ${random.toString()}`;
      } else {
        newValue += random.toString();
      }
    }
    setValue(newValue);
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const regex = /^[0-9,]+$/;

    if (regex.test(inputValue) || inputValue == "") {
      if (inputValue.endsWith(",") && inputValue.length == 1) {
        setError(true);
      } else if (
        inputValue.endsWith(",") &&
        inputValue.charAt(inputValue.length - 2) == ","
      ) {
        console.error("Double comma");
        setError(true);
      } else {
        setValue(inputValue);
        setError(false);
      }
    } else {
      setError(true);
    }
  };

  const handleFocus = () => {
    isFocused.current.isFocused = true;
  };
  const handleBlur = () => {
    isFocused.current.isFocused = false;
    setError(false);
  };

  return (
    <div className="menu-container flex">
      <button
        className="min-w-10 border-solid border-2 text-gray-500 border-gray-500 h-fit w-fit p-3"
        onClick={generateNumber}
      >
        Generate Random Numbers
      </button>
      <div className="input-container relative m-4">
        <label className="sm:text-sm lg:text-lg absolute top-[-50%] left-[2%] px-1 text-gray-500 pointer-events-none z-50">
          Input number:
        </label>

        <input
          placeholder="23,45,13,..."
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          type="text"
          className={`${
            isFocused.current.isFocused && error && "focus:border-red-700 "
          } border-2 border-solid rounded-md border-gray-500 min-w-[30rem] mx-3 p-2 focus:border-gray-700 focus:outline-none focus:ring-0`}
          ref={isFocused}
        />
      </div>
    </div>
  );
};

export default InputField;

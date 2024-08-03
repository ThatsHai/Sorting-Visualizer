import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { PauseIcon, PlayIcon } from "../assets";

const InputField = ({ onUpdateArray, onStartSorting, isSorting, setIsSorting }) => {
  //error = if user input incorrectly
  const [error, setError] = useState("");
  //value is an input string, and get checked for validity before being saved into value Array
  const [value, setValue] = useState("");
  const [valueArray, setValueArray] = useState([]);
  //isFocused only for error styling
  const isFocused = useRef({ isFocused: false });

  //use to modify button image
  const buttonImageRef = React.createRef();

  useEffect(() => {
    const updateArray = () => onUpdateArray(valueArray);
    updateArray();
  }, [valueArray, onUpdateArray]);

  useEffect(() => {
    buttonImageRef.current.src = isSorting ? PauseIcon : PlayIcon;
    // console.log(isSorting);
  }, [isSorting, PauseIcon, PlayIcon]);

  const generateNumber = () => {
    setValue("");
    const randomQuantity = Math.floor(Math.random() * 7 + 5);
    let newValue = "";
    for (let i = 0; i < randomQuantity; i++) {
      const random = Math.floor(Math.random() * 1000);
      if (i > 0) {
        newValue += `,${random.toString()}`;
      } else {
        newValue += random.toString();
      }
    }
    setValue(newValue);
    setValueArray(newValue.split(","));
    setIsSorting(false)
    // onUpdateArray(valueArray)
  };

  const startSorting = () => {
    setValueArray(value.split(","));
    
    //start sorting when clicked
    // if (!isSorting) {
    onStartSorting(!isSorting);
    // }
    // onUpdateArray(valueArray)
  };

  const handleChange = (e) => {
    const inputValue = e.target.value.trim();
    const regex = /^[0-9,]+$/;

    if (regex.test(inputValue) || inputValue == "") {
      if (inputValue.endsWith(",") && inputValue.length == 1) {
        setError(true);
      } else if (
        inputValue.endsWith(",") &&
        inputValue.charAt(inputValue.length - 2) == ","
      ) {
        // console.error("Double comma");
        setError(true);
      } else {
        setValue(inputValue);
        setValueArray(inputValue.split(",").filter((item) => item !== ""));
        setError(false);
        setIsSorting(false);
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
    <div className="menu-container flex w-full bg-blue-950 items-center">
      <button
        className="border-solid border-2 border-gray-500 h-[90%] rounded-md w-fit  text-white  px-5 py-2 text-center flex md:ml-6"
        onClick={generateNumber}
      >
        Generate Random Numbers
      </button>
      <div className="input-container relative m-4 flex items-center flex-wrap">
        {/* <label className="sm:text-sm md:text-md lg:text-lg absolute top-[-50%] left-[2%] px-1 text-gray-500 pointer-events-none z-50">
          Input number:
        </label> */}

        <input
          placeholder="23,45,13,..."
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          type="text"
          className={`${
            isFocused.current.isFocused && error && "focus:border-red-700 "
          } border-2 border-solid rounded-md border-gray-500 mx-2 md:mx-5 p-2 focus:border-gray-700 focus:outline-none focus:ring-0 w-[250px] md:w-[350px]`}
          ref={isFocused}
        />
        <div className="flex items-center md:justify-center ">
          <button
            className="md:w-10 md:h-10 md:py-0 w-7 h-7 py-2 mx-2"
            onClick={startSorting}
          >
            <img
              src={PlayIcon}
              alt="Play button"
              className="rounded-full border-white border bg-white"
              ref={buttonImageRef}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputField;

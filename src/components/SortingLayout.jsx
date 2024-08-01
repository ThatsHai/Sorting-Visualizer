import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import BubbleSort from "./BubbleSort";

const SortingLayout = () => {
  const [array, setArray] = useState([])

  function handleTestArrayChange(newArray){
    setArray(newArray)
    console.log(array)
  }
  
  return (
    <div className="sorting-container">
      <InputField onUpdateArray={handleTestArrayChange}/>
      <BubbleSort displayArray={array}/>
    </div>
  );
};

export default SortingLayout;

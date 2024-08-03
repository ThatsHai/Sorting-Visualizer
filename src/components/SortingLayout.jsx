import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import BubbleSort from "./BubbleSort";

const SortingLayout = () => {
  const [array, setArray] = useState([])
  const [isSorting, setIsSorting] = useState(false)

  function handleArrayChange(newArray){
    setArray(newArray)
  }

  function handleSorting(startSorting) {
    setIsSorting(startSorting)
  }
  
  return (
    <div className="sorting-container">
      <InputField onUpdateArray={handleArrayChange} onStartSorting={handleSorting} isSorting={isSorting} setIsSorting={setIsSorting}/>
      <BubbleSort displayArray={array} isSorting={isSorting}/>
    </div>
  );
};

export default SortingLayout;

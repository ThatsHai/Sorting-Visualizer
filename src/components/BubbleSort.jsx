import React, { useEffect, useState } from "react";
import ArrayValue from "./ArrayValue";

const BubbleSort = ({displayArray}) => {
  const [arrayValues, setArrayValues] = useState([]);
  

  useEffect(() => {
    setArrayValues(displayArray.map((value) => <ArrayValue value={value} key={value}/>));
  }, [displayArray]);

  return (
    <div className="bubble-sort flex items-center justify-center flex-wrap border m-3 rounded-md">
      <div className="sorting-name basis-full text-md md:text-xl font-bold p-3 md:px-12">
        <p className="">Bubble Sort</p>
      </div>
      <div className="value-container flex overflow-y-auto">
        {arrayValues}
      </div>
    </div>
  );
};

export default BubbleSort;

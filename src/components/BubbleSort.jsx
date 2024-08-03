import React, { useEffect, useState } from "react";
import ArrayValue from "./ArrayValue";

const BubbleSort = ({ displayArray, isSorting }) => {
  const [arrayValuesDisplay, setArrayValuesDisplay] = useState([]);
  const [arrayValues, setArrayValues] = useState([...displayArray]);
  const [isSorted, setIsSorted] = useState(false);

  const [beingSort1, setBeingSort1] = useState();
  const [beingSort2, setBeingSort2] = useState();
  const [beingSwap1, setBeingSwap1] = useState(-1);
  const [beingSwap2, setBeingSwap2] = useState(-1);


  useEffect(() => {
    if (isSorted) {
      setBeingSort1(-1);
      setBeingSort2(-1);
    }
  }, [isSorted]);

  useEffect(() => {
    if (!areArraysEqual(arrayValues, displayArray)) {
      setArrayValues([...displayArray]);
      setBeingSort1(0);
      setBeingSort2(0);
      setIsSorted(false); // reset the sorted state when displayArray changes
    }
  }, [displayArray, arrayValues]);

  useEffect(() => {
    setArrayValuesDisplay(
      arrayValues.map((value, index) => (
        <ArrayValue
          value={value}
          key={index}
          beingSort1={index === beingSort1}
          beingSort2={index === beingSort2}
          isSorted={isSorted}
          beingSwap1={beingSwap1}
          beingSwap2={beingSwap2}
          setBeingSwap1={setBeingSwap1}
          setBeingSwap2={setBeingSwap2}
          index={index}
        />
      ))
    );
  }, [arrayValues, beingSort1, beingSort2]);

  useEffect(() => {
    setBeingSwap1(-1);
    setBeingSwap2(-1);
  }, [arrayValues]);

  useEffect(() => {
    if (isSorting && !isSorted) {
      bubbleSort();
    }
  }, [isSorting, isSorted]);

  const bubbleSort = () => {
    const arr = [...arrayValues]; // create a copy of the array
    let i = 0;
    let j = 0;

    const compare = () => {
      if (i < arr.length - 1) {
        setBeingSort1(arr.length - i - 1);
        if (j < arr.length - i - 1) {
          setBeingSort2(j);
          if (+arr[j] > +arr[j + 1]) {
            setBeingSwap1(j);
            setBeingSwap2(j + 1);
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            setArrayValues([...arr]);
            setTimeout(() => {
              setBeingSwap1(-1);
              setBeingSwap2(-1);
            }, 1800);
          }

          j++;
          setArrayValues([...arr]);
          setTimeout(compare, 1300); // delay 1 second
        } else {
          i++;
          j = 0;
          setArrayValues([...arr]); // update the state with the current array
          setTimeout(compare, 1300); // delay 1 second
        }
      } else {
        setArrayValues([...arr]);
        setIsSorted(true);
      }
    };

    compare();
  };

  const areArraysEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    return (
      arr1.every((value) => arr2.includes(value)) &&
      arr2.every((value) => arr1.includes(value))
    );
  };

  return (
    <div className="bubble-sort flex items-center justify-center flex-wrap border-[3px] m-3 rounded-md">
      <div className="sorting-name basis-full text-md md:text-xl font-bold p-3 md:px-12">
        <p className="font-Rubik">Bubble Sort</p>
      </div>
      <div className="value-container flex overflow-y-auto w-full justify-center">
        {arrayValuesDisplay}
      </div>
    </div>
  );
};

export default BubbleSort;

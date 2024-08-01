import React from "react";
import InputField from "./InputField";
import BubbleSort from "./BubbleSort";

const SortingLayout = () => {
  return (
    <div className="sorting-container">
      <InputField />
      <BubbleSort />
    </div>
  );
};

export default SortingLayout;

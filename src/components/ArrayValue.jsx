import gsap from "gsap";
import React from "react";
import { useEffect } from "react";
const ArrayValue = ({
  value,
  beingSort1,
  beingSort2,
  isSorted,
  beingSwap1,
  beingSwap2,
  setBeingSwap1,
  setBeingSwap2,
  index,
}) => {
  const boxRef = React.createRef();

  useEffect(() => {
    if (beingSwap1 === index || beingSwap2 === index) {
      gsap.to(boxRef.current, {
        // borderColor: "green",
        // animationDuration: 3,
        // onComplete: () => {
        //   setBeingSwap1(-1);
        //   setBeingSwap2(-1);
        //   if (beingSort1) {
        //     gsap.to(boxRef.current, {
        //       borderColor: "yellow",
        //     });
        //   } else if (beingSort2) {
        //     gsap.to(boxRef.current, {
        //       borderColor: "red",
        //     });
        //   } else {
        //     gsap.to(boxRef.current, {
        //       borderColor: "blue",
        //     });
        //   }
        // },
        translateY: -20,
        duration: 0.8,
        // borderColor: "red-500",
        // background: "red-200",
        onComplete: () => {
          setBeingSwap1(-1);
          setBeingSwap2(-1);
          gsap.to(boxRef.current, {
            translateY: 0,
            duration: 0.9,
            
          });
          // if(beingSwap2){
          //   gsap.to(boxRef.current, {
          //     borderColor: "#1e40af",
          //     background: "white",
          //   })
          // }
        },
      });
    }
  }, [beingSwap1, beingSwap2, index]);

  return (
    <div
      ref={boxRef}
      className={`box border-[2.5px] border-blue-800 p-1 w-[40px] h-fit mt-10 mb-12 mx-1 text-center ${
        (beingSort2 && "border-red-500 bg-red-300") ||
        (beingSort1 && "border-yellow-500 bg-yellow-300") ||
        (isSorted && "border-green-800") //||
        // ((beingSwap1 === index || beingSwap2 === index) && "border-green-950")
      }`}
    >
      {value}
    </div>
  );
};

export default ArrayValue;

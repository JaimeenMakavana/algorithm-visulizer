import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

const ModalDiv = ({
  children,
  toggle,
  setValueToggle,
  handleSubmit,
}: {
  children: any;
  toggle: boolean;
  setValueToggle: any;
  handleSubmit: any;
}) => {
  return (
    <div
      className={` ${
        toggle && "hidden"
      }  fixed inset-0 bg-black/50 flex justify-center items-center text-black`}
    >
      <div className=" w-[80%] rounded-xl p-3 min-h-[150px] bg-offWhite relative pt-0 md:w-[50%] max-h-[300px] overflow-y-auto scrollBar md:px-10">
        <div className="sticky right-0 top-0 flex py-1 justify-between items-center bg-offWhite shadow-sm">
          <IoIosCloseCircleOutline onClick={() => setValueToggle(!toggle)} />
          <button onClick={handleSubmit}>Submit</button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ModalDiv;

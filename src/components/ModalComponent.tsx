import ModalDiv from "@/UI/ModalDiv";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";

const ModalComponent = ({
  ValueToggle,
  setValueToggle,
  ProvidedValue,
  setProvidedValue,
  handleSubmit,
}: {
  ValueToggle: any;
  setValueToggle: any;
  setProvidedValue: any;
  ProvidedValue: any;
  handleSubmit: any;
}) => {
  const handleInputChange = (id: any, newValue: any) => {
    setProvidedValue((prevValues: any) =>
      prevValues.map((ele: any) =>
        ele.id === id ? { ...ele, value: Number(newValue) } : ele
      )
    );
  };

  //   submit

 
  return (
    <ModalDiv
      toggle={ValueToggle}
      setValueToggle={setValueToggle}
      handleSubmit={handleSubmit}
    >
      <div className="flex justify-between items-center">
        <h1>Select Number of Bar</h1>
        <IoIosAddCircleOutline
          className=" cursor-pointer"
          onClick={() =>
            setProvidedValue([
              ...ProvidedValue,
              { id: ProvidedValue.length + 1, value: 0, isDelete: false },
            ])
          }
        />
      </div>

      {ProvidedValue.map((ele: any, index: any) => (
        <div key={ele.id} className=" flex justify-between items-center my-2">
          <span>{index + 1}</span>
          <input
            type="text"
            className=" focus:outline-none border border-black rounded-sm py-1 px-2"
            value={ele.value}
            onChange={(e) => handleInputChange(ele.id, e.target.value)}
          />
          <AiOutlineDelete
            onClick={() => {
              const newArr = ProvidedValue.filter(
                (ele_: any) => ele_.id !== ele.id
              );
              setProvidedValue(newArr);
            }}
          />
        </div>
      ))}
    </ModalDiv>
  );
};

export default ModalComponent;

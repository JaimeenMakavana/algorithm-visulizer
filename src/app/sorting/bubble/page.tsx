"use client";
import React, { useState } from "react";
import { HiOutlinePencil } from "react-icons/hi2";
import {
  MdNavigateBefore,
  MdNavigateNext,
  MdOutlineFirstPage,
  MdOutlineLastPage,
} from "react-icons/md";
import ModalComponent from "@/components/ModalComponent";

const Page = () => {
  const [ValueToggle, setValueToggle] = useState(true);
  const [ProvidedValue, setProvidedValue]: any = useState([
    { id: 1, value: 0, isDelete: false },
  ]);
  const [currentStep, setCurrentStep] = useState(0);
  const [currentOuter, setCurrentOuter] = useState(0);
  const [currentInner, setCurrentInner] = useState(0);
  const [history, setHistory] = useState([]);

  const [ResetValue, setResetValue] = useState([]);

  // Function to perform one step of bubble sort
  const stepBubbleSort = () => {
    const arr = [...ProvidedValue];
    const n = arr.length;
    const newHistory: any = [
      ...history,
      { ProvidedValue: [...ProvidedValue], currentOuter, currentInner },
    ];

    if (currentOuter < n - 1) {
      if (currentInner < n - 1 - currentOuter) {
        if (arr[currentInner].value > arr[currentInner + 1].value) {
          [arr[currentInner].value, arr[currentInner + 1].value] = [
            arr[currentInner + 1].value,
            arr[currentInner].value,
          ];
        }
        setCurrentInner(currentInner + 1);
      } else {
        setCurrentInner(0);
        setCurrentOuter(currentOuter + 1);
      }
    }

    setProvidedValue(arr);
    setHistory(newHistory);
    setCurrentStep(currentStep + 1);
  };

  // Function to step back one step in bubble sort
  const stepBackBubbleSort = () => {
    if (currentStep > 0) {
      const lastState: any = history[history.length - 1];
      setProvidedValue(lastState.ProvidedValue);
      setCurrentOuter(lastState.currentOuter);
      setCurrentInner(lastState.currentInner);
      setHistory(history.slice(0, -1));
      setCurrentStep(currentStep - 1);
    }
  };

  //
  const handleSubmit = () => {
    setValueToggle(!ValueToggle);
  };
  return (
    <div className="relative">
      <div className="flex justify-start gap-3 items-center py-5">
        <p>Enter values here!</p>
        <HiOutlinePencil onClick={() => setValueToggle(!ValueToggle)} />
      </div>

      <ModalComponent
        ValueToggle={ValueToggle}
        setValueToggle={setValueToggle}
        setProvidedValue={setProvidedValue}
        ProvidedValue={ProvidedValue}
        handleSubmit={handleSubmit}
      />

      <div className="w-full h-full flex flex-col justify-center items-center py-10">
        <div className="w-[500px] flex justify-start items-end gap-1">
          {ProvidedValue.map((ele: any) => {
            const val = 500 / ProvidedValue.length;
            const reduceValue = ProvidedValue.reduce(
              (acc: any, cv: any) => acc + cv.value,
              0
            );
            const height = (200 * ele.value) / reduceValue;

            return (
              <div
                key={ele.id}
                style={{ width: `${val - 2}px`, height: `${height}px` }}
                className="bg-red-400 shrink-0 text-xs"
              >
                {ele.value}
              </div>
            );
          })}
        </div>

        <ul className="flex justify-center items-center gap-10 mt-10">
          <li>
            <MdOutlineFirstPage />
          </li>
          <li>
            <MdNavigateBefore onClick={stepBackBubbleSort} />
          </li>
          <li>{`${currentStep}`}</li>
          <li>
            <MdNavigateNext onClick={stepBubbleSort} />
          </li>
          <li>
            <MdOutlineLastPage />
          </li>
          <li>
            <button>Reset</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Page;

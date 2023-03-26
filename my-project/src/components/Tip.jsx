import React from "react";
import DollarIcon from "../assets/icon-dollar.svg";
import PersonIcon from "../assets/icon-person.svg";

const Tip = ({
  selectTip,
  handleBill,
  handleNumberOfPeople,
  selectedTip,
  billValue,
  numberOfPeopleValue,
  customTip,
  handleCustomTip,
}) => {
  return (
    <div className="w-[45%] flex flex-col gap-10 sm:w-full">
      <div className="flex flex-col relative">
        <div className="flex justify-between">
          <label htmlFor="bill" className="pb-1 text-Darkgrayishcyan">
            Bill
          </label>
          <label
            htmlFor="bill"
            className={`pb-1 text-red-600 ${
              billValue.startsWith("0") ? "block" : "hidden"
            }`}
          >
            Can't be zero
          </label>
        </div>
        <input
          type="number"
          name="bill"
          id="bill"
          placeholder="0"
          value={billValue}
          onChange={handleBill}
          className={`bg-Verylightgrayishcyan text-Verydarkcyan p-2 text-right text-2xl rounded-md px-4 cursor-pointer  hover:border-2 hover:border-Strongcyan border-2 border-White ${
            billValue.startsWith("0")
              ? "border-red-600 hover:border-red-600 focus:border-red-600 outline-red-600"
              : "border-Strongcyan outline-none focus:border-Strongcyan"
          }`}
        />
        <img
          src={DollarIcon}
          alt="DollarIcon"
          className="absolute w-3 top-12 left-4"
        />
      </div>
      <div>
        <p className="pb-3 text-Darkgrayishcyan">Select Tip %</p>
        <div className="grid grid-cols-3 grid-rows-2 gap-4 xl:grid-rows-3 xl:grid-cols-2 lg:grid-rows-3 lg:grid-cols-2">
          {[5, 10, 15, 25, 50].map((percentage) => (
            <span
              key={percentage}
              className={`tip__percentage ${
                selectedTip === percentage
                  ? "bg-Strongcyan text-Verydarkcyan"
                  : "bg-Verydarkcyan text-White"
              }`}
              onClick={() => selectTip(percentage)}
            >
              {percentage}%
            </span>
          ))}
          <input
            type="number"
            placeholder="Custom"
            value={customTip}
            className="bg-Verylightgrayishcyan text-Verydarkcyan text-2xl py-2 w-[120px] text-right rounded-md px-3 cursor-pointer hover:border-2 hover:border-Strongcyan border-2 border-White focus:outline-Strongcyan 2xl:w-[100px] 2xl:py-1.5 2xl:text-xl xl:w-full xl:text-2xl lg:w-full sm:px-4"
            onChange={handleCustomTip}
          />
        </div>
      </div>
      <div className="flex flex-col relative">
        <div className="flex justify-between">
          <label
            htmlFor="number__of__people"
            className="pb-1 text-Darkgrayishcyan"
          >
            Number of People
          </label>
          <label
            htmlFor="bill"
            className={`pb-1 text-red-600 ${
              numberOfPeopleValue.startsWith("0") ? "block" : "hidden"
            }`}
          >
            Can't be zero
          </label>
        </div>
        <input
          type="number"
          name="number__of__people"
          placeholder="0"
          value={numberOfPeopleValue}
          onChange={handleNumberOfPeople}
          className={`bg-Verylightgrayishcyan text-Verydarkcyan p-2 text-right text-2xl rounded-md px-4 cursor-pointer  hover:border-2 hover:border-Strongcyan border-2 border-White ${
            numberOfPeopleValue.startsWith("0")
              ? "border-red-600 hover:border-red-600 focus:border-red-600 outline-red-600"
              : "border-Strongcyan outline-none focus:border-Strongcyan"
          }`}
        />
        <img
          src={PersonIcon}
          alt="PersonIcon"
          className="absolute w-3 top-12 left-4"
        />
      </div>
    </div>
  );
};

export default Tip;

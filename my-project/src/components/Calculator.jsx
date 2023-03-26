import React from "react";

const Calculator = ({
  tipAmountPerPerson,
  totalPerPerson,
  handleResetClick,
}) => {
  return (
    <div className="w-1/2 h-full bg-Verydarkcyan  rounded-2xl p-10 pt-14 flex flex-col justify-between lg:px-8 md:px-6 md:pt-12 sm:w-full sm:pt-10 sm:pb-8">
      <div className="flex flex-col gap-10 sm:gap-6 sm:pb-10">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-White xl:text-sm md:text-xs">Tip Amount</span>
            <span className="text-Lightgrayishcyan text-sm xl:text-xs md:text-[10px]">
              / person
            </span>
          </div>
          <h1 className="text-5xl text-Strongcyan xl:text-4xl lg:text-4xl md:text-3xl">
            {tipAmountPerPerson ? `$${tipAmountPerPerson}` : "$0.00"}
          </h1>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-White xl:text-sm md:text-xs">Total</span>
            <span className="text-Lightgrayishcyan text-sm xl:text-xs md:text-[10px]">
              / person
            </span>
          </div>
          <h1 className="text-5xl text-Strongcyan xl:text-4xl  md:text-3xl">
            {totalPerPerson ? `$${totalPerPerson}` : "$0.00"}
          </h1>
        </div>
      </div>
      <button
        className={`text-Verydarkcyan w-full text-xl rounded-md py-3 xl:text-lg ${
          totalPerPerson && tipAmountPerPerson !== 0
            ? "bg-Strongcyan hover:bg-Lightgrayishcyan"
            : "bg-ButtonColor"
        }`}
        onClick={handleResetClick}
      >
        RESET
      </button>
    </div>
  );
};

export default Calculator;

import React, { useEffect, useState } from "react";
import Calculator from "../components/Calculator";
import Tip from "../components/Tip";

const TipCalculator = () => {
  const [selectedTip, setSelectedTip] = useState("");
  const [customTip, setCustomTip] = useState("");
  const [billValue, setBillValue] = useState("");
  const [numberOfPeopleValue, setNumberOfPeopleValue] = useState("");
  const [tipAmountPerPerson, setTipAmountPerPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);

  const selectTip = (tip) => {
    setSelectedTip(tip);
  };

  const handleBill = (event) => {
    setBillValue(event.target.value);
  };

  const handleNumberOfPeople = (event) => {
    setNumberOfPeopleValue(event.target.value);
  };

  const handleCustomTip = (event) => {
    const customTipValue = parseInt(event.target.value);
    setCustomTip(customTipValue);
    selectTip(customTipValue);
  };

  const handleResetClick = () => {
    setBillValue("");
    setNumberOfPeopleValue("");
    setTipAmountPerPerson(0);
    setTotalPerPerson(0);
    setSelectedTip("");
    setCustomTip("");
  };

  useEffect(() => {
    if (
      billValue > 0 &&
      (selectedTip || customTip) &&
      numberOfPeopleValue > 0
    ) {
      const tipAmount =
        (Number(billValue) * Number(selectedTip / 100)) /
        Number(numberOfPeopleValue);
      setTipAmountPerPerson(tipAmount.toFixed(2));

      const totalBill = Number(
        Number(billValue) / Number(numberOfPeopleValue) +
          Number(tipAmount.toFixed(2))
      );
      setTotalPerPerson(totalBill.toFixed(2));
    }
  }, [billValue, selectedTip, numberOfPeopleValue]);

  return (
    <div className="w-[50vw] h-[50vh] bg-White rounded-[20px] flex items-center p-8 pl-12 pr-8 gap-12 2xl:w-[65vw] 2xl:h-[60vh] xl:w-[75vw] lg:w-[85vw]  sm:w-full sm:flex-col sm:p-7 sm:rounded-none sm:h-full">
      <Tip
        selectTip={selectTip}
        handleBill={handleBill}
        handleNumberOfPeople={handleNumberOfPeople}
        selectedTip={selectedTip}
        billValue={billValue}
        numberOfPeopleValue={numberOfPeopleValue}
        customTip={customTip}
        handleCustomTip={handleCustomTip}
      />
      <Calculator
        tipAmountPerPerson={tipAmountPerPerson}
        totalPerPerson={totalPerPerson}
        handleResetClick={handleResetClick}
      />
    </div>
  );
};

export default TipCalculator;

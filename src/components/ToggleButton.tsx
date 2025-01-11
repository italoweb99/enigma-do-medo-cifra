import { useEffect, useState } from "react";

const ToggleButton = ({
  text = "",
  textParams = "text-sm font-medium text-gray-900 dark:text-gray-300",
  bgColor = "bg-gray-200",
  bgColorChecked = "bg-blue-600",
  size = "w-11 h-6",
  btnColor = "bg-white",
  outerRingColor = "peer-focus:ring-blue-300",
  btnRingColorAfter = "white",
  btnRingColor = "white",
  ringColor = "",
  ringSize = "",
  isChecked,
}) => {
  const [isCheckedInt, setIsChecked] = useState(false);
 
  const handleChecked = () => {
    setIsChecked(!isCheckedInt);
    isChecked(!isCheckedInt);
  };

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={handleChecked}
      />
      <div
        className={`relative ${bgColor} peer-checked:bg-emerald-800 ${size} after:bg-green-500 peer-focus:${outerRingColor} peer-checked:after:border-green-500 after:border-green-500 ring-${ringColor} ${ringSize} peer-focus:outline-none peer-focus:ring-4 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600`}
      ></div>
      <span className={`ms-3 ${textParams}`}>{text}</span>
    </label>
  );
};

export default ToggleButton;

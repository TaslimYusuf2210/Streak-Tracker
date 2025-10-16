import { useState } from "react";
import { FaCheck } from "react-icons/fa";

function Checkbox({checked, onToggle}) {
  return (
    <div
      onClick={onToggle}
      className={`w-6 h-6 border-black border rounded-full
        flex items-center justify-center
        cursor-pointer transition-all duration-200
        ${checked ? "bg-primary border-none" : "bg-white border border-black"}
        `}
    >
      {checked && (
        <div className="bg-primary rounded-full border-2 flex items-center justify-center w-4 h-4">
          <FaCheck className="text-white text-[7px]" />
        </div>
      )}
    </div>
  );
}

export default Checkbox;

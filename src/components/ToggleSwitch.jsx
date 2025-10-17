function ToggleSwitch({
  checked,
  onChange,
  id = "toggle",
  disabled = false,
  size = "md", // "sm" | "md" | "lg"
  colorClass = "bg-blue-600", // tailwind color for ON state
}) {
  const sizes = {
    sm: { track: "w-10 h-5", knob: "w-4 h-4 translate-x-0.5" },
    md: { track: "w-14 h-8", knob: "w-6 h-6 translate-x-0.5" },
    lg: { track: "w-18 h-10", knob: "w-8 h-8 translate-x-0.5" },
  };
  const s = sizes[size] || sizes.md;
  return (
    <div>
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => !disabled && onChange(!checked)}
        disabled={disabled}
        className={`relative inline-flex items-center ${
          s.track
        } rounded-full transition-colors duration-200 focus:outline-none  ${
          checked ? `${colorClass} bg-opacity-100` : "bg-gray-200"
        } ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
      >
        {/* knob */}
        <span
          className={`absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow transform transition-transform duration-200 ${
            s.knob
          } ${checked ? "translate-x-[calc(100%_-_-0.3rem)]" : ""}`}
          aria-hidden="true"
        />
      </button>
    </div>
  );
}

export default ToggleSwitch;

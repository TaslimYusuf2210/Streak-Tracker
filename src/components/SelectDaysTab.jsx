function SelectDaysTab({day, toggleDays, selectedDays}) {
    const isActive = selectedDays.find((d) => d.id === day.id);
    
    return ( 
        <div>
                <button 
                type="button"
                onClick={() => toggleDays(day)}
                className=
                {`rounded-md border shadow-md border-gray-300 py-1 w-full hover:bg-blue-50 
                ${isActive ? "bg-blue-600 text-white hover:bg-blue-500" : ""}`}
                value={day.value}
                >
                    {day.name}
                </button>
        </div>
     );
}

export default SelectDaysTab;
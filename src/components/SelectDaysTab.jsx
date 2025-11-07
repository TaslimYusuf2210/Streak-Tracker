import { useState } from "react";

// const days = [
//     {
//         id: 1,
//         name: "Sun",
//         value: "Sunday"
//     },
//     {
//         id: 2,
//         name: "Mon",
//         value: "Monday"
//     },
//     {
//         id: 3,
//         name: "Tue",
//         value: "Tuesday"
//     },
//     {
//         id: 4,
//         name: "Wed",
//         value: "Wednesday"
//     },
//     {
//         id: 5,
//         name: "Thu",
//         value: "Thursday"
//     },
//     {
//         id: 6,
//         name: "Fri",
//         value: "Friday"
//     },
//     {
//         id: 7,
//         name: "Sat",
//         value: "Saturday"
//     },
// ]

function SelectDaysTab({days}) {
    // const [isActive, setIsActive] = useState(false)
    const [selectedDays, setSelectedDays] = useState([])

    function toggleDays(day) {
        console.log(day)
        // setSelectedDays([])
        // setIsActive((day) => !day)
        setSelectedDays((prev) => {
            // check if the clicked day exists in the selectedDays
            console.log(prev)
            if (prev.find((e) => e.id === day.id)) {
                console.log("Similarities")
                //Remove the selectedDay from selectedDays
                const removeDay = prev.filter(d => d.id !== day.id)
                console.log(removeDay)
                return removeDay
            } else {
                console.log(prev, selectedDays)
                return [...prev, day]
            }

        })
    }

    return ( 
        <div className="grid grid-cols-5">
            {
            days.map((day) =>  {
                const isActive = selectedDays.find((d) => d.id === day.id);

                return (
                <button 
                key={day.id}
                type="button"
                onClick={() => toggleDays(day)}
                className=
                {`rounded-md border shadow-md border-gray-300 py-1 hover:bg-blue-50 
                ${isActive ? "bg-blue-600 text-white hover:bg-blue-500" : ""}`}
                value={day.value}
                >
                    {day.name}
                </button>
                )
            })
            }
        </div>
     );
}

export default SelectDaysTab;
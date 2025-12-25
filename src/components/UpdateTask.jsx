import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import SelectDaysTab from "./SelectDaysTab";

const days = [
  {
    id: 1,
    name: "Sun",
    value: "Sunday",
  },
  {
    id: 2,
    name: "Mon",
    value: "Monday",
  },
  {
    id: 3,
    name: "Tue",
    value: "Tuesday",
  },
  {
    id: 4,
    name: "Wed",
    value: "Wednesday",
  },
  {
    id: 5,
    name: "Thu",
    value: "Thursday",
  },
  {
    id: 6,
    name: "Fri",
    value: "Friday",
  },
  {
    id: 7,
    name: "Sat",
    value: "Saturday",
  },
];

const schema = yup.object().shape({
  title: yup
    .string()
    .required("Please enter habit name"),
  frequency: yup.string().required("Frequency is required"),
});

function UpdateTask() {

    const [selectedDays, setSelectedDays] = useState([])
        const [customError, setCustomError] = useState(false)
        const {
            register,
            handleSubmit,
            reset,
            watch,
            formState: { errors },
          } = useForm({
            resolver: yupResolver(schema),
            defaultValues: {
                title: "",
                frequency: "",

            }
          });
    
          const frequency = watch("frequency")
    
          const create = async (data) => {
            const token = localStorage.getItem("token")
            console.log(token);
            
            // console.log(data);
            // If user doesn't select days, display error message
            if (data.frequency === "custom" && selectedDays.length < 1) {
              setCustomError(true)
              return;
            }
            console.log(data);
    
            setCustomError(false)
    
            const payload = {...data, ...(data.frequency === "custom" && {custom: selectedDays})}
            console.log(payload)
    
            createHabit(token, payload)
            .then(res => console.log("Task created", res))
            .catch(err => console.log("Error:", err));
            
            getAllHabits(token)
            cancel()
    
          }
    
          const cancel = async () => {
            reset();
            setSelectedDays([])
          }

          function toggleDays(day) {
    const dayValue = day.value
    setSelectedDays((prev) => {
      // check if the clicked day exists in the selectedDays
      console.log(prev);
      if (prev.find((d) => d === dayValue)) {
        console.log("Similarities");
        //Remove the selectedDay from selectedDays
        const removeDay = prev.filter((d) => d !== dayValue);
        console.log(removeDay);
        return removeDay;
      } else {
        //Add selected day
        console.log(prev, selectedDays);
        return [...prev, dayValue];
      }
    });
  }
    return ( 
        <div className="p-6">
              <div className="mb-8">
                <header className="text-xl font-semibold">Update Task</header>
                <p className="text-gray-700">Add a new habit to track your progress</p>
              </div>
              <form className="space-y-6" onSubmit={handleSubmit(create)}>
                <div className="flex flex-col gap-1">
                  <label className="font-semibold">Task Name</label>
                  <input
                      {...register("title")}
                    className="border shadow-md h-10 border-gray-300 rounded-md p-4 placeholder:text-gray-900"
                    placeholder="e.g Morning Exercise"
                  />
                  {errors.title && (
                        <p className="text-sm text-red-500 font-light">
                            {errors.title.message}
                        </p>
                        )}
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-semibold">Frequency</label>
                  <div className="px-2 border flex justify-center items-center border-gray-300 rounded-md h-10">
                    <select
                    {...register("frequency")} 
                    className="w-full select-clean"
                    >
                        <option value="" defaultValue></option>
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="custom">Custom Days</option>
                    </select>
                  </div>
                  {errors.frequency && (
                      <p className="text-sm text-red-500 font-light">
                        {errors.frequency.message}
                      </p>
                    )}
                </div>
        
                {frequency === "custom" && (
        
                <div className="flex flex-col gap-1">
                  <p className="font-semibold">Select Days</p>
                  <div className="grid grid-cols-3 gap-2">
                    {days.map((day) => (
                        <SelectDaysTab
                        key={day.id}
                        day={day}
                        toggleDays={toggleDays}
                        selectedDays={selectedDays}
                        ></SelectDaysTab>
                    ))
                    }
                  </div>
                  {customError === true && (
                    <span className="text-red-500">
                      Please choose a day
                    </span>
                  )}
                </div>
                )
                }
        
        
                <div className="flex gap-3">
                    <button 
                    type="submit"
                    className="hover:bg-blue-500 rounded-md bg-blue-400 text-white w-full font-medium py-2"
                    >Create Task
                    </button>
                    <button 
                    onClick={cancel}
                    type="button"
                    className="hover:bg-gray-100 border border-gray-300 rounded-md w-full font-medium py-2"
                    >Cancel
                    </button>
                </div>
              </form>
            </div>
     );
}

export default UpdateTask;
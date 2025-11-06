import SelectDaysTab from "./SelectDaysTab";

function CreateTask() {
  return (
    <div className="p-6">
        <div className="mb-8">
            <header className="text-xl font-semibold">Create New Task</header>
            <p className="text-gray-700">Add a new habit to track your progress</p>

        </div>
      <form className="space-y-6">
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Task Name</label>
          <input
            //   {...register("email")}
            className="border shadow-md h-10 border-gray-300 rounded-md p-4 placeholder:text-gray-900"
            placeholder="e.g Morning Exercise"
          />
          {/* {errors.email && (
                <p className="text-sm text-red-500 font-light">
                    {errors.email.message}
                </p>
                )} */}
        </div>
        <div className="flex flex-col gap-1">
            <label className="font-semibold">Email</label>
            <select>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="custom days">Custom Days</option>
            </select>
            {/* {errors.email && (
              <p className="text-sm text-red-500 font-light">
                {errors.email.message}
              </p>
            )} */}
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-semibold">Select Days</label>
            <SelectDaysTab></SelectDaysTab>
            
          </div>
      </form>
    </div>
  );
}

export default CreateTask;

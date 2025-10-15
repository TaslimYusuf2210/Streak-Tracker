import Checkbox from "./Checkbox";
import { RiFireLine } from "react-icons/ri";

function Task({task, days}) {
    return ( 
        <div className="bg-white shadow-lg px-4 py-8 rounded-xl flex justify-between items-center">
            <div className="flex gap-4">
                <Checkbox></Checkbox>
                <p className="font-medium">{task}</p>
            </div>
            <div className="flex items-center gap-2">
                <RiFireLine className="text-orange-500 text-xl"/>
                <p className="text-orange-500 font-medium text-lg">{days}</p>
                <span>days</span>
            </div>
        </div>
     );
}

export default Task;
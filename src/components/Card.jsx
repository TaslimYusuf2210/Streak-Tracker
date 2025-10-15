function Card({title, icon, value, footer}) {
    return ( 
        <div className="min-h-52 p-4 rounded-xl bg-white shadow-md flex flex-col justify-between">
            <div className="flex justify-between items-center">
                <p className="text-gray-600 font-medium">{title}</p>
                <span>{icon}</span>
            </div>
            <div className="h-1/2 flex flex-col justify-between">
                <p className="text-4xl font-bold">{value}</p>
                <p className="text-gray-600 text-sm">{footer}</p>
            </div>
        </div>
     );
}

export default Card;
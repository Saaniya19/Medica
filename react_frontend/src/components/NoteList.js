import React, {useEffect, useState} from "react"

export const NoteList = ({}) => {
    const [formattedDate, setFormattedDate] = useState('');
    
    useEffect(() => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(currentDate.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        setFormattedDate(formattedDate);
      }, []);

    return (
        <div className="flex flex-col items-start py-6 pr-20 pl-10 mt-3 text-2xl rounded-3xl bg-neutral-100 max-md:px-5 max-md:max-w-full">
            <div id="currentDate" className="text-center text-neutral-500 max-md:max-w-full">
                {formattedDate}
            </div>
            <textarea style={{ width: '100%' }} className="mt-6 text-black max-md:max-w-full" placeholder="Enter patient note."></textarea>
        </div>
    );
};
import React, {useEffect, useState} from "react"

export const EditPatientProfile = ({}) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-center self-stretch px-11 py-11 my-auto w-full bg-white shadow-sm rounded-[30px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/77c9c3e7dd9b254ab2b3806e4cdb5f323d3f2602cfa1749724d3f287e2bedd26?"
                className="mt-5 max-w-full aspect-square w-[150px]"
            />

            <input className="mt-9 text-5xl font-semibold text-center text-black max-md:text-4xl" placeholder="Enter name"></input>
            <div className="mt-3.5 text-3xl font-medium text-center whitespace-nowrap text-zinc-500">ID #930823</div>

            <div className="self-stretch max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-[29%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col mt-14 text-3xl font-medium text-black whitespace-nowrap max-md:mt-10">Date of Birth:</div>
                    <div className="flex flex-col mt-14 text-3xl font-medium text-black whitespace-nowrap max-md:mt-10">Sex:</div>
                    <div className="flex flex-col mt-14 text-3xl font-medium text-black whitespace-nowrap max-md:mt-10">Email:</div>
                    <div className="flex flex-col mt-14 text-3xl font-medium text-black whitespace-nowrap max-md:mt-10">Address:</div>
                
                </div>
                <div className="flex flex-col ml-5 w-[71%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow text-2xl text-center whitespace-nowrap text-neutral-500 max-md:mt-10">
                        
                        <input style={{position:'text-right'}} className="self-end mt-16 max-md:mt-10" placeholder="DD/MM/YYYY"></input>
                        <input style={{position:'text-right'}} className="self-end mt-16 max-md:mt-10" placeholder="Enter sex."></input>
                        <input style={{position:'text-right'}} className="self-end mt-16 max-md:mt-10" placeholder="Enter email."></input>
                        <input style={{position:'text-right'}} className="self-end mt-16 max-md:mt-10" placeholder="Enter address."></input>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};
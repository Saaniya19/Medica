import React, {useEffect, useState} from "react"

export const MedList = ({startDate, medName, dosage}) => {
    return (
        <div className="px-5 pb-9 mt-1 mb-9 rounded-3xl bg-neutral-100 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="text-2xl text-center whitespace-nowrap text-neutral-500 max-md:mt-10">
                            {startDate}
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="mt-5 text-2xl text-center text-black max-md:mt-10">
                            {medName}
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="mt-6 text-2xl text-center whitespace-nowrap text-neutral-500 max-md:mt-10">
                            {dosage}
                        </div>
                    </div>
                </div>
            </div>
    );
};
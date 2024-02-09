import React, {useEffect, useState} from "react"
import { Link } from 'react-router-dom';

export const Patient = ({ name, ID, age, sex}) => {
    return (
        <Link to='/view-patient' style={{ textAlign: 'left' }} className="flex z-10 gap-5 justify-between items-stretch px-12 py-3 mt-2 w-[90%] rounded-xl border-white border-solid bg-stone-50 border-[3px] max-w-[1575px] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
            <div className="flex-auto self-start mt-4 text-3xl font-medium text-neutral-400 max-md:max-w-full">
                {name} <span className="text-neutral-400">(ID #{ID})</span>
            </div>
            <div className="flex gap-5 justify-between items-stretch text-2xl text-center text-black">
            <div className="grow items-stretch px-8 py-3 rounded-3xl bg-blue-300 bg-opacity-80 max-md:px-5">
                Age: {age}
            </div>
            <div className="grow justify-center items-stretch self-start px-8 py-3 rounded-3xl bg-blue-300 bg-opacity-80 max-md:px-5">
                Sex: {sex}
            </div>
            </div>
        </Link>
    );
};
import React, {useEffect, useState} from "react"
import './App.css';
import { Nav } from './components/NavBar.js'
import { Stocks } from './components/Stocks'
import { PatientProfile } from "./components/PatientProfile.js";
import { MedList } from "./components/MedList.js";
import { NoteList } from "./components/NoteList.js";
import { Link } from 'react-router-dom';

export const ViewPatient = ({}) => {

    const[stocks, set_stocks] = useState([])
    const[selected_stock, set_selected_stock] = useState('portfolio')
    const [notes, setNotes] = useState([]);

    const handleAddNote = () => {
        setNotes([...notes, <NoteList/>]);
    };
    useEffect(() => {
        fetch("/get_patients").then(response =>
        response.json().then(data => {
            set_stocks(data.stocks);
        })
        );
    }, [stocks]);

    return (
        <div className="flex flex-col pb-12 bg-neutral-50">
            <Nav></Nav>

            <div className="self-center mt-20 w-full max-w-[1859px] max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 mt-20 max-md:flex-col max-md:gap-0 max-md:">

                    <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full"></div>

                    <PatientProfile name="" dob="" sex="" email="" address=""></PatientProfile>

                    <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                        <div className="flex flex-col px-3 py-11 bg-white shadow-sm rounded-[30px] max-md:max-w-full">
                            <div className="flex gap-5 pb-6 justify-between self-center max-w-full font-semibold whitespace-nowrap w-[669px] max-md:flex-wrap">
                                <div className="flex-auto pl-10 self-start text-4xl text-black">Medications</div>
                                <Link to='/verify-prescription' className="justify-center px-6 py-4 text-3xl text-center text-white bg-blue-500 rounded-3xl max-md:px-5">Add</Link>
                            </div>
                            <MedList startDate="" medName="" dosage=""></MedList>
                            <MedList startDate="" medName="" dosage=""></MedList>
                            <MedList startDate="" medName="" dosage=""></MedList>
                        </div>

                        <div className="flex flex-col px-3 py-10 mt-20 bg-white shadow-sm rounded-[30px] max-md:mt-10 max-md:max-w-full">
                            <div className="flex pb-6 gap-5 justify-between self-center max-w-full font-semibold whitespace-nowrap w-[675px] max-md:flex-wrap">
                                <div className="flex-auto pl-10 self-start mt-5 text-4xl text-black">
                                    Notes
                                </div>
                                <div onClick={handleAddNote} className="justify-center px-6 py-4 text-3xl text-center text-white bg-blue-500 rounded-3xl max-md:px-5">
                                    Add
                                </div>
                            </div>
                            {notes}
                        </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full"></div>

                    </div>
            </div>
        </div>
    );
};
import React, {useEffect, useState} from "react"
import './App.css';
import { Nav } from './components/NavBar.js'
import { Stocks } from './components/Stocks'
import { EditPatientProfile } from "./components/EditPatientProfile.js";
import { MedList } from "./components/MedList.js";
import { NoteList } from "./components/NoteList.js";
import { Link } from 'react-router-dom';

export const AddPatient = ({}) => {

    const[stocks, set_stocks] = useState([])
    const[selected_stock, set_selected_stock] = useState('portfolio')
    const [isVisible, setIsVisible] = useState(false);
    const [notes, setNotes] = useState([]);

    // const [id, setID] = useState()
    const [name, setName] = useState('')
    //const [dob, setDob] = useState('')
    const [email, setEmail] = useState('')
    const [comments, setComments] = useState('')
    const [age, setAge] = useState(0)
    const [sex, setSex] = useState('')
    const [address, setAddress] = useState('')
    const [valid, setValid] = useState(true)
    const [isErrorVisible, setErrorVisible] = useState(false)
    const [stockExists, setStockExists] = useState(false)
  
    const add_patient = async(name, email, comments, age, sex, address) => {
      await fetch('/add_patient', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({address, sex, age, comments, email, name}),
      }).then(
        console.log(JSON.stringify({name, email, comments, age, sex, address}))
      );
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setErrorVisible(false)
            console.log('hello this is ion')
            add_patient(name, email, comments, age, sex, address)
            // Reset the inputs
            setName('')
            setEmail('')
            setComments('')
            setAge(0)
            setSex('')
            setAddress('')
          } catch (error) {
            console.error('this is an error', error);
          }
    };
    const handleAddNote = () => {
        setNotes([...notes, <NoteList/>]);
    };
    const handleDivClick = () => {
        setIsVisible(true);
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

                    <div className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col items-center self-stretch px-11 py-11 my-auto w-full bg-white shadow-sm rounded-[30px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/77c9c3e7dd9b254ab2b3806e4cdb5f323d3f2602cfa1749724d3f287e2bedd26?"
                            className="mt-5 max-w-full aspect-square w-[150px]"
                        />

                        <input className="mt-9 text-5xl font-semibold text-center text-black max-md:text-4xl" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name"></input>
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
                                    <input style={{position:'text-right'}} className="self-end mt-16 max-md:mt-10" value={sex} onChange={(e) => setSex(e.target.value)} placeholder="Enter sex."></input>
                                    <input style={{position:'text-right'}} className="self-end mt-16 max-md:mt-10" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email."></input>
                                    <input style={{position:'text-right'}} className="self-end mt-16 max-md:mt-10" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter address."></input>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                        <div className="flex flex-col px-3 py-11 bg-white shadow-sm rounded-[30px] max-md:max-w-full">
                            <div className="flex gap-5 pb-6 justify-between self-center max-w-full font-semibold whitespace-nowrap w-[669px] max-md:flex-wrap">
                                <div className="flex-auto pl-10 self-start text-4xl text-black">Medications</div>
                                <Link to='/verify-prescription' className="justify-center px-6 py-4 text-3xl text-center text-white bg-blue-500 rounded-3xl max-md:px-5">Add</Link>
                            </div>

                        </div>

                        <div className="flex flex-col px-3 py-10 mt-20 bg-white shadow-sm rounded-[30px] max-md:mt-10 max-md:max-w-full">
                            <div className="flex pb-6 gap-5 justify-between self-center max-w-full font-semibold whitespace-nowrap w-[675px] max-md:flex-wrap">
                                <div className="flex-auto pl-10 self-start mt-5 text-4xl text-black">
                                    Notes
                                </div>
                                <button onClick={handleAddNote} className="justify-center px-6 py-4 text-3xl text-center text-white bg-blue-500 rounded-3xl max-md:px-5">
                                    Add
                                </button>
                            </div>
                                {notes}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full"></div>

                    </div>
            </div>

            <Link to='/' onClick={handleSubmit} style={{ textAlign: 'centre' }} className="flex justify-center items-center">
                <div className="w-[10%] pl-45 px-12 py-4 mt-11 text-3xl font-semibold text-white bg-blue-500 rounded-3xl max-md:px-5 max-md:mt-10">
                    Save
                </div>
            </Link>

        </div>
    );
};
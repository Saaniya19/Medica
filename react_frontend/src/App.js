import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react"
import {Stocks} from './components/Stocks'
import {Nav} from './components/NavBar.js'
import {Patient} from './components/PatientInList.js'
import { Link } from 'react-router-dom';


function App() {

  const[stocks, set_stocks] = useState([])

  const[selected_stock, set_selected_stock] = useState('portfolio')

  useEffect(() => {
    fetch("/get_patients").then(response =>
      response.json().then(data => {
        set_stocks(data.stocks);
      })
    );
  }, [stocks]);

  return (
    <div className="flex flex-col items-center pb-9 bg-white">
      
      <Nav></Nav>

      <div className="px-5 mt-24 ml-20 max-w-full w-[1069px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
          <div className="flex flex-col items-stretch w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/13d51db9e966a5bd609db3d9fe695f9b3225ac360358cf1bd9a4405af8cdd909?"
              className="object-center grow w-full aspect-[1.39] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col items-stretch ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="self-stretch my-auto text-5xl font-semibold text-center text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              Your one stop medication management service.{" "}
            </div>
          </div>
        </div>
      </div>

      
        <div className="items-center px-16 pt-4 pb-3.5 mt-28 max-w-full text-4xl font-semibold text-center text-white bg-blue-500 border-0 rounded-[30px] w-[416px] max-md:px-5 max-md:mt-10">
          Add a patient
        </div>
      

      <div className="flex gap-5 justify-between items-start px-8 py-3.5 mt-14 max-w-full text-center max-md:flex-wrap max-md:px-5 max-md:mt-10">
        <div className="flex gap-5 justify-between items-stretch text-4xl text-neutral-400">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6932e9bd81f8fe18089d7b56ca19bfad64133123894506fc1097f7c33e2bc8a9?"
            className="object-center w-12 aspect-[0.94] pt-2 mt-12"
          />
          <input className="flex-auto self-start mt-4 justify-between items-start px-8 py-3.5 mt-14 max-w-full text-left pl-20 bg-white border-solid border-[5px] border-stone-300 rounded-[30px] w-[1214px] max-md:flex-wrap max-md:px-5 max-md:mt-10" placeholder="Type patient name"></input>
        </div>
        <div className="justify-center items-stretch pt-6 pb-6">
          <button className="px-10 py-4 text-3xl font-semibold text-white whitespace-nowrap bg-blue-500 rounded-3xl max-md:px-5 mt-10">
            Search
          </button>
        </div>
      </div>
      <div className="pb-20"></div>

      <Patient name="Aayaan Naqvi" ID="1234567" age="79" sex="Male"></Patient>
      <Patient name="Aayaan Naqvi" ID="1234567" age="79" sex="Male"></Patient>
      <Patient name="Aayaan Naqvi" ID="1234567" age="79" sex="Male"></Patient>
      <Patient name="Aayaan Naqvi" ID="1234567" age="79" sex="Male"></Patient>
      <Patient name="Aayaan Naqvi" ID="1234567" age="79" sex="Male"></Patient>

    </div>
  );
}

export default App;

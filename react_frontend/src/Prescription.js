import React, {useEffect, useState} from "react"
import './App.css';
import { Nav } from './components/NavBar.js'
import { Link } from 'react-router-dom'

export const Prescription = ({}) => {

    const[stocks, set_stocks] = useState([])
    const[isOpen, setIsOpen] = useState(false);
    const[selectedItem, setSelectedItem] = useState(null);
    const[isClicked, setIsClicked] = useState(false);
    const[selected_stock, set_selected_stock] = useState('portfolio')
    const [isHovered, setIsHovered] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsOpen(false);
    };
    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    useEffect(() => {
        fetch("/get_patients").then(response =>
        response.json().then(data => {
            set_stocks(data.stocks);
        })
        );
    }, [stocks]);

    return (
      <div className="flex flex-col items-center pb-12 bg-white">
        
        <Nav></Nav>

        <div className="mt-40 w-full max-w-[1425px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col px-16 max-md:px-5 max-md:max-w-full">
                  <div className="self-end text-5xl font-semibold text-center text-black max-md:max-w-full max-md:text-4xl">
                    Enter details for the new medication.
                  </div>
                  <div className="mt-10 text-2xl font-medium text-neutral-500 max-md:max-w-full">
                    Drug name
                  </div>
                </div>
                <div className="flex gap-5 justify-between px-12 py-6 text-3xl whitespace-nowrap bg-neutral-100 border-[3px] rounded-[30px] text-neutral-600 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                  <div className="flex-auto">Paxlovid</div>
                </div>
                <div className="mt-4 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[68%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow items-start text-2xl font-medium whitespace-nowrap text-neutral-500 max-md:mt-9">
                        <div className="ml-11 max-md:ml-2.5">Dosage</div>
                        <input className="justify-center items-start self-stretch px-11 py-6 text-3xl bg-neutral-100 border-[3px] rounded-[30px] text-neutral-600 max-md:px-5" placeholder="Enter dosage."></input>
                        <div className="mt-4 ml-11 max-md:ml-2.5">Frequency</div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
                      <div className="self-stretch my-auto text-4xl whitespace-nowrap text-neutral-400 max-md:mt-10">
                        <span onClick={handleClick} className={isClicked ? "" : "font-semibold text-blue-600"}>mg </span>
                         / 
                        <span onClick={handleClick} className={isClicked ? "font-semibold text-blue-600" : ""}> mL</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <button onClick={toggleMenu} className="dropdown-toggle flex gap-5 justify-between px-12 py-6 text-3xl whitespace-nowrap bg-neutral-100 border-[3px] border-blue border-opacity-50 rounded-[30px] text-neutral-600 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                  <div>{selectedItem ? selectedItem : 'Enter frequency.'}</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3aadf278a5730aa6714775becaa2cd1597e427cda4024546fe4b07b9b944fa2f?apiKey=d4725d47a8514f52916d5a74d4e7c8ac&"
                    className="self-start aspect-[2.27] fill-neutral-500 w-[45px]"
                  />
                </button>
                {isOpen && (
                    <div className="dropdown-menu">
                        <ul>
                            <li onClick={() => handleItemClick('Daily')} className="flex gap-5 justify-between px-8 py-3 text-2xl whitespace-nowrap border-solid bg-neutral-100 border-[3px] border-white border-opacity-50 rounded-[30px] text-neutral-600 max-md:flex-wrap max-md:px-5 max-md:max-w-full">Daily</li>
                            <li onClick={() => handleItemClick('Twice Weekly')} className="flex gap-5 justify-between px-8 py-3 text-2xl whitespace-nowrap border-solid bg-neutral-100 border-[3px] border-white border-opacity-50 rounded-[30px] text-neutral-600 max-md:flex-wrap max-md:px-5 max-md:max-w-full">Twice Weekly</li>
                            <li onClick={() => handleItemClick('Weekly')} className="flex gap-5 justify-between px-8 py-3 text-2xl whitespace-nowrap border-solid bg-neutral-100 border-[3px] border-white border-opacity-50 rounded-[30px] text-neutral-600 max-md:flex-wrap max-md:px-5 max-md:max-w-full">Weekly</li>
                            <li onClick={() => handleItemClick('Biweekly')} className="flex gap-5 justify-between px-8 py-3 text-2xl whitespace-nowrap border-solid bg-neutral-100 border-[3px] border-white border-opacity-50 rounded-[30px] text-neutral-600 max-md:flex-wrap max-md:px-5 max-md:max-w-full">Biweekly</li>
                            <li onClick={() => handleItemClick('Monthly')} className="flex gap-5 justify-between px-8 py-3 text-2xl whitespace-nowrap border-solid bg-neutral-100 border-[3px] border-white border-opacity-50 rounded-[30px] text-neutral-600 max-md:flex-wrap max-md:px-5 max-md:max-w-full">Monthly</li>
                        </ul>
                    </div>
                )}
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e38ab1c1c4b056e7b25b4c57dfcfc7296ee73d246f93f8c7895af846ea151131?apiKey=d4725d47a8514f52916d5a74d4e7c8ac&"
              />
            </div>
          </div>
        </div>
        <button style={{ textAlign: 'centre' }} className="flex justify-center items-center">
            <Link to='/view-patient' className="w-[20%] pl-20 pr-40 px-12 py-4 mt-11 text-3xl font-semibold text-white bg-blue-500 rounded-3xl max-md:px-10 max-md:mt-10">
                Save
            </Link>
        </button>
      </div>
    );
};  
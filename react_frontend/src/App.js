import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react"
import {Stocks} from './components/Stocks'


function App() {

  const[stocks, set_stocks] = useState([])

  const[selected_stock, set_selected_stock] = useState('portfolio')


  useEffect(() => {
    fetch("/get_data").then(response =>
      response.json().then(data => {
        set_stocks(data.stocks);
      })
    );
  }, [stocks]);



  return (
    <div className="App min-h-screen ">

      
      <div className='mt-5 flex flex-col h-full'>

        <div className='h-[calc(100%/7)]'>
          <h1 className=' flex text-6xl p-2 text-white justify-center'>Medica</h1>
        </div>

        <div className='flex h-[calc(600%/7)]'>

          <div className='flex flex-col  h-full'>
          
      
            <div className=' h-full w-96 overflow-y-auto'>
              {/* <Stocks stocks={stocks} on_select_stock={set_selected_stock} selected_stock={selected_stock}/> */}
            </div>
            
          </div>
          
         

        </div>

        <div className='mt-2'>
          <p className='text-gray-600 border-[1px] border-gray-900'>Medica, 2023</p>
        </div>

      </div>
  
    </div>
  );
}

export default App;

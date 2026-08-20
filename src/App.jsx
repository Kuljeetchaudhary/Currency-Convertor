// import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from './assets/vite.svg'
// // import heroImg from './assets/hero.png'

// import { InputBox } from './components'
// import useCurrencyInfo from './hooks/usecurrencyinfo'

// function App() {
  
// const [amount ,setAmount]=useState(0);
// const [from,setFrom]=useState("usd");
// const [to,setTo]=useState("inr");
// const [convertedAmount,setConvertedAmount]=useState(0);


// const currencyInfo=useCurrencyInfo(from);
// const options=Object.keys(currencyInfo || {});

// const swap =()=>{
//   setFrom(to);
//   setTo(from);
//   setConvertedAmount(amount)
//   setAmount(convertedAmount)
// }

// const convert=()=>{
// setConvertedAmount(amount*currencyInfo[to])
// }

//   return (
//     <div className='w-screen h-screen flex  justify-center items-center bg-cover bg-center bg-no-repeat'
//     style={{
//       backgroundImage: `url('https://i.pinimg.com/1200x/81/7d/8f/817d8f06b01dc6edbda60133262c48cb.jpg')` ,
//     }}>

// <div className='w-full'>
//   <div className='w-full max-w-md mx-4 border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30  shadow-xl'>
  
// <form
// onSubmit={(e)=>{
//   e.preventDefault();
//   convert()
// }}>
//   <div className='w-full mb-1'>
//     <InputBox label ="Form"
//     amount ={amount}
//     currencyOptions={options}
//     onAmountChange={(value)=>setAmount(value)}
//     onCurrencyChange={(currency)=>setFrom(currency)}
//     selectCurrency={from}></InputBox>
    
//   </div>
//   <div className='relative w-full h-0.5 my-2'>
//     <button
//     type='button'
//     className='absolute left-1/2 -translate-x-1/2-translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.3 text-sm font-medium hover:bg-blue-700 transition-colors z-10'
//     onClick={swap}>Swap</button>
//   </div>
//   <div className='w-full  mb-4'>
//     <InputBox 
//      label ="To"
//     amount ={convertedAmount}
//     currencyOptions={options}
//     onCurrencyChange={(currency)=>setTo(currency)}
//     selectCurrency={to}
//     amountDisable ></InputBox>
//   </div>
//   <button type="submit"
//   className='w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 font-semibold transition-colors '>Convert {from.toUpperCase() } to {to.toUpperCase()}</button>
// </form>

//   </div>
// </div>


//     </div>
//   )
// }

// export default App
import { useState } from 'react';
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';
// import './App.css';
import './index.css' // Ensure this line exists

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo || {});

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    if (currencyInfo && currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  };

  return (
    <div
      className="fixed inset-0 h-screen w-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://i.pinimg.com/1200x/6d/be/ae/6dbeae2d7f877e9b22b0e1d204037235.jpg')`,
      }}
    >
      <div className="w-full max-w-md mx-4 border border-gray-200 rounded-xl p-5 backdrop-blur-md bg-white/30 shadow-2xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="w-full mb-1">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onAmountChange={(value) => setAmount(value)}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
            />
          </div>

          <div className="relative w-full h-0.5 my-2">
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-3 py-1 text-sm font-medium hover:bg-blue-700 transition-colors z-10"
              onClick={swap}
            >
              Swap
            </button>
          </div>

          <div className="w-full mb-4">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
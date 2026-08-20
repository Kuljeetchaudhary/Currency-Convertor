import { useEffect ,useState } from "react";
function useCurrencyInfo(currency){
   const [data,setData]=useState({})
  let url= `YOUR_API_KEY${currency}`;
    useEffect(()=>{
        fetch(url)
        .then((response)=>response.json())
        .then((response)=> setData(response[currency]))
        console.log(data);
    },[currency])
   // console.log(data)
    return data;
}

export default useCurrencyInfo;

import React, { useState } from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import '../css/currency.css';
import axios from 'axios';

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_p2ESAtn7dggMt9sQoG8qiIATgr273ZrJ4aT8nRLw";


function Currency() {


  const [amount, setAmount] = useState();
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('TRY');
  const [result, setResult] = useState(0);

  const exchange = async () => {
    // console.log(amount)
    // console.log(fromCurrency)
    // console.log(toCurrency)
    const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
    // console.log(response)
    const result = (response.data.data[toCurrency] * amount).toFixed(2);
    setResult(result);
  };


  return (
    <div className='currency-div'>
      <div className='header'>
        <h3>EXCHANGE APP</h3>
      </div>

      <div style={{ marginTop: '15px' }}>
        <input
          value={amount} type="number" className='amount'
          onChange={(e) => setAmount(e.target.value)} />
        <select className='from-currency'
          onChange={(e) => setFromCurrency(e.target.value)}>
          <option >USD</option>
          <option >EUR</option>
          <option >TRY</option>
        </select>

        <FaRegArrowAltCircleRight style={{ fontSize: '25px', marginRight: '10px' }} />

        <select className='from-to-currency'
          onChange={(e) => setToCurrency(e.target.value)} >
          <option >TRY</option>
          <option >EUR</option>
          <option >USD</option>
        </select>
        <input value={result} type="number" className='result'
          onChange={(e) => setResult(e.target.value)} />

      </div>
      <div>
        <button className='button'
          onClick={exchange}>EXCHANGE</button>
      </div>

    </div>
  )
}

export default Currency

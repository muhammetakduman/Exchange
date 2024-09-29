import React from 'react'

function Currency() {
  return (
    <div className='currency-div'>
      <input type="number" className='amount' />
      <select className='from-currency'>
        <option value="">USD</option>
        <option value="">EUR</option>
        <option value="">TL</option>
      </select>

      <select >
        <option value="">TL</option>
        <option value="">EUR</option>
        <option value="">USD</option>
      </select>
      <input type="number" id="to-currency-amount" />
    </div>
  )
}

export default Currency

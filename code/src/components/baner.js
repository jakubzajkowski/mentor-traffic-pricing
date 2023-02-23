import React, { useState } from 'react';
import '../style/style.scss'
function Baner(props) {

    const {viewHandler}=props
    const {priceHandler} =props
    const {handleChange} =props
    const {handleChangeYearMonth}=props 
    const {rangeValue}=props
    const {monthYear}=props

    return (<div className='container__down'> 
    <div className='down__view_price'>
        <p>{(viewHandler()==1000) ? `${viewHandler()/1000}M` : `${viewHandler()}K`} Pageviews</p>
        <h2>${priceHandler()}.00 <span>/ {monthYear ? "year" : "month"}</span></h2>
    </div>
    <div className='down__range_check'>
        <input type="range" min="1" max="8" value={rangeValue} className="slider" onChange={handleChange}/>
        <p>Monthly Billing</p>
        <label className="switch">
            <input type="checkbox" onChange={handleChangeYearMonth}/>
            <span className="round"></span>
        </label>
        <p>Yearly Billing <span>25% discount</span></p>
    </div>
    <hr></hr>
    <div className='down__submit'>
        <ul>
            <li>Unlimited websites</li>
            <li>100% data ownership</li>
            <li>Email Reports</li>
        </ul>
        <button>Start my Trial</button>
    </div>
</div>);
  }

export default Baner
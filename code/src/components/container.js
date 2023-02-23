import React, { useState } from 'react';
import '../style/style.scss'
import Baner from './baner';

const Container=(props)=>{
    const [rangeValue,setRangeValue]=useState(8)
    const price=16
    const views=50
    const [monthYear,setMonthYear]=useState(false)

    const handleChange=(e)=>{
        setRangeValue(parseInt(e.target.value))
      }
      const handleChangeYearMonth=(e)=>{
        setMonthYear(!monthYear)
      }
    const priceHandler=()=>{
        return monthYear ? rangeValue*price*12*0.75 : rangeValue*price;
    }
    const viewHandler=()=>{
        return views*rangeValue*2.5
    }
    return (
    <div className='container'>
        <div className='container__upper'>
            <h2>Simple Traffic-Based pricing</h2>
            <p>Sign up for free 30 days trial No credit card needed</p>
        </div>
        <Baner viewHandler={viewHandler} priceHandler={priceHandler} handleChange={handleChange} handleChangeYearMonth={handleChangeYearMonth} rangeValue={rangeValue} monthYear={monthYear}/>
    </div>
    )
}


export default Container
import React, { Component } from 'react'

import Days from './Days';

import leftArrow from '../../images/left-arrow.png'
import rightArrow from '../../images/right-arrow.png'

const Month = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const dayNum = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const CalendarDay = ({
    handleLeft, handleRight,
    todayDate, currentDate,
    handleUserClickOnDay,
    ableDay,
    availableDay,
    uncertainDay,
    unavailableDay
}) => {
    
    return (
        <div className="calendar__days">
            <div className="calendar__days__nav">
                {(parseInt(todayDate.toString().split(' ')[3]) < parseInt(currentDate.year) || (parseInt(todayDate.toString().split(' ')[3]) === parseInt(currentDate.year) && Month.indexOf(todayDate.toString().split(' ')[1]) < Month.indexOf(currentDate.month)))? <img src={leftArrow} className="leftArrow" onClick={() => handleLeft()} /> : <></>}
                <div className="calendar__days__nav__selectedMonth">
                    {`${currentDate.month} ${currentDate.year}`}
                </div>
                <img src={rightArrow} className="rightArrow" onClick={() => handleRight()} />
                {/* <div className="calendar__days__nav__today" onClick={() => handleBackToToday()} >
                    Today
                </div> */}
            </div>
            <div className="calendar__days__container">
                <ul className="calendar__days__title__container">
                    <li className="days__title">Sun</li>
                    <li className="days__title">Mon</li>
                    <li className="days__title">Tue</li>
                    <li className="days__title">Wen</li>
                    <li className="days__title">Thu</li>
                    <li className="days__title">Fri</li>
                    <li className="days__title">Sat</li>
                </ul>
                <Days 
                    todayDate={todayDate} currentDate={currentDate}
                    handleUserClickOnDay={handleUserClickOnDay}
                    ableDay={ableDay}
                    availableDay={availableDay}
                    uncertainDay={uncertainDay}
                    unavailableDay={unavailableDay}
                />
            </div>
        </div>
    )
}

export default CalendarDay
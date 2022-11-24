import React, { Component, useEffect, useState } from 'react'
import './Calendar.css'

import SideBar from "./component/SideBar"
import CalendarDay from "./component/CalendarDay"
import AddBox from "./component/AddBox"
import GroupName from "./component/GroupName"

const Month = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const dayNum = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


const Calendar = ({
    handleUserClickOnDay,
    ableDay
}) => {
    // 今天的日期
    const [todayDate, setTodayDate] = useState(new Date())
    // 點選的日期
    const [currentDate, setCurrentDate] = useState({
        year: todayDate.toString().split(' ')[3],
        month: todayDate.toString().split(' ')[1],
        day: todayDate.toString().split(' ')[2],
    })
    const [timerID, setTimerID] = useState(false);

    // 計時器
    useEffect(() => {
        if (!timerID){
            setTimerID(setInterval(() => {
                setTodayDate(new Date())
            }, 1000))
        }
    }, [todayDate])
    
    // current month -=1 
    const handleLeft = () => {
        if(currentDate.month === 'Jan'){
            const temp = currentDate;
            temp.year = (parseInt(currentDate.year)-1).toString()
            temp.month = 'Dec'
            temp.day = '1'
            setCurrentDate({...temp});
        }else{
            const temp = currentDate;
            temp.month = Month[Month.indexOf(currentDate.month)-1]
            temp.day = '1'
            setCurrentDate({...temp})
        }
    }
    // current month += 1
    const handleRight = () => {
        if(currentDate.month === 'Dec'){
            const temp = currentDate;
            temp.year = (parseInt(currentDate.year)+1).toString()
            temp.month = 'Jan'
            temp.day = '1'
            setCurrentDate({...temp});
        }else{
            const temp = currentDate;
            temp.month = Month[Month.indexOf(currentDate.month)+1]
            temp.day = '1'
            setCurrentDate({...temp})
        }
    }

    return (
        <div className="calendar-contain">
            <CalendarDay 
                handleLeft={handleLeft} handleRight={handleRight}
                todayDate={todayDate} currentDate={currentDate}
                handleUserClickOnDay={handleUserClickOnDay}
                ableDay={ableDay}
            />
        </div>
    )
    
}

export default Calendar
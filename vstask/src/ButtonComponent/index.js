
import React, { useState } from 'react';
import './style.css';

function ButtonComponent() {


    

let NewYearDate = new Date("Jan 1, 2023 00:00:00").getTime();

function newYear()
{
    let CurrentDate = new Date().getTime();
    let difference = NewYearDate - CurrentDate;

    console.log(difference);

    let sec = 1000;
    let mn = 60*sec;
    let hr = 60*mn;
    let day = 24* hr;

    let days = Math.floor(difference / day);
    let hour = Math.floor((difference % day) / hr);
    let minutes = Math.floor((difference % hr) / mn);
    let seconds = Math.floor((difference % mn) / sec);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hour;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    setInterval(()=>{
        newYear();
    },1000)

    SetIsShowed(true);
}

const [IsShowed, SetIsShowed] = useState(false);


    return (
        <div className="wrapper">
            <div className="holder">
                <div className="new_year_text">To the New Year left</div>
                <div onClick={newYear} className="new_year_button">Click on me to see</div>

                <div className={IsShowed ? 'countdown_block countdown_block_animation' : 'countdown_block'}>

                    <div className="countdown_block_item">
                        <div className="countdown_block_item_day_number" id="days">0</div>
                        <div className="countdown_block_item__text">Days</div>
                    </div>

                    <div className="countdown_block_item">
                        <div className="countdown_block_item_day_number" id="hours">0</div>
                        <div className="countdown_block_item__text">Hours</div>
                    </div>

                    <div className="countdown_block_item">
                        <div className="countdown_block_item_day_number" id="minutes">0</div>
                        <div className="countdown_block_item__text">Minutes</div>
                    </div>

                    <div className="countdown_block_item">
                        <div className="countdown_block_item_day_number" id="seconds">0</div>
                        <div className="countdown_block_item__text">Seconds</div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ButtonComponent;
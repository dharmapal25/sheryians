import React, { useState, useEffect } from 'react'
import apple_logo from "../Images/apple_logoo.png"
import wifi from "../Images/wifi.png"
import control from "../Images/control_center.gif"
import search from "../Images/search.png"
import "../App.css"
import Empty from "../Components/Pages/Empty"

const TopNav = () => {

    const now = new Date();

    const [time, setTime] = useState({
        hrs: now.getHours(),
        mins: now.getMinutes(),
        secs: now.getSeconds()
    });

   
    useEffect(() => {
        const interval = setInterval(() => {
            const update = new Date();
            setTime({
                hrs: update.getHours(),
                mins: update.getMinutes(),
                secs: update.getSeconds()
            });
        }, 1000); 

        return () => clearInterval(interval);
    }, []);

   
    const pad = (n) => String(n).padStart(2, '0');


    function setOpacity() {
        console.log("first")
        return (
        <Empty/>
        )
    }

    return (
        <div>
            <div className="mac-nav">
                <div className="logo-navigators">
                    <img src={apple_logo} alt="logo" className='apple_logo' />
                    <p>File</p>
                    <p>Edit</p>
                    <p>View</p>
                    <p>History</p>
                    <p>Window</p>
                    <p>Help</p>
                </div>

                <div className="wifi-time">
                    <div className="icons-div">
                        <img src={wifi} alt="wifi" className='wifi' />
                        <img src={search} alt="search" className='search' />
                        <img src={control} alt="control" className='control' onClick={setOpacity} />
                    </div>

                  
                    <p className='time'>{pad(time.hrs)}:{pad(time.mins)}:{pad(time.secs)}</p>
                </div>
            </div>
        </div>
    )
}

export default TopNav
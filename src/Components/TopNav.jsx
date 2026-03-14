import React from 'react'
import apple_logo from "../Images/apple_logoo.png"
import wifi from "../Images/wifi.png"
import control from "../Images/control_center.gif"
import search from "../Images/search.png"
import "../App.css"
const TopNav = () => {
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
                        <img src={control} alt="control" className='control' />
                    </div>

                    <p className='time'>9:41 AM</p>
                </div>


            </div>

        </div>
    )
}

export default TopNav
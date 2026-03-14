import React, { useState } from 'react'
import "./Setting.css"
const Setting = () => {

    const [settingNavName, setSettingNavName] = useState("");

    function SettingNav(name) {
        console.log(name)
        setSettingNavName(name)
    }

    return (
        <div className='Setting-div'>

            <div className="Setting-nav">
                <span className={`themes ${(settingNavName == "Themes") ? "span-color" : ""} `} onClick={() => SettingNav("Themes")} >Themes</span>
                <span className={`Wallpapers ${(settingNavName == "Wallpapers") ? "span-color" : ""}`} onClick={() => SettingNav("Wallpapers")} >Wallpapers</span>
                <span className={`Tab-style ${(settingNavName == "Tab_style") ? "span-color" : ""}`} onClick={() => SettingNav("Tab_style")} >Tab Style</span>
            </div>

            <div className="Setting-body">
                <span>Empty!</span>
                {
                    (settingNavName == "Wallpapers") ? Wallpapers() :
                        (settingNavName == "Tab_style") ? Tab_style() : Themes()


                }
            </div>

        </div>
    )
}

export default Setting




export const Themes = () => {
    return (
        <div>
            <h1>Themes!</h1>
        </div>
    )
}

export const Wallpapers = () => {
    return (
        <div>
            <h1>Wallpapers!</h1>
        </div>
    )
}
export const Tab_style = () => {
    return (
        <div>
            <h1>Tab_style!</h1>
        </div>
    )
}


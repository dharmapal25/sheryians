import React, { useState } from 'react'
import "./Setting.css"
import Dark from "../../Images/themes/Dark.png";
import light from "../../Images/themes/light.png";
import DarkBlue from "../../Images/themes/DarkBlue.png";
import Default from "../../Images/themes/Default.png";
import image from "../../Images/Wallpapers/image.jpg";
// import image1 from "../../Images/Wallpapers/image1.jpg";
import image2 from "../../Images/Wallpapers/image2.jpg";
import image3 from "../../Images/Wallpapers/image3.jpg";
import image4 from "../../Images/Wallpapers/image4.jpg";
import image5 from "../../Images/Wallpapers/image5.jpg";
import image6 from "../../Images/Wallpapers/image6.jpg";
import image7 from "../../Images/Wallpapers/image7.jpg";


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
        <>
            <p>Themes!</p>
            <div className='Themes-div'>

                <div className="default-div">
                    <img className='theme-image' src={Default} />
                    <button className='Themes-btn' >Set as Wallpaper</button>
                </div>

                <div className="dark-div">
                    <img className='theme-image' src={Dark} />
                    <button className='Themes-btn'>Set as Wallpaper</button>
                </div>

                <div className="light-div">
                    <img className='theme-image' src={light} />
                    <button className='Themes-btn'>Set as Wallpaper</button>
                </div>

                <div className="darkblue-div">
                    <img className='theme-image' src={DarkBlue} />
                    <button className='Themes-btn'>Set as Wallpaper</button>
                </div>
            </div>
        </>
    )
}

export const Wallpapers = () => {
    
    // const [wallpaperImage, setWallpaperImage] = useState("");

    function BGWallpapers(image) {
        // console.log(image)
        // setWallpaperImage(image)
        localStorage.setItem("bgImage",image)
        console.log(window.location.reload())
    }

    return (
        <>
            <p>Wallpapers!</p>
            <div className="wallpaper-images">

                <div className="wallpaper-images-div">
                    <img src={image} className='wallpaper-image' />
                    <button className="Themes-btn" onClick={() => BGWallpapers("image.jpg")} >set as a wallpaper</button>
                </div>

                <div className="wallpaper-images-div">
                    <img src={image2} className='wallpaper-image' />
                    <button className="Themes-btn" onClick={() => BGWallpapers("image2.jpg")}>set as a wallpaper</button>
                </div>

                <div className="wallpaper-images-div">
                    <img src={image3} className='wallpaper-image' />
                    <button className="Themes-btn" onClick={() => BGWallpapers("image3.jpg")}>set as a wallpaper</button>
                </div>

                <div className="wallpaper-images-div">
                    <img src={image4} className='wallpaper-image' />
                    <button className="Themes-btn" onClick={() => BGWallpapers("image4.jpg")}>set as a wallpaper</button>
                </div>

                <div className="wallpaper-images-div">
                    <img src={image5} className='wallpaper-image' />
                    <button className="Themes-btn" onClick={() => BGWallpapers("image5.jpg")}>set as a wallpaper</button>
                </div>

                <div className="wallpaper-images-div">
                    <img src={image6} className='wallpaper-image' />
                    <button className="Themes-btn" onClick={() => BGWallpapers("image6.jpg")}>set as a wallpaper</button>
                </div>

                <div className="wallpaper-images-div">
                    <img src={image7} className='wallpaper-image' />
                    <button className="Themes-btn" onClick={() => BGWallpapers("image7.jpg")}>set as a wallpaper</button>
                </div>


            </div>

        </>
    )
}
export const Tab_style = () => {
    return (
        <div>
            <h1>Tab_style!</h1>
        </div>
    )
}


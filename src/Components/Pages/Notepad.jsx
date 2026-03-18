import React, { useEffect, useState } from 'react'
import add_notes from "../../Images/Icons/add_note.png"
import menu from "../../Images/Icons/menu.png"
import menuLight from "../../Images/Icons/bars-light.png"
import close from "../../Images/Icons/close.png"
import "./Notepad.css"

const Notepad = () => {

    const [popup, setPopup] = useState("none");
    const [change, setChange] = useState("");
    const [changetxt, setChangetxt] = useState("");
    const [selectIdx, setSelectIdx] = useState(null);
    const [menu, setMenu] = useState(false);


    // reload pe localStorage se data load hoga
    const [filearr, setFilearr] = useState(() => {
        const saved = localStorage.getItem("arr");
        return saved ? JSON.parse(saved) : [];
    });

    function submitData(e) {
        e.preventDefault();
        const newFile = {
            file: e.target.elements.file.value,
            data: e.target.elements.data.value
        }
        setFilearr([newFile, ...filearr]);

        setChange("");
        setChangetxt("");
        setPopup("none");
    }

    // Textarea content update
    function handleContentChange(e, index) {
        const updatedArr = filearr.map((item, i) =>
            i === index ? { ...item, data: e.target.value } : item
        );
        setFilearr(updatedArr);
    }

    useEffect(() => {
        localStorage.setItem("arr", JSON.stringify(filearr));
    }, [filearr]);


    function menuMove() {
        setMenu(!menu)
    }

    return (
        <>
            <form className='pop-up' style={{ display: popup }} onSubmit={submitData}>

                     <img className='cut' onClick={() => setPopup("none")} src={close} alt="close" />
                <input
                    type="text"
                    name='file'
                    value={change}
                    placeholder='Enter file name..'
                    required
                    onChange={(e) => setChange(e.target.value)}
                />
                <textarea
                    name='data'
                    className='textarea'
                    value={changetxt}
                    placeholder='Write something..'
                    onChange={(e) => setChangetxt(e.target.value)}
                />
                <button className='save' type="submit">Save</button>
            </form>

            <div className="main-notes-div">
                <div className="notes-div">

                    <div className={`filename-div ${(menu) ? "menu-out" : "menu-in"} `}>
                        <div className="new-file-div">
                            {/* <h3>Files</h3> */}
                            <span className="new-file" onClick={() => setPopup(popup === "none" ? "block" : "none")}>
                                <img src={add_notes} alt="add_notes" />
                            </span>
                            {/* <span > */}
                                <img src={menu} alt="menu" className="new-file-menu"  onClick={menuMove} />

                            {/* </span> */}
                        </div>

                        {filearr.map((item, index) => (
                            <input
                                key={index}
                                type="text"
                                className='filename'
                                value={item.file}
                                readOnly
                                onClick={() => setSelectIdx(index)}
                                style={{ cursor: "pointer", borderRadius : "5px", fontSize : "19px" ,background: selectIdx === index ? "#8b8b8bab" : "" }}
                            />
                        ))}
                    </div>

                    <div className="filecontants-div">

                        {selectIdx !== null && filearr[selectIdx] && (
                            <textarea
                                className="filecontants"
                                value={filearr[selectIdx].data}
                                onChange={(e) => handleContentChange(e, selectIdx)}
                            />
                        )}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Notepad;
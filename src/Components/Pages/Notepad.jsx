import React, { useEffect, useState } from 'react'
import "./Notepad.css"
const Notepad = () => {

    const [popup, setPopup] = useState("none");
    const [change, setChange] = useState("");
    const [changetxt, setChangetxt] = useState("");
    const [filearr, setFilearr] = useState([]);
    const [fileobj, setFileobj] = useState({});


    function submitData(e) {
        e.preventDefault();
        const newFile = {
            file: e.target.elements.file.value,
            data: e.target.elements.data.value
        }
        setFilearr([newFile, ...filearr])
        setPopup("none")
    }


    useEffect(() => {
        localStorage.setItem("arr", JSON.stringify(filearr));
    }, [filearr])

    // localStorage.setItem("arr", JSON.stringify(filearr));


    let arrData = localStorage.getItem("arr");

    JSON.parse(arrData);

    console.log(JSON.parse(arrData))


    return (
        <>
            <form className='pop-up' style={{ display: popup }} onSubmit={submitData} >
                <h1 className='cut' onClick={() => setPopup("none")} > ✖ </h1>
                <input type="text" name='file' value={change} placeholder='Enter file name..' required onChange={(e) => setChange(e.target.value)} />
                <textarea type="text" name='data' className='textarea' defaultValue={changetxt} placeholder='Wriite something..' onChange={(e) => setChangetxt(e.target.value)} />
                <button className='save' onClick={() => setPopup("none")} >Save</button>
            </form>


            <div className="main-notes-div">

                <div className="notes-div">

                    <div className="filename-div">

                        <div className="new-file-div">
                            <h3>Files</h3>
                            <span className="new-file" onClick={() => setPopup(!popup)} >➕</span>
                            <span className="new-file">💬</span>
                        </div>
                        {/* <span className='filename' >main.txt</span> */}
                        {/* <input type="text" className='filename' value={"main.txt"} readOnly />
                        <input type="text" className='filename' value={"jod.txt"} readOnly /> */}

                        {filearr.map((item, index) => (
                            <input key={index} type="text" className='filename' value={item.file} readOnly />
                        ))}

                    </div>
                    <div className="filecontants-div">
                        {filearr.map((item, index) => (
                        <textarea className="filecontants" value={item.data} ></textarea>
                        ))}
                    </div>

                </div>
            </div>


        </>
    )
}

export default Notepad
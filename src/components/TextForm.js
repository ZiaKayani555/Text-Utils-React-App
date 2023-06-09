import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("enter text here");
    const [count, setCount] = useState("");



    const handleUpClcik = () => {
        console.log('Upclicked clicked  ');
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('converted to uppercase', 'success');
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('converted to loweercase', 'success')

    }

    const handleClearClick = () => {
        setText(" ");
        props.showAlert('text cleared', 'success')


    }

    const handleAlphabitCountClick = () => {


        const characterToCount = "a";

        // Using regular expressions and match() method
        const regex = new RegExp(characterToCount, "gi");
        const matches = text.match(regex);
        const characterCount = matches ? matches.length : 0;
        setCount(characterCount);

        console.log("Number of occurrences of", characterToCount + ":", count);



    }



    const handleOnChange = (event) => {
        console.log('handle onChange clicked ');
        setText(event.target.value)
    }

 
    return (
        <>
            <div ClassName="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.headding}</h1>
                <div className="mb-3 ">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} placeholder="write a text here " id="myBox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary ' onClick={handleUpClcik}>convert to uppercase</button> <br />
                <button className='btn btn-primary ' onClick={handleLowClick} style={{ marginTop: '10px' }}>convert to lowercase</button> <br />
                <button className='btn btn-primary ' onClick={handleClearClick} style={{ marginTop: '10px' }}>clear</button> <br />
                <button className='btn btn-primary ' onClick={handleAlphabitCountClick} style={{ marginTop: '10px' }}>count alphabit in text</button>





            </div>

            <div className='container my-2' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>your text summary</h2>
                <p><b>Text length and characters :</b></p> <p>{text.length>0 ? text.trim().split(/[ ]+/).length : 0} and {text.length} characters</p>
                <p><b>Time'll be taken to read</b></p> <p>{0.08 * text.split(" ").length} Minutes reac</p>
                <p><b>{text.length > 0 ? text : "enter the text to preview"}</b></p><p>{text}</p>
                <p><b>A alphabit count</b></p><p>  {count}</p>

                {/* word count */}


            </div>
        </>

    )
}

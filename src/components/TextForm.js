import React , {useState} from 'react'

export default function TextForm(props) {
    const handleUpClcik = () =>{
        console.log('Upclicked clicked  ');
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) =>{
        console.log('handle onChange clicked ');
        setText(event.target.value)
    }
    const [text,  setText] =useState("enter text here");

    return (
        <div>
            <h3>{props.headding}</h3>
            <div className="mb-3 ">
                <textarea className="form-control" value={text} onChange={handleOnChange} placeholder="write a text here " id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary ' onClick={handleUpClcik}>convert to uppercase</button>
            
        </div>
    )
}

import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { changeColor } from '../features/theme';

const Change = () => {
    const [color, setColor] = useState("");
    const dispatch = useDispatch();


    return (
        <div>
           <input type="text"
           onChange = {(e)=> {setColor(e.target.value)}} />

           <button onClick = {()=> dispatch(changeColor(color))}>Toggle</button> 
        </div>
        
    )
}

export default Change

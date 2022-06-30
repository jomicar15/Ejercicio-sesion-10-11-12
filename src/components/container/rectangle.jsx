import React,{ useState , useEffect} from "react";
import "../../css/rectangle.css";

const Rectangle = () =>{

    let intervalID;
    
    let background = {
        backgroundColor: `rgb(0,0,0)`
    }
    const [changeColor,setChangeColor] = useState(background);
    const [temporizador,setTemporizador] = useState(intervalID);


    const mouseOnItem = () =>{
        change();
    }

    const mouseOutItem = ()=>{
       stopChange();
    }
    
    const change = ()=>{

        intervalID = setInterval(()=>{
            setChangeColor({
            backgroundColor: `rgb(${Math.floor(Math.random() * 255)},
                            ${Math.floor(Math.random() * 255)},
                            ${Math.floor(Math.random() * 255)})`
            })
        },1000);
        setTemporizador(intervalID);
    }
    
    const doubleClick = () =>{
        clearInterval(temporizador);
    }

    const stopChange = ()=>{
        clearInterval(temporizador);
    }

    return (
            <h1 id="rectangle" onDoubleClick={doubleClick} onMouseEnter={mouseOnItem} onMouseOut={mouseOutItem} style={changeColor} >Change background-color</h1>
    );
}

export default Rectangle;




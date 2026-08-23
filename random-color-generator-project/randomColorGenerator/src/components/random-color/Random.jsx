import React, {useState, useEffect} from 'react';

const RandomColor = () => {

    const [typeOfColor, setTypeOfColor] = useState('hex')
    const [color, setColor] = useState('#000000')

    function randomColorUtility(length){
        return Math.floor(Math.random() * length);
        
    }
    function handleCreateRandomHexColor(){
        // #278900
        const hex = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let hexColor = '#';

        for(let i=0; i<6; i++){
            hexColor += hex[randomColorUtility(hex.length)];
        }
        console.log("Generated HEX:", hexColor);
        setColor(hexColor);
        
    }
    function handleCreateRandomRgbColor(){
        const r = randomColorUtility(256)
        const g = randomColorUtility(256)
        const b = randomColorUtility(256)
        const rgbColor = `rgb(${r},${g},${b})`
        console.log("Generated RGB:", rgbColor);
        setColor(rgbColor)
    }

    useEffect(() => {
        if(typeOfColor === 'rgb') handleCreateRandomRgbColor()
        else handleCreateRandomHexColor()
    } ,[typeOfColor])


    return (
        
<div className='container'
        style={{
            height: "100vh",
            width:  "100vw",
            backgroundColor: color,
        }}>
            <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
            <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
            <button onClick={ typeOfColor === 'hex' 
                ? handleCreateRandomHexColor 
                : handleCreateRandomRgbColor}>
                    Generate Random Color
            </button>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                fontSize: '60px',
                marginTop:'50px',
                flexDirection: 'column',
                gap: '20px',

            }}>
                <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h3>
                <br />
                <h1 style={{
                    color: 'red', fontSize: '40px',  display: 'block'
                }}>{color}</h1>
            </div>
        </div>
    );
}

export default RandomColor;




// Mini Project #2 | Digital Clock using React JS 

import React, { useState } from 'react'

const App = () => {        
    let nTime = new Date().toLocaleTimeString();
    let [cTime, setTime] = useState(nTime);

    const getTime = () => {
        let nTime = new Date().toLocaleTimeString();
        setTime(nTime)
        // console.log('clicked ' + count++);
    }

    // callback function in setInterval
    setInterval(getTime,1000)

    return (
        <>
            <h1> {cTime} </h1>
            {/* <button onClick={getTime}>Click here</button> */}
        </>
    );
}

export default App;
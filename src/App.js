import React from 'react';
import WheelApplet from "./WheelApplet/WheelApplet";

function App() {
    return (
    <div className="App">
        <header className="App-header">

        </header>
        <WheelApplet height={500} width={500} padding={15} fields={30} startSpeed={5} spinDuration={20}/>
    </div>
    );
    }

export default App;

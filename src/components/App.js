import React from 'react';
import OffCanvas from './OffCanvas';
import OffCanvasContent from './OffCanvasContent';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <OffCanvas/>
                <OffCanvasContent/>
            </div>
        )
    }
}

export default App;
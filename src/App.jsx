import React from 'react';
import SearchTable from './components/searchTable';
import Data from './components/data'


class App extends React.Component {
    render() {
        return(
            <div>
                <SearchTable data={Data}/>
            </div>
        )
    }
}

export default App

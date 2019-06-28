import React, {Component} from 'react';
import SearchBox from './SearchBox';

class App extends Component {
    onSearchSubmit(term) {
        console.log(term);
    }

    render() {
        return (
        <div className="ui container" style={{ marginTop: '10px', textAlign: 'center' }}>
            <SearchBox onSubmit={this.onSearchSubmit}/>
        </div>
        )
    }
}

export default App;
import React, {Component} from 'react';
import axios from 'axios';
import SearchBox from './SearchBox';

class App extends Component {
    state = {images : []};

    onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
          params: {query: term},  
          headers: {
              Authorization: 'Client-ID 5ac241e6d320313fd8f62a929dd23c9c71a5ccc7d1f9b88d6b1dfe480168ef0d'
              }
        });
    this.setState( {images: response.data.results });
    }

    render() {
        return (
        <div className="ui container" style={{ marginTop: '10px', textAlign: 'center' }}>
            <SearchBox onSubmit={this.onSearchSubmit}/>
            Found: {this.state.images.length} images
        </div>
        )
    }
}

export default App;
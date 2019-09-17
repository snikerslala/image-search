import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import SearchBox from './SearchBox';
import Loader from './Loader';

class App extends Component {
  state = { images: [], loading: false };

  onSearchSubmit = async term => {
    if (!this.state.images.length) {
      this.setState({ loading: true });
    }

    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div
        className="ui container"
        style={{ marginTop: '10px', textAlign: 'center' }}
      >
        <SearchBox onSubmit={this.onSearchSubmit} />
        <Loader images={this.state.images} loading={this.state.loading} />
      </div>
    );
  }
}

export default App;

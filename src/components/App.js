import React, { Component } from "react";
import unsplash from "../api/unsplash";
import SearchBox from "./SearchBox";
import ImageList from "./ImageList";

class App extends Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div
        className="ui container"
        style={{ marginTop: "10px", textAlign: "center" }}
      >
        <SearchBox onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;

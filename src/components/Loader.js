import React from 'react';
import ImageList from './ImageList';

const Loader = ({ images, loading }) => {
  if (!images.length && !loading) {
    return (
      <div
        className="ui small message"
        style={{ width: '300px', margin: 'auto' }}
      >
        Sooo... Which images are you looking for?
      </div>
    );
  }

  if (!images.length && loading) {
    return (
      <div
        className="ui icon message"
        style={{ width: '300px', margin: 'auto' }}
      >
        <i className="notched circle loading icon"></i>
        <div className="content">
          <div className="header">Just a second...</div>
          <p>I'm loading pictures for you!</p>
        </div>
      </div>
    );
  }

  return <ImageList images={images} />;
};

export default Loader;

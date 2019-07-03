import React from 'react';

const ImageList = props => {
    
    const image = props.images.map((image) =>     
    <div key={image.id}>
        <img src={image.urls.regular} alt={image.alt_description} />
    </div>
    )
    
    return <div>{image}</div>;
};

export default ImageList;
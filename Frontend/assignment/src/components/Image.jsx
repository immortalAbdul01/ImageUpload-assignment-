import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ImageGallery() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        axios.get('/api/images')
            .then(res => setImages(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h1>Hii</h1>
            {images.map(image => (
                <img key={image._id} src={`/api/images/${image._id}`} alt={image.filename} />
            ))}
        </div>
    );
}

export default ImageGallery;

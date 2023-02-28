import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import './App.css'

function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (files) => {
    setSelectedFile(URL.createObjectURL(files[0]));
    const formData = new FormData();
    formData.append('file', files[0]);
    axios.post('http://localhost:5000/upload', formData).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div className="App">
      <h1>Select an image to display</h1>
      <Dropzone onDrop={handleFileSelect}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop an image here, or click toselect a file</p>
            </div>
          </section>
        )}
      </Dropzone>
      {selectedFile && <img className='img' src={selectedFile} alt="Selected file" />}
    </div>
  );
}

export default App;

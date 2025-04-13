import React, { useState } from 'react'
import { initializeApp } from "firebase/app";
import {ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { imageDb } from '../utils/firebase';
const Image = () => {
const [image, setImage] = useState(null);
const [imageUrl, setImageUrl] = useState('');

const handleChange = (e) => {
  if (e.target.files[0]) {
    setImage(e.target.files[0]);
  }
};

const handleUpload = () => {
  if (image == null) return;
  const imageRef = ref(imageDb, `images/${image.name}`);

  uploadBytes(imageRef, image)
    .then(() => {
      getDownloadURL(imageRef)
        .then((url) => {
          setImageUrl(url);
        })
        .catch((error) => {
          console.error("Error getting download URL:", error);
        });
    })
    .catch((error) => {
      console.error("Error uploading file:", error);
    });
};

return (
  <div>
    <input type="file" className="file-input" onChange={handleChange} />
    <button onClick={handleUpload}>Upload</button>
    {imageUrl && <img src={imageUrl} alt="Uploaded" />}
  </div>
);
}

export default Image

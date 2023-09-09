"use client";

import {MyArray} from "../lib/customArray";
import styles from "./Arrays.module.scss";

import {useState} from "react";


const photos = new MyArray<string>();

photos.push("/assets/images/01.jpeg");
photos.push("/assets/images/02.jpeg");
photos.push("/assets/images/03.jpeg");
photos.push("/assets/images/04.jpeg");

// const photos = [
//   ,
//   "/assets/images/02.jpeg",
//   "/assets/images/03.jpeg",
//   "/assets/images/04.jpeg",
// ];

function PhotoGallery() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  return (
    <section className={styles.ArraySectionWrapper}>
      <div className={styles.gallery}>
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Photo ${index}`}
            className={styles.gallery__photo}
          />
        ))}
      </div>
      <div className={styles.viewer}>
        <button
          onClick={() => setCurrentPhotoIndex((prev) => prev - 1)}
          disabled={currentPhotoIndex === 0}
        >
          Previous
        </button>

        <img
          src={photos[currentPhotoIndex]}
          alt={`Photo ${currentPhotoIndex}`}
          className={styles.viewer__photo}
        />

        <button
          onClick={() => setCurrentPhotoIndex((prev) => prev + 1)}
          disabled={currentPhotoIndex === photos.length - 1}
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default PhotoGallery;

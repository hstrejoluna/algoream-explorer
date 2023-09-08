"use client";
import styles from "./Arrays.module.scss";
import {useState} from "react";

const photos = [
  "/assets/images/01.jpeg",
  "/assets/images/02.jpeg",
  "/assets/images/03.jpeg",
  "/assets/images/04.jpeg",
];

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

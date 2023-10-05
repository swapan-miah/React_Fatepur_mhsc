import React, { useEffect, useState } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import storage from "../Firebase/Firebase";

function SSC_Board_Result() {
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    // Reference the "ssc" folder in Firebase Storage
    const storageRef = ref(storage, "/SSC_Board_Result/");

    // Function to get download URLs for images in the folder
    const getImageURLs = async () => {
      try {
        const imageRefs = await listAll(storageRef);
        const imageURLs = await Promise.all(
          imageRefs.items.map(async (item) => {
            const url = await getDownloadURL(item);
            return url;
          })
        );
        setImageURLs(imageURLs);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    // Fetch image URLs when the component mounts
    getImageURLs();
  }, []);
  return (
    <>
      <h1>Image Gallery</h1>
      <div className="image-container">
        {imageURLs.map((url, index) => (
          <img key={index} src={url} alt={`Image ${index}`} />
        ))}
      </div>
    </>
  );
}

export default SSC_Board_Result;

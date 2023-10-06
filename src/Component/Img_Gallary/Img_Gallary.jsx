import React, { useEffect, useState } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import storage from "../Firebase/Firebase";
import "./Img_Gallary.css";

function Img_Gallary() {
  const [imageURLs, setImageURLs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingPercentage, setLoadingPercentage] = useState(0); // Add a loading percentage state

  useEffect(() => {
    // Reference the "ssc" folder in Firebase Storage
    const storageRef = ref(storage, "/Img_Gallary/");

    // Function to get download URLs for images in the folder
    const getImageURLs = async () => {
      try {
        const imageRefs = await listAll(storageRef);
        const imageURLs = await Promise.all(
          imageRefs.items.map(async (item) => {
            const url = await getDownloadURL(item);
            setLoadingPercentage((prevPercentage) =>
              Math.min(prevPercentage + 100 / imageRefs.items.length, 100)
            ); // Calculate and update the loading percentage
            return url;
          })
        );
        setImageURLs(imageURLs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    // Fetch image URLs when the component mounts
    getImageURLs();
  }, []);

  return (
    <div className="container mt-3">
      {loading ? (
        <div>
          <p className="fs-4 text-center bg-primary my-5 mx-auto text-white loading-animation">
            Loading... {loadingPercentage.toFixed(2)}%
          </p>
          {/* Display loading percentage */}
        </div>
      ) : (
        <div className="row">
          {imageURLs.map((url, index) => (
            <div className="col-12 col-md-6 col-lg-6 mb-3">
              <img
                className="w-100 rounded-4"
                key={index}
                src={url}
                alt={`Image ${index}`}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Img_Gallary;

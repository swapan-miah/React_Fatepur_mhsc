import React, { useEffect, useState } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import storage from "../Firebase/Firebase";
import "./Subarna_Jayanthi_Video.css";

function Video_Gallery() {
  const [videoURLs, setVideoURLs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingPercentage, setLoadingPercentage] = useState(0);

  useEffect(() => {
    // Reference the "video_gallery" folder in Firebase Storage
    const storageRef = ref(storage, "/Subarna_Jayanthi_Video/");

    // Function to get download URLs for videos in the folder
    const getVideoURLs = async () => {
      try {
        const videoRefs = await listAll(storageRef);
        const videoURLs = await Promise.all(
          videoRefs.items.map(async (item) => {
            const url = await getDownloadURL(item);
            setLoadingPercentage((prevPercentage) =>
              Math.min(prevPercentage + 100 / videoRefs.items.length, 100)
            );
            return url;
          })
        );
        setVideoURLs(videoURLs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    // Fetch video URLs when the component mounts
    getVideoURLs();
  }, []);

  return (
    <div className="container mt-3">
      {loading ? (
        <div>
          <p className="fs-4 text-center bg-primary my-5 mx-auto text-white loading-animation">
            Loading... {loadingPercentage.toFixed(2)}%
          </p>
        </div>
      ) : (
        <div className="row">
          {videoURLs.map((url, index) => (
            <div className="col-12 col-md-6 col-lg-6 mb-3" key={index}>
              <video className="w-100 rounded-4" controls>
                <source src={url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Video_Gallery;

import React, { useState, useEffect } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import storage from "../Firebase/Firebase";
import "./Notice.css"; // Import your CSS for animations

function Notice() {
  const [pdfFiles, setPdfFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State variable for loading
  const [loadingPercentage, setLoadingPercentage] = useState(0); // State variable for loading percentage

  useEffect(() => {
    // Reference to the "notice" folder in Firebase Storage
    const storageRef = ref(storage, "/notice/");

    // List all items (PDFs) in the folder
    listAll(storageRef)
      .then(async (result) => {
        // Create an array to store the PDF file data
        const filesData = [];
        const totalFiles = result.items.length;

        for (let index = 0; index < totalFiles; index++) {
          const item = result.items[index];
          const fileName = item.name;
          const downloadURL = await getDownloadURL(item);

          // Extract the first 2 characters as the fileId
          const fileId = fileName.substring(0, 2);
          // console.log(fileId);

          // Extract the characters 3-12 as the date
          const date = fileName.substring(3, 13);

          // Remove the first 14 characters and the file extension
          const displayName = fileName.slice(14, -4);

          // Push file data into the array
          filesData.push({ fileId, downloadURL, date, displayName });

          // Calculate and set loading percentage
          const percentage = ((index + 1) / totalFiles) * 100;
          setLoadingPercentage(percentage);
        }

        // Sort the array based on fileId in descending order
        filesData.sort((a, b) => b.fileId - a.fileId);

        // Update the state with the sorted array of PDF file data
        setPdfFiles(filesData);
        setIsLoading(false); // Set loading state to false when data is received
      })
      .catch((error) => {
        console.error("Error listing items in the folder: ", error);
      });
  }, []);

  return (
    <div className="container p-0 pb-4 rounded-4 my-3 bg-white ">
      <div className="bg-custom py-3 text-white text-center pdf_section_title">
        ফতেপুর ময়নাল হক স্কুল এন্ড কলেজের সকল নোটিশ
      </div>
      {isLoading ? ( // Conditional rendering based on loading state
        <div className="loading-animation">
          Loading Data... {loadingPercentage.toFixed(2)}%
        </div>
      ) : (
        <div className="pdf_Table_section ">
          <table className="">
            <tbody>
              <tr>
                <td className="first_th fw-bold text-center  ">Id</td>
                <td className="second_th fw-bold text-center   ">Date</td>
                {/* New Date column */}
                <td className="third_th fw-bold text-center   ">File Name</td>
                <td className="fourth_th fw-bold "> </td>
              </tr>

              {pdfFiles.map((file, index) => (
                <tr key={index}>
                  <td className="first_td">{file.fileId}</td>
                  <td className="second_td">{file.date}</td>
                  {/* Display the date here */}
                  <td className="third_td">{file.displayName}</td>
                  <td className="fourth_td">
                    <a href={file.downloadURL} download={file.displayName}>
                      <i className="fa fa-download"></i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Notice;

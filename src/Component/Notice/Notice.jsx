import React, { useState, useEffect } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import storage from "../Firebase/Firebase";

function Notice() {
  const [pdfFiles, setPdfFiles] = useState([]);

  useEffect(() => {
    // Reference to the "notice" folder in Firebase Storage
    const storageRef = ref(storage, "notice/");

    // List all items (PDFs) in the folder
    listAll(storageRef)
      .then(async (result) => {
        // Create an array to store the PDF file data
        const filesData = [];

        for (let index = 0; index < result.items.length; index++) {
          const item = result.items[index];
          const fileName = item.name;
          const downloadURL = await getDownloadURL(item);

          // Push file data into the array
          filesData.push({ fileName, downloadURL });
        }

        // Update the state with the array of PDF file data
        setPdfFiles(filesData);
      })
      .catch((error) => {
        console.error("Error listing items in the folder: ", error);
      });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>AutoNumber</th>
            <th>File Name</th>
            <th>Download Link</th>
          </tr>
        </thead>
        <tbody>
          {pdfFiles.map((file, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{file.fileName}</td>
              <td>
                <a href={file.downloadURL} download={file.fileName}>
                  Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Notice;

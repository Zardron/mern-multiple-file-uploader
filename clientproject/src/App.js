import React, { useState, useEffect } from "react";
import "./App.css";
import FileUploadScreen from "./screens/FileUploadScreen";
import { getMultipleFiles } from "./data/api";

function App() {
  const [multipleFiles, setMultipleFiles] = useState([]);

  const getMultipleFilesList = async () => {
    try {
      const fileslist = await getMultipleFiles();
      setMultipleFiles(fileslist);
      console.log(multipleFiles);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMultipleFilesList();
  }, []);
  return (
    <>
      <div className="container">
        <h3 className="text-danger font-weight-bolder border-bottom text-center">
          Multiple File Upload Using MERN Stack{" "}
        </h3>
        <FileUploadScreen getMultiple={() => getMultipleFilesList()} />
      </div>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-6">
            <h4 className="text-success font-weight-bold">
              Multiple Files List
            </h4>
            {multipleFiles.map((element, index) => (
              <div key={element._id}>
                <h6 className="text-danger font-weight-bold">
                  {element.title}
                </h6>
                <div className="row">
                  {element.files.map((file, index) => (
                    <div className="col-6">
                      <div className="card mb-2 border-0 p-0">
                        <a
                          href={`http://localhost:5000/${file.filePath}`}
                          className="card-img-top img-responsive"
                          alt="img"
                          target="_blank"
                        >
                          {file.fileName}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

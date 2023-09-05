import axios from "axios";
import React, { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import {  triggerDrop } from "../features/ColorReducer";
import { useDispatch } from "react-redux";
import "./Tweaker/Dropzone.css";
import {
  textureAdd,
  textureClear,
} from "../features/TextureReducer";
import { v4 as uuidv4 } from "uuid";
import TextureSelect from "./Tweaker/Multiselect";
import { DownloadSimple, Trash } from "@phosphor-icons/react";

function MyDropzone({
  setDropped,
  dropped,
  selectedParts,
  setSelectedParts,
  files,
  setFiles,
  model,
  showPreview
}) {
  const thumb = {
    borderRadius: 2,
  };

  const thumbInner = {
    minWidth: 30,
    overflow: "hidden",
  };

  const img = {
    display: "flex",
    maxWidth: "8vw",
    height: "auto",
    objectFit: "cover",
  };


const downloadBP =() => {
  const fileUrl = model == 1 ? "guitar/blueprints/ES335-Blueprint.png" : "guitar/blueprints/Tele-Blueprints.zip";

  // Fetch the file using the URL
  fetch(fileUrl)
    .then(response => response.blob())
    .then(blob => {
      // Create a download link
      const downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = model == 1 ? "ES335-Blueprint.png" : "Tele-Blueprints.zip";
  
      // Append the link to the body and trigger the click event
      document.body.appendChild(downloadLink);
      downloadLink.click();
  
      // Clean up by revoking the object URL
      URL.revokeObjectURL(downloadLink.href);
  
      // Remove the download link from the DOM
      document.body.removeChild(downloadLink);
    });
}

  // const [showPreview, setShowPreview] = useState(false);
  const dispatch = useDispatch();

  const onDrop = useCallback((acceptedFiles) => {
    const updatedFiles = acceptedFiles.map((file) => {
      const modifiedFilename = file.name
        .replace(/[^A-Za-z0-9.\s]/g, "")
        .replace(/\s/g, "")
        .replace(/[\u2018\u2019]/g, "")
        .toLowerCase();

      return {
        id: uuidv4(),
        file,
        preview: URL.createObjectURL(file),
        modifiedFilename, // Add the modified filename to the file object
      };
    });
    setFiles((prevFiles) => [...prevFiles, ...updatedFiles]);

    const formData = new FormData();
    updatedFiles.forEach((img) => {
      formData.append("file", img.file);
      formData.append("id", img.id);
    });
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
      })
      .then(setDropped(dropped + 1))
      .then(dispatch(triggerDrop(dropped)))
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    noClick: true,

    onDrop,
  });

  useEffect(() => {
    const filesId = [];
    if (files && filesId.length > 0) {
      files.forEach((file) => {
        if (!filesId.includes(file.modifiedFilename)) {
          filesId.push(file.modifiedFilename);
        }
      });

       dispatch(textureAdd(filesId));
    }
  }, [setFiles, dispatch]);



  useEffect(() => {}, [selectedParts, model]);

  const handleDeleteImg = (fileModName) => {

    setFiles((prevState) =>
      prevState.filter((file) => file.modifiedFilename !== fileModName)
    );
    const removed = files.filter(
      (part) => part.modifiedFilename == fileModName
    );

    dispatch(textureClear(fileModName));
  };

  const handleLoad = (file) => {
    URL.revokeObjectURL(file.preview);
  };

  const thumbs = files.map((file) => (
    <>
      <div className={showPreview ? "preview-tex" : "preview-tex-hidden"}>
        <div style={thumb} key={file.name}>
          <TextureSelect
            key={file.name}
            selectedParts={selectedParts}
            setSelectedParts={setSelectedParts}
            fileModName={file.modifiedFilename}
            model={model}
          />
          <div style={thumbInner}>
            <button
              key={file.name}
            className="trash-button"
              type="button"
              value={file.modifiedFilename}
              onClick={(e) => {
                e.preventDefault(), handleDeleteImg(file.modifiedFilename);
              }}
            >
              <span><Trash size={26} color={"red"} /></span>
            </button>
            {files.some((f) => f.id === file.id) && (
              <img src={file.preview} style={img} onLoad={handleLoad} />
            )}
          </div>
        </div>
      </div>
    </>
  ));

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <>
  <div className="dropzone-visible">

      <form encType="multipart/form-data">
        <section className="dropzone-container">
          <div {...getRootProps()} className="dropzone-div">
            <input {...getInputProps()} type="file" />
            <div className={files.length !== 0 ? 'dragtext-hidden' : 'dragtext-visible'}>

            {isDragActive ? (
              <p>Drop the files here ...</p>
              ) : (
                <>
             
             <div className="dropspace">
                <p >Drag 'n' drop some files here</p>
                <a href="guitar/blueprints/ES335-Blueprint.png" download={'ES335-Blueprint.png'}>
                <button onClick={(e) => {
                  e.preventDefault()
                  downloadBP()
                }} className="bp-download"> <DownloadSimple size={32} />Download blueprints</button>
                </a>
                </div>
                    
              </>
                  )}
                </div>

            <div className={showPreview && files.length !== 0? "exaside" :"exaside-hidden"}>{thumbs}</div>
          </div>
        </section>
      </form>
                </div>
    </>
  );
}
export default MyDropzone;

import React, { ChangeEvent, useEffect, useState } from "react";
import Footer from "../Components/Footer";
import { useAppDispatch, useAppSelector } from "../store";
import { useParams } from "react-router-dom";
import { uploadResume } from "../Slice/userSlice";

const ResumeScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const { jobId: appliedJobId } = useParams();
  const [file, setFile] = useState<File | null>(null);

  const { pending, data, error } = useAppSelector(
    (state: any) => state.getSingleJobDetailsReducer
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [dispatch, pending, data, error]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target;
    const selectedFile = fileInput.files?.[0] || null;
    setFile(selectedFile);
  };

  const handleFileUpload = (e: any) => {
    e.preventDefault();
    dispatch(uploadResume({ file, appliedJobId }));
  };

  return (
    <>
      <div className="resume-upload-div p-20 container lg:max-w-5xl mx-auto px-4 flex flex-col items-center my-10">
        <form className="flex relative items-center file-input-form">
          <label id="custom-file-input" htmlFor="file-input">
            Upload Resume (doc/pdf)
          </label>
          <div className="browse-file-btn">
            Browse
            <input
              type="file"
              id="file-input"
              name="file"
              onChange={handleFileChange}
            />
          </div>
        </form>

        <div className="my-10">
          {file && (
            <div>
              {file.type.startsWith("image/") ? (
                <img
                  src={URL.createObjectURL(file)}
                  alt="Uploaded Image"
                  style={{ maxWidth: "100%", maxHeight: "80vh" }}
                />
              ) : file.type === "application/pdf" ? (
                <embed
                  src={URL.createObjectURL(file)}
                  type="application/pdf"
                  width="100%"
                  height="600px"
                />
              ) : (
                <p>File type not supported. Download the file to view.</p>
              )}
            </div>
          )}
        </div>

        <div className="resume-page-bottom-btns">
          <button>Buid a Resume</button>
          <button onClick={handleFileUpload}>
            {pending == true
              ? `Uploading`
              : data
              ? `Uploaded`
              : error == true
              ? `Some error occured`
              : `Next`}
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ResumeScreen;

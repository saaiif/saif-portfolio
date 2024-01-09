import React, { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "../../assets/document/Saifmujawar.pdf";
import { useWindowSize } from "../../hooks/useWindowSize";
import toast, { Toaster } from "react-hot-toast";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume({ setResumeDownload }: any) {
  const [loader, setLoader] = useState(true);

  const { width } = useWindowSize();

  function onDocumentLoadSuccess(params: any) {
    if (params._pdfInfo.numPages) {
      setLoader(false);
    }
  }
  const notify = () => {
    setTimeout(() => {
      toast("No Permission to download, please contact for resume.", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          backgroundColor: "#333",
          color: "#fff",
        },

        // Change colors of success/error/loading icon
        iconTheme: {
          primary: "#000",
          secondary: "#fff",
        },
      });
    }, 1000);
  };

  return (
    <div className="resume">
      <div>
        {" "}
        <Document
          file={pdf}
          onLoadSuccess={onDocumentLoadSuccess}
          className={!loader ? "resume--doc" : ""}
        >
          {!loader && (
            <Page
              pageNumber={1}
              scale={width && (width > 1800 ? 1 : width > 1255 ? 0.7 : 0.5)}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          )}
        </Document>
      </div>
      {!loader && (
        <a
          className="cssbuttons-io-button"
          href="#contact"
          onClick={() => setResumeDownload(true)}
        >
          <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"
              fill="currentColor"
            ></path>
          </svg>
          <span>Download CV</span>
        </a>
      )}
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}

export default Resume;

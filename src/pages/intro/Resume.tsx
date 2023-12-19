import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Document file={pdf} className="d-flex justify-content-center">
        <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
      </Document>

      <button href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
        &nbsp;Download CV
      </button>
    </div>
  );
}

export default Resume;

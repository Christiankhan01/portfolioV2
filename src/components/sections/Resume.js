import React from 'react'; 
import { Document} from 'react-pdf';
import { pdfjs } from 'react-pdf';


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
    return (
        <div className="container" id="resume">
        <h1>RESUME HERE</h1>
            <Document file="resume.pdf" />
        </div>
    )
}

export default Resume; 

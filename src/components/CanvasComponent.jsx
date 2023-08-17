import React, { useRef,useState, useEffect } from 'react';

import { pdf } from '@react-pdf/renderer';
import MyDocument from './MyDocument';
import * as pdfjs from 'pdfjs-dist';

pdfjs.GlobalWorkerOptions.workerSrc = 'node_modules/pdfjs-dist/build/pdf.worker.js';
function CanvasComponent({ data , employmentData, educationData,skillsData,referencesData,linksData,selectedColor,layoutType}) {
    const canvasRef = useRef(null);
    const [pdfImage, setPdfImage] = useState(null);
  
    useEffect(() => {
      async function renderPDFAsImage() {
        const blob = await pdf(<MyDocument data={data} employmentData={employmentData} educationData={educationData} skillsData={skillsData} referencesData={referencesData} linksData={linksData} selectedColor={selectedColor} layoutType={layoutType}/>).toBlob();
        const pdfDocument = await pdfjs.getDocument({ data: await blob.arrayBuffer() }).promise;
  
        const page = await pdfDocument.getPage(1); // Get the first page
        const viewport = page.getViewport({ scale: 1 });  // Increase this value
  
        const canvas = document.createElement('canvas');
        canvas.width = viewport.width;
        canvas.height = viewport.height;
  
        const canvasContext = canvas.getContext('2d');
        const renderContext = {
          canvasContext,
          viewport,
        };
        const renderTask = page.render(renderContext);
  
        await renderTask.promise;
  
        setPdfImage(canvas);
      }
  
      renderPDFAsImage();
    }, [data,employmentData, educationData,skillsData,referencesData,linksData,selectedColor,layoutType]);
  
    useEffect(() => {
      if (pdfImage) {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Adjust the main canvas's dimensions
        canvas.width = pdfImage.width;
        canvas.height = pdfImage.height;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(pdfImage, 0, 0, canvas.width, canvas.height);
      }
    }, [pdfImage]);
  
    return <canvas ref={canvasRef} />;
}

  
  
  export default CanvasComponent;

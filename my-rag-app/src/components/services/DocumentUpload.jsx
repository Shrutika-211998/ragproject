import React, { useState } from 'react';

const DocumentUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert('Please select a file first');
      return;
    }
    // Handle file upload logic here
    console.log('Uploading file:', selectedFile);
  };

  const handleGenerateIndex = () => {
    if (!selectedFile) {
      alert('Please upload a file first');
      return;
    }
    // Handle index generation logic here
    console.log('Generating index for:', selectedFile);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center w-full">
        <label className="flex flex-col w-full h-32 border-2 border-gray-600 border-dashed rounded-lg cursor-pointer bg-gray-700 hover:bg-gray-600 transition duration-200">
          <div className="flex flex-col items-center justify-center pt-7">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <p className="pt-1 text-sm tracking-wider text-gray-400">
              {selectedFile ? selectedFile.name : 'Drop your files here or click to browse'}
            </p>
          </div>
          <input 
            type="file" 
            className="opacity-0" 
            onChange={handleFileChange}
          />
        </label>
      </div>
      
      <div className="flex space-x-4 justify-center">
        <button
          onClick={handleUpload}
          className="px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition duration-200"
        >
          Upload
        </button>
        <button
          onClick={handleGenerateIndex}
          className="px-6 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition duration-200"
        >
          Generate Index
        </button>
      </div>
    </div>
  );
};

export default DocumentUpload;
"use client";
import { useRef, useState } from "react";
import React from "react";
import { FiImage, FiTrash2, FiUploadCloud } from "react-icons/fi";

type TFileUploadProps = {
  onFileSelect?: (file: File | null) => void;
};

const FileUpload = ({ onFileSelect }: TFileUploadProps) => {
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (selectedFile?: File) => {
    if (!selectedFile) return;

    setFile(selectedFile);
    onFileSelect?.(selectedFile);
  };

  const removeFile = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setFile(null);
    onFileSelect?.(null);
    
    if (fileInputRef.current) {
        fileInputRef.current.value = ""; 
    }
  };

  return (
    <div
      onClick={() => {
        if (!file) fileInputRef.current?.click();
      }}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        handleFileChange(e.dataTransfer.files?.[0]);
      }}
      className="flex flex-col justify-center items-center w-full py-6 border border-dashed border-primary bg-primary-light cursor-pointer"
    >
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={(e) => handleFileChange(e.target.files?.[0])}
      />
      
      {file ? (
        <div className="text-center my-5">
          <FiImage className="text-primary mx-auto mb-4" size={28} />
          <p className="text-sm text-primary">{file.name}</p>
          <p className="text-sm text-gray-400">
            {(file.size / 1024).toFixed(1)} KB
          </p>
          <button
            onClick={removeFile}
            className="flex gap-2 bg-primary/90 text-white mx-auto rounded mt-4 px-2 py-1 text-xs hover:bg-primary z-10 relative"
          >
            <FiTrash2 className="self-center" /> Remove
          </button>
        </div>
      ) : (
        <div className="text-center" onClick={() => fileInputRef.current?.click()}>
          <FiUploadCloud className="text-primary mx-auto" size={24} />
          <p className="text-xs mt-2">Upload Your Payment Receipt here</p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function UploadTranscripts() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    setStatus("Transcription in progress...");
    // Simulate transcription process
    setTimeout(() => {
      setStatus("Transcription completed!");
    }, 3000);
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Upload Audio File</h2>
      <Input type="file" onChange={handleFileChange} className="mb-4" />
      <Button onClick={handleSubmit} className="mb-4">Submit</Button>
      {status && <p>{status}</p>}
    </div>
  );
}

export default UploadTranscripts;
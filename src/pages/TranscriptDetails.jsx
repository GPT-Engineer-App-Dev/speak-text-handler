import { useParams } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function TranscriptDetails() {
  const { id } = useParams();
  const [transcript, setTranscript] = useState("This is the transcript text.");
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([transcript], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `transcript_${id}.txt`;
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Transcript Details</h2>
      {isEditing ? (
        <Textarea
          value={transcript}
          onChange={(e) => setTranscript(e.target.value)}
          className="mb-4"
        />
      ) : (
        <p className="mb-4">{transcript}</p>
      )}
      {isEditing ? (
        <Button onClick={handleSave} className="mr-2">Save</Button>
      ) : (
        <Button onClick={handleEdit} className="mr-2">Edit</Button>
      )}
      <Button onClick={handleDownload}>Download</Button>
    </div>
  );
}

export default TranscriptDetails;
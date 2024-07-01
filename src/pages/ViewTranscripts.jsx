import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function ViewTranscripts() {
  const [search, setSearch] = useState("");
  const transcripts = [
    { id: 1, title: "Transcript 1" },
    { id: 2, title: "Transcript 2" },
    { id: 3, title: "Transcript 3" },
  ];

  const filteredTranscripts = transcripts.filter((transcript) =>
    transcript.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl mb-4">View Transcripts</h2>
      <Input
        type="text"
        placeholder="Search transcripts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4"
      />
      <ul>
        {filteredTranscripts.map((transcript) => (
          <li key={transcript.id} className="mb-2">
            <Link to={`/transcript/${transcript.id}`} className="text-blue-500">
              {transcript.title}
            </Link>
            <Button variant="outline" size="sm" className="ml-2">Edit</Button>
            <Button variant="destructive" size="sm" className="ml-2">Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewTranscripts;
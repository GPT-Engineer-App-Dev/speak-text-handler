import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [quality, setQuality] = useState("high");

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Settings</h2>
      <div className="mb-4">
        <Label htmlFor="notifications" className="mr-2">Notifications</Label>
        <Switch
          id="notifications"
          checked={notifications}
          onCheckedChange={(checked) => setNotifications(checked)}
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="quality" className="mr-2">Transcription Quality</Label>
        <select
          id="quality"
          value={quality}
          onChange={(e) => setQuality(e.target.value)}
          className="border rounded p-2"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
    </div>
  );
}

export default Settings;
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import UploadTranscripts from "./pages/UploadTranscripts.jsx";
import ViewTranscripts from "./pages/ViewTranscripts.jsx";
import TranscriptDetails from "./pages/TranscriptDetails.jsx";
import Settings from "./pages/Settings.jsx";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "sonner";
import SharedLayout from "./components/layouts/sidebar.jsx";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
          <Router>
            <Routes>
              <Route path="/" element={<SharedLayout />}>
                <Route index element={<Index />} />
                <Route path="upload" element={<UploadTranscripts />} />
                <Route path="view" element={<ViewTranscripts />} />
                <Route path="transcript/:id" element={<TranscriptDetails />} />
                <Route path="settings" element={<Settings />} />
              </Route>
            </Routes>
          </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
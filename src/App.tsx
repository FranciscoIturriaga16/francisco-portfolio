import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollManager from "@/components/layout/ScrollManager";
import Index from "./pages/Index";
import CaseStudy from "./pages/CaseStudy";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <ScrollManager />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/case-study/:projectId" element={<CaseStudy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;

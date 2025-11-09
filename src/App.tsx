import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div style={{ padding: 24, fontSize: 20 }}>Home OK</div>} />
        <Route path="/:slug" element={<div style={{ padding: 24, fontSize: 20 }}>Router OK</div>} />
        <Route path="*" element={<div style={{ padding: 24, fontSize: 20 }}>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

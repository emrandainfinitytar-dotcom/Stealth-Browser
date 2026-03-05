import { Routes, Route, Navigate } from 'react-router-dom';
import DocumentationLayout from './components/DocumentationLayout';
import Homepage from './components/Homepage';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/documentation" element={<DocumentationLayout />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CompletedPage from './pages/CompletedPage';
import Layout from './components/Layout';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/completed" element={<CompletedPage />} />
      </Route>
    </Routes>
  );
}

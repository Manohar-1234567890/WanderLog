import { Routes, Route } from "react-router-dom";
import "./App.css";

import ExplorePage from "./pages/ExplorePage";
import CountryDetailPage from "./pages/CountryDetailPage";
import BucketListPage from "./pages/BucketListPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ExplorePage />} />
      <Route path="/country/:code" element={<CountryDetailPage />} />
      <Route path="/bucket-list" element={<BucketListPage />} />
    </Routes>
  );
}

export default App;
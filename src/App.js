import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnaEkran from "./ekranlar/AnaEkran";
import BlogEkrani from "./ekranlar/BlogEkrani";
import HataEkrani from "./ekranlar/HataEkrani";
import IletisimEkrani from "./ekranlar/IletisimEkrani";
import Sablon from "./ekranlar/Sablon";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Sablon />}> 
        <Route index element={<AnaEkran />} />
        <Route path="blog" element={<BlogEkrani />} />
        <Route path="iletisim" element={<IletisimEkrani />} />
        <Route path="*" element={<HataEkrani />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

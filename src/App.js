import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPhotos from './components/AddPhotos';
import SearchPhotos from './components/SearchPhotos';
import Viewall from './components/Viewall';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddPhotos/>}/>
      <Route path="/search" element={<SearchPhotos/>}/>
      <Route path="/view" element={<Viewall/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

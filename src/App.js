import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPhotos from './components/AddPhotos';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddPhotos/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom'

import "./App.css";
import { Home } from './pages/Home'
import { Header } from "./components/Header";
import { Search } from './components/Search';
import { useContext } from 'react';
import { BookContext } from './main';

function App() {
  const { bookData } = useContext(BookContext);
  return (
    <>
      <div className='App'>
        <Header />
        <Routes>
          <Route  path='/' element={<Home />}/>
          <Route  path='/search' element={<Search/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Post from './pages/Post';
import NotFound from './pages/NotFound';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootLayout/>}>
          <Route index element={<Home/>}></Route>
          <Route path='sobre' element={<Sobre/>}></Route>
          <Route path='post/:id' element={<Post/>}></Route>

          <Route path='*' element={<NotFound/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

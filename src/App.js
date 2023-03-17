import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { MenuContextProvider } from "./hooks/contexts/useMenuContext";
import { useEffect } from "react";
import { consoleMessage } from "./Features/consoleMessage";
import { inject } from '@vercel/analytics';
import AudioBooks from "./pages/AudioBooks/AudioBooks";
import BooksPage from "./pages/Books/BooksPage";
import FreeBooks from "./pages/FreeBooks/FreeBooks";

inject();
const App = () => {

  useEffect(()=> {
    console.clear();
    console.log(consoleMessage);
  });

  return (
    <div className="App">
      <MenuContextProvider>
        <Navbar />
      </MenuContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/free-books" element={<FreeBooks />} />
        <Route path="/audiobooks" element={<AudioBooks />} />
        <Route path="*" element={
          <div>Notfound</div>
        } />
      </Routes>
    </div>
  );
}

export default App;

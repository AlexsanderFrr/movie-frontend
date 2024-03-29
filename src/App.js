import "./App.css";
import Main from "./main";
import CadastroFilme from "./pages/CadastroFilme";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReadFilme from "./pages/ReadFilme";
import SearchFilme from "./pages/SearchFilme";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route element={<Main />}>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<CadastroFilme />} />
              <Route path="/filme/:id" element={<ReadFilme />} />
              <Route path="/search/:title" element={<SearchFilme />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather&display=swap"
          rel="stylesheet"
        />
      </header>
    </div>
  );
}

export default App;

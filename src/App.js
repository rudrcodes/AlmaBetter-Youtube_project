import Homepage from "./components/Homepage";
import "./App.css";
import { Route, Routes } from "react-router";
import DisplayAllSubs from "./components/DisplayAllSubs";
import DisplayNameAndSub from "./components/DisplayNameAndSub";
import UpdateUser from "./components/UpdateUser";

function App() {
  return (
    <div className="app">
      <div className="header px-2 py-3">
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <a href="/" className="navbar-brand align-middle">
              <i className="fa-brands fa-youtube px-1"></i>
              Youtube
            </a>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/DisplayAllSubs" element={<DisplayAllSubs />} />
        <Route path="/DisplayNameAndSub" element={<DisplayNameAndSub />} />
        <Route path="/UpdateUser" element={<UpdateUser />} />
      </Routes>
    </div>
  );
}

export default App;

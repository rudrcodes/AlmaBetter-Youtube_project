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
            <a href="/youtube-frontend" className="navbar-brand align-middle">
              <i className="fa-brands fa-youtube px-1"></i>
              Youtube
            </a>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/youtube-frontend" element={<Homepage />} />
        <Route
          path="/youtube-frontend/DisplayAllSubs"
          element={<DisplayAllSubs />}
        />
        <Route
          path="/youtube-frontend/DisplayNameAndSub"
          element={<DisplayNameAndSub />}
        />
        <Route
          path="/youtube-frontend/UpdateUser"
          element={<UpdateUser />}
        />
      </Routes>
    </div>
  );
}

export default App;

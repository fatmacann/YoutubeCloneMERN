import React from "react";

import Topbar from "./components/Topbar/Topbar.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";

import Home from "./pages/HomePage.jsx";
import Search from "./pages/Search.jsx";
import SignIn from "./pages/SignIn.jsx";
import Video from "./pages/VideoPage.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <div className="mainWrapper">
        <Sidebar />
        <div className="wrapper">
          <Routes>
            <Route path="/">
              <Route index element={<Home type="random" />} />
              <Route path="trends" element={<Home type="trends" />} />
              <Route path="subscriptions" element={<Home type="sub" />} />
              <Route path="search" element={<Search />}></Route>
              <Route
                    path="signin"
                    element={currentUser ? <HomePage /> : <SignIn />}
                  />

              <Route path="video">
                <Route path=":id" element={<Video />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

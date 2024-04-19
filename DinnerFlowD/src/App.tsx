import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home, List, Dinner, Demand, Order } from "./pages";
import { EditUser } from "./pages/EditUser";
import { CreateNewUser } from "./pages/CreateNewUser";
import { UserHistoryInfo } from "./pages/UserHistoryInfo";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/dinner" element={<Dinner />} />
          <Route path="/demand" element={<Demand />} />
          <Route path="/order" element={<Order />} />
          <Route path="/edituser" element={<EditUser />} />
          <Route path="/createnewuser" element={<CreateNewUser />} />
          <Route path="/historyinfo" element={<UserHistoryInfo />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

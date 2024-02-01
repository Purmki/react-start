import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import Auth from "./pages/auth";
import { UserProvider } from "./context/Theme";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import ResumeDisplay from "./pages/ResumeDisplay";
import "./App.css"
import AdminPage from "./components/adminPage";

function App() {

  const deleteResume = async (resumeObj) => {
    // delete from firebase
    try {
      const resumeObjRef = doc(db, "resumeCollection", resumeObj.id);
      await deleteDoc(resumeObjRef);
      // delete from local state
      const filteredResumes = resumes.filter((item) => {
        return item.id !== resumeObj.id;
      });
      setResumes(filteredResumes);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <BrowserRouter>
        <UserProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home deleteResume={deleteResume}/>} />
            <Route path="/ResumeDisplay" element={<ResumeDisplay deleteResume={deleteResume}/>} />
            <Route path="/Auth" element={<Auth />} />
            <Route path="/admin/:AdminId" element={<AdminPage />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
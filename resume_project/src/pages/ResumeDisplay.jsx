import React, { useEffect, useState, useContext } from "react";
// import ResumeCard from "../components/resumeCard";
import { db } from "../config/firebase";
import { collection, doc, deleteDoc, getDocs } from "firebase/firestore";
import { UserContext } from "../context/Theme";
import { query, where } from "firebase/firestore";
import html2canvas from "html2canvas";  // Added import for html2canvas
import jsPDF from "jspdf";  // Added import for jsPDF
import Templates from "../components/templates";

function ResumeDisplay() {
  const [loader, setLoader] = useState(false);
  const [resumes, setResumes] = useState([]);
  const { user, setUser, signOutHandler } = useContext(UserContext);

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const resumeCollection = collection(db, "resumeCollection");
        const individualData = query(
          resumeCollection,
          where("userId", "==", user.uid)
        );
        const querySnapshot = await getDocs(individualData);
        const resumesData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }));
        setResumes(resumesData);
      } catch (error) {
        console.error("Error fetching resumes:", error);
      }
    };

    console.log(user);

    if (user) {
      fetchResumes();
    }
  }, [user]);

  const DownloadPDF = () => {
    const capture = document.querySelector(".TemplateCard");
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF('p', 'mm', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save('resume.pdf');
    });
  };

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
      
      <h1>All Resumes</h1>
      <div>
      {resumes.map((resumeObj) => (
        <Templates key={resumeObj.id} resumeObj={resumeObj} deleteResume={deleteResume} DownloadPDF={DownloadPDF} />
      ))}
      {/* <Templates /> */}
      </div>
    </div>
  );
}

export default ResumeDisplay;
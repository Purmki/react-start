import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/Theme";
import "../design/resumeCard.css"

function ResumeCard(props) {
    console.log(props.resumeObj, props.resumeObj.about)
    const { user, setUser, signOutHandler, deleteResume } = useContext(UserContext);
  return (
    <div className="firstHalf">
    <div className="resume-card">
      <div className="resume-card-without-btn">
      <div className="holder">
        <h2>Full Name: {props.resumeObj.fullName}</h2>
      </div>
      <div className="holder">
        <h2>About: {props.resumeObj.About}</h2>
      </div>
      <div className="holder">
        <h2>Phone: {props.resumeObj.Phone}</h2>
      </div>
      <div className="holder">
        <h2>Email: {props.resumeObj.email}</h2>
      </div>
      </div>
      <div className="ExperienceHolder">
        <h2>Work Experience: </h2>
      </div>
      {props.resumeObj.workExperiences?.map((workExperience, index)=>{
        return(<> <div className="experienceInfo"><div className="holder">
        <h2>Company Name: {workExperience.Company}</h2>
      </div>
      <div className="holder">
        <h2>Role: {workExperience.Role}</h2>
      </div>
      <div className="holder">
        <h2>Time Frame: {workExperience.TimeFrame}</h2>
      </div>
      </div> </>)
      })}
       <div className="holder">
       <h2>Education: {props.resumeObj.Education}</h2>
        </div>
      
        </div>
        <div className="buttonHolder">
      <button onClick={() => {props.deleteResume(props.resumeObj) }}>delete</button>
      <button className="btnLoader" onClick={props.DownloadPDF}>
        {props.loader? (<span>downloading</span>):(<span>download</span>)}
      </button>
      </div>
    </div>
    
  );
}

export default ResumeCard;

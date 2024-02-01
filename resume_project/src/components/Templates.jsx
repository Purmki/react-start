import React from 'react'
import "../design/Templates.css"
import { useContext } from "react";
import { UserContext } from "../context/Theme";

function Templates(props) {
    return (
        <div className='worldDiv'>
             <div className="buttonSection">
            <div className="buttonHolder">
              <button onClick={() => {props.deleteResume(props.resumeObj) }}>Delete</button>
              <button className="btnLoader" onClick={props.DownloadPDF}>
                {props.loader? (<span>Downloading</span>):(<span>Download</span>)}
              </button>
            </div>
          </div>
          <div className='TemplateCard'>
            <div className='topCard'>
              <div className="holder"></div>
              <img className='niceStupidLogo' src="https://i.pinimg.com/736x/77/32/5e/77325ed9fa12ceafacb5a81a953db291.jpg" alt="" />
              <h2>Full Name: {props.resumeObj.fullName}</h2>
            </div>
            <div className='sideWallRight'>
              <h2>About:</h2>  <p>{props.resumeObj.About}</p>
              <br></br>
              <h3>Phone: {props.resumeObj.Phone}</h3>
              <h3>Education: {props.resumeObj.Education}</h3>
            </div>
            <div className='cardWall'>
              <div className='leftSideContent'>
                <div className='sideWallLeft'>
                <h3>Email: {props.resumeObj.email}</h3>
                </div>
                <div>
                <h3>Work Experience: </h3>
                </div>
                
             
              <div></div>
              {props.resumeObj.workExperiences?.map((workExperience, index) => {
             return   <div className="experienceInfo" key={index}>
                   
                  <div className="holder">
                    <h2>Company Name: </h2><h3>{workExperience.Company}</h3>
                  </div>
                  <div className="holder">
                  <h2>role: </h2><h3>{workExperience.Role}</h3>
                  </div>
                  <div className="holder">
                    <h2>Time Frame: </h2><h3>{workExperience.TimeFrame}</h3>
                  </div>
                </div>
              })}
                 </div>
            </div>
          </div>
         
        </div>
      );
}

export default Templates
import React, { useState, useEffect, useContext } from "react";
import ResumeCard from "../components/resumeCard";
import { db } from "../config/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  getDocs,
} from "firebase/firestore";
import { UserContext } from "../context/Theme";
import "../design/Home.css";
import { Link } from "react-router-dom";

function Home() {
  const { user, setUser, signOutHandler } = useContext(UserContext);
  const [resumes, setResumes] = useState([]);
  const [resumeObj, setResumeObj] = useState({});
  const [workExperiences, setWorkExperiences] = useState([]);
  const ref = collection(db, "resumeCollection");
  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(e);
    // setResumeObj({...resumeObj , workExp:[...workExperiences],userId:user.uid})
    // console.log(workExperiences);
    // console.log(resumeObj);

    // console.log(resumes);

    try {
      const resumeDoc = await addDoc(ref, {
        ...resumeObj,
        workExperiences: [...workExperiences],
        userId: user.uid,
      });
    } catch (e) {}
  };

  const changeHandler = (e) => {
    const resumeCopy = { ...resumeObj };
    resumeCopy[e.target.name] = e.target.value;
    setResumeObj({ ...resumeCopy });
  };
  const workChangeHandler = (e, index) => {
    const ExperienceCopy = [...workExperiences];
    ExperienceCopy[index][e.target.name] = e.target.value;
    setWorkExperiences(ExperienceCopy);
  };

  const addWorkExperience = () => {
    setWorkExperiences([...workExperiences, {}]);
  };

  const deleteWorkExperience = (index) => {
    const updatedExperiences = [...workExperiences];
    updatedExperiences.splice(index, 1);
    setWorkExperiences(updatedExperiences);
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
      {user ? (
        <form onSubmit={submitHandler}>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            name="fullName"
            onChange={changeHandler}
            required
          />
          <label htmlFor="About">About:</label>
          <textarea name="About" onChange={changeHandler} required></textarea>

          <label htmlFor="Phone">Phone:</label>
          <input type="number" name="Phone" onChange={changeHandler} />

          <label htmlFor="email">Email:</label>
          <input type="email" name="email" onChange={changeHandler} />

          <div>
            <h3>Work Experiences:</h3>
            {workExperiences.map((workExperience, index) => (
              <div key={index}>
                <label>Role:</label>
                <input
                  type="text"
                  onChange={(e) => workChangeHandler(e, index)}
                  name="Role"
                  value={workExperience.Role || ""}
                />

                <label>Company:</label>
                <input
                  type="text"
                  onChange={(e) => workChangeHandler(e, index)}
                  name="Company"
                  value={workExperience.Company || ""}
                />

                <label>Time Frame:</label>
                <input
                  onChange={(e) => workChangeHandler(e, index)}
                  type="text"
                  name="TimeFrame"
                  value={workExperience.TimeFrame || ""}
                />

                <button
                  type="button"
                  onClick={() => deleteWorkExperience(index)}
                >
                  Remove
                </button>
              </div>
            ))}

            <button type="button" onClick={addWorkExperience}>
              Add Work Experience
            </button>
          </div>

          <label htmlFor="Education">Education:</label>
          <select name="Education" onChange={changeHandler} required>
            <option value="">Select a form of education</option>
            <option value="school">12 school years</option>
            <option value="diploma">High school diploma</option>
            <option value="BA">BA</option>
            <option value="certificate">Professional certificate</option>
          </select>

          <button type="submit">Press to add</button>
        </form>
      ) : (
        <div className="HomeWorld">
           <div className="slider-container">
        <div className="slider-track">
          <div className="slider-slide" id="img1"></div>
          <div className="slider-slide" id="img2"></div>
          <div className="slider-slide" id="img3"></div>
        </div>
      </div>
          <div className="homeView">
            <div className="homeText">
              <h1>The Best Online Resume builder</h1>
              <h2>
                simply create a download your resume with the most Professional
                tools!
              </h2>
            </div>
            <div className="imgDiv">
              <img
                className="resumeGif"
                src="https://cdn.dribbble.com/users/125056/screenshots/1476165/99miles-resume-builder-icon-ios.gif"
                alt=""
              />
              <Link to="/Auth" className="bigButton">
                Start Building Your Resumes Today
              </Link>
              <p className="text">
                Welcome to the Ultimate Resume Builder! Unleash your
                professional potential with our state-of-the-art tools. Craft
                stunning resumes effortlessly and take the next step in your
                career journey. Start building your success story today!
              </p>
            </div>
          </div>
        </div>
      )}
      <div>
        {resumes.map((resumeObj) => (
          <ResumeCard
            resumeObj={resumeObj}
            key={resumeObj.id}
            deleteResume={deleteResume}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;

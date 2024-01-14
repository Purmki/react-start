import Picture from './components/picture.jsx'
import React from 'react'
// import Counter from './components/counter.jsx'
// import Employee from './components/employee.jsx'
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//import './App.css'
import Products from './pages/products.jsx'


function App() {
  const bigImage=
{ firstImage:"https://miro.medium.com/v2/resize:fit:480/1*xrF-9zcDn3WQPSwLNuqBag.png",
  secondImage:"https://render.fineartamerica.com/images/rendered/default/poster/4.5/8/break/images/artworkimages/medium/3/mr-krabs-megan-morgan.jpg",
  thirdImage:"https://upload.wikimedia.org/wikipedia/en/3/3b/SpongeBob_SquarePants_character.svg",
  fourthImage:"https://ih1.redbubble.net/image.3004084187.2540/st,small,507x507-pad,600x600,f8f8f8.u2.jpg",

}

const [currentName, setCurrentName] = useState(  ["jhon", "jane", "bob", "bil", "mark", "jo",]) ;

  // const person1={
  //   firstName: "John",
  //   lastName: "Doe",
  //   occupation: "Software Engineer",
  //   image: "https://upload.wikimedia.org/wikipedia/en/3/3b/SpongeBob_SquarePants_character.svg"
  // }
  
  // const person2={
  //   firstName: "Jane",
  //   lastName: "Doe",
  //   occupation: "Software Engineer",
  //   image: "https://ih1.redbubble.net/image.3004084187.2540/st,small,507x507-pad,600x600,f8f8f8.u2.jpg"
  // }
  
  // const person3={
  //   firstName: "bobby",
  //   lastName: "bobby",
  //   occupation: "Software Engineer",
  //   image: "https://miro.medium.com/v2/resize:fit:480/1*xrF-9zcDn3WQPSwLNuqBag.png"
  // }
  return (
    <>
    <Products />
     <div className='worldDiv'>
      <Picture image ={bigImage}/>
      <h1>names</h1>
      {currentName.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
  
     {/* <Employee person ={person1} />
     <Employee person ={person2} />
     <Employee person ={person3} /> */}
     </div>
    </>
  )

  }
export default App

  
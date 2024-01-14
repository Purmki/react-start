

import "./employee.css";
function Employee(props){

    return(
        <div className="container">
            <img className="image" src={props.person.image} ></img>/
            <h1 className="first">{props.person.firstName}</h1>
            <h3 className="second">{props.person.lastName}</h3>
            <h3 className="second">{props.person.occupation}</h3>
        </div>
    );
}

export default Employee
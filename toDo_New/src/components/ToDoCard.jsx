

function ToDoCard(props){
    return(
        <div>
            <h3>{props.ToDo.title}</h3>
            <h3>{props.ToDo.date}</h3>
            <h3>{props.ToDo.time}</h3>
            <button name="deleteButton" onClick={props.onRemove}>tap to delete</button>
        </div>
    )

}

export default ToDoCard;
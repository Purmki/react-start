import ToDoCard from "../components/toDoCard";
import { useState } from "react";


function ToDo(){
    const [toDoList, setToDoList] = useState([])
    const [chores, setChores] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()
        chores.id=Math.random()*100000
        setToDoList([...toDoList, chores])

    }
    const changeHandler = (e) => {
        setChores({...chores, [e.target.name]: e.target.value})
    }
    const deleteHandler = () => {
        setToDoList(toDoList.filter(todo => todo.id!== chores.id))
    }

    return(
        <div>
            <form>
                <input type="text" name="title" placeholder="Enter your to-do" onChange={changeHandler} />
                <input type="date" name="date" onChange={changeHandler}/>
                <input type="time" name="time" onChange={changeHandler}/>
                <button type="submit" onClick={submitHandler}>Add</button>
            </form>
            {toDoList.map((todoItem,index) =>{
        return(
            <ToDoCard ToDo={todoItem} key={index} onRemove={deleteHandler}/>
        )
    } )}
        </div>
    )
   
}


    

export default ToDo;
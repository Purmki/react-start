import React, { useState, useEffect } from "react";
import IncomeCard from "../components/incomeCard";
import {db} from "../config/fireBase";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { onSnapshot} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

function Incomes(props) {
  const [income, setIncome] = useState([]);
  const [budget, setBudget] = useState({});
  const [showForm, setShowForm] = useState(false);
  const ref = collection(db, "transactions")

  const submitHandler = async(e) => {
    e.preventDefault();
    let newObjectData = {
      title: e.target.title.value,
      type: e.target.type.value,
      amount: e.target.amount.value,
      category: e.target.category.value,
    }
    try{
     const budgetDoc= await addDoc(ref,newObjectData)
     const budgetRef = doc(db, "transactions" ,budget.id )
     const newDoc = await getDoc(budgetRef)
     
      setIncome([...income, { ...newDoc.Data(), id: newDoc.id }]);
    }catch(e){
      console.log(e);
    }
  };

  const changeHandler = (e) => {
    const budgetCopy = {...budget };
    budgetCopy[e.target.name] = e.target.value;
    setBudget({ ...budgetCopy });
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(ref, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setIncome(data);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const deleteBudget =async(budget) => {

    //delete from firebase
    try {
    const budgetRef = doc(db, "transactions" ,budget.id )  
    await deleteDoc(budgetRef)
    //delete from local state
    const filteredIncome = income.filter((item) => {
      return item.id!== budget.id;
    } );
    setIncome(filteredIncome);

    } catch (error) {
      console.log(error);
    }
    
   
  };
  
  const toggleForm = () => {
    setShowForm(!showForm);
  }
 

  
  return (
    <div>
      
      {props.user?<>
      <button onClick={toggleForm} >{showForm? `hide form` : `show form`}</button>
      
      
     {showForm && (<form onSubmit={submitHandler}>
        <input type="text" name="title" onChange={changeHandler}/>
        <input type="text" name="type" onChange={changeHandler}/>
        <input type="text" name="amount" onChange={changeHandler} />
        <select name="category" onChange={changeHandler}>
          <option value="food">food</option>
          <option value="transportation">transportation</option>
          <option value="gas">gas</option>
          <option value="rent">rent</option>
        </select>
        <button type="submit">press to add</button>
        
      </form>)}
      </>:null}
  

      {income.map((income, index) => {
        return <IncomeCard income={income} key={index} deleteBudget={deleteBudget} />;
      })}
    </div>
  );
}

export default Incomes;


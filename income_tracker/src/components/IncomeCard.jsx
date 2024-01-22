

function IncomeCard(props){
    return(
        <div className="income-card">
            <div className="holder">
            <h2>{props.income.title}</h2>
        </div>
        <div className="holder">
            <h2>{props.income.type}</h2>
        </div>
        <div className="holder">
            <h2>{props.income.amount}</h2>
        </div>
        <div className="holder">
            <h2>{props.income.category}</h2>
        </div>
            <button onClick={()=>{props.deleteBudget(props.income)}}>delete</button>
        </div>
    )
}
export default IncomeCard;




function BookCard(props) {
    return (
      <div>
    <h1>{props.book.title}</h1>
    <h2>{props.book.description}</h2>
    <img src={props.book.image} />
      
      </div>
    );
  }

export default BookCard
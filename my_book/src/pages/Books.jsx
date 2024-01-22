import { useState, useEffect } from "react";
import BookCard from "../components/BookCard";

function Books() {
  const [books, setBooks] = useState([
    {
      title: "Harry Potter and the Chamber of Secrets",
      description: "good book",
      image:
        "https://m.media-amazon.com/images/I/61ItOr+01UL._AC_UF894,1000_QL80_.jpg",
    },
    {
      title: "Harry Potter and ",
      description: "nice book",
      image: "https://filmcellsltd.com/ProductImages/1000x1000/MP17240255.jpg",
    },
  ]);
  const [book, setBook] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setBooks([...books, { ...book }]);
    // localStorage.setItem("books", JSON.stringify(books));
  };
  const changeHandler = (e) => {
    book[e.target.name] = e.target.value;
    setBook({ ...book });
    // console.log(books);
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("books"));
    if (storedData) {
      setBooks(storedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={changeHandler} name="title" />
        <input type="text" onChange={changeHandler} name="description" />
        <input type="text" onChange={changeHandler} name="image" />

        <button type="submit">Add Book</button>
      </form>
      {books.map((book, index) => {
        return <BookCard book={book} key={index} />;
      })}
    </div>
  );
}

export default Books;

import { useEffect, useState } from "react";
import Card from "./Card";
const Body = () => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch("http://localhost:3000/books");
      const json = await data.json();
      setBooks(json.books);
      console.log(json.books);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      {books ? (
        <div>
          {books.map((book, index) => (
            <Card key={index} book={book} />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
        // You can also render an empty state message or a loading spinner here
      )}
    </div>
  );
};

export default Body;

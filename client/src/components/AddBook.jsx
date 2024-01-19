import { useState } from "react";
const CreateBook = () => {
  const [bookdata, setBookdata] = useState({
    name: "",
    author: "",
    description: "",
    price: 0,
    imagelink: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBookdata((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookdata),
      });

      if (response.ok) {
        console.log("Book created successfully");
      } else {
        console.error("Failed to create book");
      }
    } catch (error) {
      console.error("Error creating book:", error);
    }
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Book name</label>
          <input
            type="text"
            name="name"
            value={bookdata.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Author</label>
          <input
            type="text"
            name="author"
            value={bookdata.author}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={bookdata.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>price</label>
          <input
            type="number"
            name="price"
            value={bookdata.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>imagelink</label>
          <input
            type="text"
            name="imagelink"
            value={bookdata.imagelink}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Submit </button>
        </div>
      </form>
    </div>
  );
};
export default CreateBook;

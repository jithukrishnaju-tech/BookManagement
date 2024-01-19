import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home-heading">
      <div>
        <h1>Library Management</h1>
      </div>
      <div className="list-style">
        <ul>
          <li className="list-style">
            <Link to="/">Home</Link>
            <Link to="/addbook">Add Book</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Home;

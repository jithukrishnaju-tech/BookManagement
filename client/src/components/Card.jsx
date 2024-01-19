const Card = ({ book }) => {
  const { name, description, author } = book;
  console.log(author);
  return (
    <div>
      <h3>{name}</h3>
      <h3>{author}</h3>
      <p>{description}</p>
    </div>
  );
};
export default Card;

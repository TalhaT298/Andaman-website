import "../ServiceMenu/Pg/Cards/styles.css";

const BookButton = ({ children, Click }) => {
  return (
    <button onClick={Click} className="book_btn">
      {children}
    </button>
  );
};

export default BookButton;

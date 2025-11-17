import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 16, borderRadius: 8 }}>
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>

      {/* Tombol menuju detail */}
      <Link to={`/book/${book.id}`}>
        <button style={{ marginTop: 10 }}>Enter</button>
      </Link>
    </div>
  );
}

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookById } from "../services/bookService";

export default function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    getBookById(id).then((data) => setBook(data));
  }, [id]);

  if (!book) return <p>Loading ...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>{book.title}</h2>
      <p>Penulis: {book.author}</p>
      <p>Harga: Rp {book.price}</p>
      <p>Deskripsi: {book.description}</p>
    </div>
  );
}
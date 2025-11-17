import { useEffect, useState } from "react";
import { getBooks } from "../services/bookService";
import BookCard from "../components/BookCard";

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then((data) => setBooks(data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Daftar Buku</h1>

      <div style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(3, 1fr)" }}>
        {books.map((b) => (
          <BookCard key={b.id} book={b} />
        ))}
      </div>
    </div>
  );
}
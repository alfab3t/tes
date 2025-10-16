import React, { useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";

function AddBookPage() {
  const [book, setBook] = useState({
    title: "",
    author: "",
    year: "",
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!book.title || !book.author || !book.year) {
      alert("Semua kolom wajib diisi!");
      return;
    }

    alert(`📘 Buku "${book.title}" berhasil ditambahkan!`);
    setBook({ title: "", author: "", year: "" });
  };

  return (
    <div className="container">
      <Header title="Tambah Buku Baru" subtitle="Masukkan data buku ke koleksi perpustakaan" />

      <form onSubmit={handleSubmit} className="form-container">
        <label>
          Judul Buku:
          <input
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
            placeholder="Masukkan judul buku"
          />
        </label>

        <label>
          Penulis:
          <input
            type="text"
            name="author"
            value={book.author}
            onChange={handleChange}
            placeholder="Masukkan nama penulis"
          />
        </label>

        <label>
          Tahun Terbit:
          <input
            type="number"
            name="year"
            value={book.year}
            onChange={handleChange}
            placeholder="Masukkan tahun terbit"
          />
        </label>

        <Button text="Tambah Buku" type="submit" />
      </form>
    </div>
  );
}

export default AddBookPage;

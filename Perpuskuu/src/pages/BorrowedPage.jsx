import React, { useState } from "react";
import Header from "../components/Header";

function BorrowedPage() {
  const [borrowedBooks] = useState([
    { id: 1, title: "Laskar Pelangi", borrower: "Andi", dueDate: "2025-10-20" },
    { id: 2, title: "Negeri 5 Menara", borrower: "Sinta", dueDate: "2025-10-25" },
  ]);

  return (
    <div className="container">
      <Header title="Daftar Buku Dipinjam" subtitle="Pantau buku yang sedang dipinjam anggota" />

      {borrowedBooks.length === 0 ? (
        <p>Tidak ada buku yang sedang dipinjam.</p>
      ) : (
        <table className="book-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Judul Buku</th>
              <th>Peminjam</th>
              <th>Tanggal Pengembalian</th>
            </tr>
          </thead>
          <tbody>
            {borrowedBooks.map((book, index) => (
              <tr key={book.id}>
                <td>{index + 1}</td>
                <td>{book.title}</td>
                <td>{book.borrower}</td>
                <td>{book.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default BorrowedPage;
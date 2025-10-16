import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>📚 Perpuskuu</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/add-book">Tambah Buku</Link>
        <Link to="/borrowed">Dipinjam</Link>
        <Link to="/about">Tentang</Link>
        <Link to="/contact">Kontak</Link>
      </div>
    </nav>
  );
}

export default Navbar;
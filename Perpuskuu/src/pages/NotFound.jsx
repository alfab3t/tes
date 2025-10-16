
import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container">
      <h1>404 - Halaman Tidak Ditemukan 😢</h1>
      <p>Kembali ke <Link to="/">Beranda</Link></p>
    </div>
  );
}

export default NotFound;


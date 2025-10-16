import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";

function Contact() {
  const handleClick = () => alert("Terima kasih telah menghubungi kami!");

  return (
    <div className="container">
      <Header title="Kontak Kami" subtitle="Kami siap membantu Anda 📞" />
      <p>Email: info@perpuskuu.com</p>
      <Button text="Kirim Pesan" onClick={handleClick} />
    </div>
  );
}

export default Contact;

import React from "react";
import "./Kontakty.css";
export default function Kontakty() {
  return (
    <div className="kontakty-container rounded-4xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 size-[90%] max-w-[1280px] mx-auto my-10 bg-[rgba(0,0,0,.5)] p-5">
      <p>
        V případě zájmu o naše koncertní vystoupení, nás kontaktujte na zde
        uvedeném tel. čísle nebo napište na náš email...
      </p>

      <div>Manažer - Kabát Tribute</div>
      <div>KOPP Radek</div>
      <div>Tel: +420 608 806 004</div>
      <div>Email: info@kabat-tribute.cz</div>
    </div>
  );
}

import "./Biografie.css";
import React from "react";
import radek from "../assets/biografie/radek.jpg";
import jarda from "../assets/biografie/jarda.jpg";
import tonny from "../assets/biografie/tonny.jpg";
import bob2 from "../assets/biografie/bob2.jpg";
import jirka from "../assets/biografie/jirka.jpg";
export default function Biografie() {
  return (
    <div className="biografie-container rounded-4xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 size-[90%] max-w-[1280px] mx-auto my-10 bg-[rgba(0,0,0,.5)] p-5 ">
      <div className="cards">
        <div className="card">
          <div className="l">
            <h1>Jarda (Pepa) Bubeniček</h1>

            <p>
              <b>Narozen</b> - Olomouc
            </p>
            <p>
              <b>Nástroj</b> - Shure SM58
            </p>
            <p>
              <b>Oblíbená kapela</b> - Kabát, Tabák
            </p>
            <p>
              <b>Hudební vzor</b> - Pepa Vojtek
            </p>
            <p>
              <b>Nealko</b> - Pramenitá voda
            </p>
            <p>
              <b>Alkohol</b> - Dobrá slivovice
            </p>
            <p>
              <b>Jídlo</b> - České jídlo
            </p>
            <p>
              <b>Oblíbené auto</b> - Ferrari
            </p>
            <p>
              <b>Sport</b> - Celkem vše
            </p>
          </div>
          <div className="p">
            <img src={jarda} alt="jarda" />{" "}
          </div>
        </div>
        <div className="card">
          <div className="l">
            <h1>Radek (Krulda) Kopp</h1>

            <p>
              <b>Narozen</b> - Olomouc
            </p>
            <p>
              <b>Nástroj</b> - Gibson Explorer, Marshall JCM 800
            </p>
            <p>
              <b>Oblíbená kapela</b> - Kabát, ZZ-Top, AC/DC
            </p>
            <p>
              <b>Hudební vzor</b> - Tomáš Krulich
            </p>
            <p>
              <b>Nealko</b> - Red Bull
            </p>
            <p>
              <b>Alkohol</b> - Free pivo
            </p>
            <p>
              <b>Jídlo</b> - Guláš s pěti knedlama
            </p>
            <p>
              <b>Oblíbené auto</b> - Mercedes SL 63 AMG
            </p>
            <p>
              <b>Sport</b> - Hokej, MoTo GP
            </p>
          </div>
          <div className="p">
            <img src={radek} alt="radek" />
          </div>
        </div>
        <div className="card">
          <div className="l">
            {" "}
            <h1>Tonny (Ota) Valíček</h1>
            <p>
              <b>Narozen</b> - Praha
            </p>
            <p>
              <b>Nástroj</b> - Gibson LP, Jolana Tornádo Custom, Marshall JCM
              800 m.2205, box JCM 800 LEAD
            </p>
            <p>
              <b>Oblíbená kapela</b> - Kabát, Motorhead
            </p>
            <p>
              <b>Hudební vzor</b> - Eva a Vašek :-)
            </p>
            <p>
              <b>Nealko</b> - Pramen vody
            </p>
            <p>
              <b>Alkohol</b> - Ne-éééééééé
            </p>
            <p>
              <b>Jídlo</b> - Moravské tvargle
            </p>
            <p>
              <b>Oblíbené auto</b> - Ford
            </p>
            <p>
              <b>Sport</b> - Fotbal, hokej
            </p>{" "}
          </div>
          <div className="p">
            <img src={tonny} alt="tonny" />
          </div>
        </div>
        <div className="card">
          <div className="l">
            {" "}
            <h1>Jiří (Špalda) Blaha</h1>
            <p>
              <b>Narozen</b> - Brno
            </p>
            <p>
              <b>Nástroj</b> - Fender Precision Bass
            </p>
            <p>
              <b>Oblíbená kapela</b> - Kabát, Beatles
            </p>
            <p>
              <b>Hudební vzor</b> - Milan Špalek
            </p>
            <p>
              <b>Nealko</b> - Pramen vody
            </p>
            <p>
              <b>Alkohol</b> - Slivovice
            </p>
            <p>
              <b>Jídlo</b> - Řízek
            </p>
            <p>
              <b>Oblíbené auto</b> - Mercedes
            </p>
            <p>
              <b>Sport</b> - Fotbal, hokej, tenis
            </p>{" "}
          </div>
          <div className="p">
            <img src={jirka} alt="jirka" />
          </div>
        </div>
        <div className="card">
          <div className="l">
            <h1>Bob (Hurvajs) Kopečný</h1>
            <p>
              <b>Narozen</b> - Zlín
            </p>
            <p>
              <b>Nástroj</b> - Sonor
            </p>
            <p>
              <b>Oblíbená kapela</b> - Kabát
            </p>
            <p>
              <b>Hudební vzor</b> - Radek Hurčík
            </p>
            <p>
              <b>Nealko</b> - Pivo :-)
            </p>
            <p>
              <b>Alkohol</b> - Pivo, pivo, pivo
            </p>
            <p>
              <b>Jídlo</b> - Guláš s pětima knedlama
            </p>
            <p>
              <b>Oblíbené auto</b> - Ferrari
            </p>
            <p>
              <b>Sport</b> - Pivo
            </p>{" "}
          </div>
          <div className="p">
            <img src={bob2} alt="bob" />
          </div>
        </div>
      </div>
    </div>
  );
}

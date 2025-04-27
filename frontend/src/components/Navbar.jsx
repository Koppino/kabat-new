import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./Navbar.css";
import { useAuthContext } from "../context/AuthContext";
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "#1a1d24",
  border: "none",
  borderRadius: "8px",
  boxShadow: 24,
  opacity: "1",
  p: 4,
  color: "white",
};
const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [activeMenu, setActiveMenu] = useState(false);
  const { authUser } = useAuthContext();
  const handleOpenMobileMenu = () => {
    setOpen(true);
    setActiveMenu(false);
  };
  const mobNavHandle = () => {
    setActiveMenu((activeMenu) => !activeMenu);
    console.log(activeMenu);
  };
  return (
    <>
      <div className="w-full  bg-[#1a1d24] sticky top-0 z-[999999]">
        <div className="w-full max-w-[1280px] mx-auto h-16 items-center flex justify-between special-gothic-condensed-one-regular bg-[#1a1d24]">
          <h1 className="px-3 text-4xl tracking-widest text-red-800">
            <a href="/#uvod">KABÁT TRIBUTE</a>
          </h1>
          <nav className="">
            <a
              className="block md:hidden text-3xl px-8 cursor-pointer"
              onClick={mobNavHandle}
            >
              <GiHamburgerMenu className="text-gray-200" />
            </a>
            <ul className="md:flex md:flex-row px-3 tracking-widest hidden text-gray-200">
              <li className="px-2 hover:opacity-80 cursor-pointer">
                <a href="/#uvod">ÚVOD</a>
              </li>
              <li className="px-2  hover:opacity-80 cursor-pointer">
                <a href="/#koncerty">KONCERTY</a>
              </li>
              <li className="px-2  hover:opacity-80 cursor-pointer">
                <a href="/#video">VIDEO</a>
              </li>
              <li className="px-2  hover:opacity-80 cursor-pointer">
                <a href="/#foto">FOTO</a>
              </li>
              <li className="px-2  hover:opacity-80 cursor-pointer">
                <a href="/#biografie">BIOGRAFIE</a>
              </li>
              <li className="px-2  hover:opacity-80 cursor-pointer">
                <a href="/#kontakty">KONTAKTY</a>
              </li>
              <li className="px-2   hover:opacity-80 cursor-pointer">
                <a href="/#ke-stazeni" onClick={handleOpen}>
                  KE STAŽENÍ
                </a>
              </li>
              {authUser && (
                <li className="px-2   hover:opacity-80 cursor-pointer">
                  <a href="/dashboard">ADMIN</a>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>

      {activeMenu && (
        <div className="mobile-menu special-gothic-condensed-one-regular text-gray-200">
          <a
            href="/#uvod"
            className="link"
            onClick={() => setActiveMenu(false)}
          >
            ÚVOD
          </a>
          <a
            href="/#koncerty"
            className="link"
            onClick={() => setActiveMenu(false)}
          >
            KONCERTY
          </a>
          <a
            href="/#video"
            className="link"
            onClick={() => setActiveMenu(false)}
          >
            VIDEO
          </a>
          <a
            href="/#foto"
            className="link"
            onClick={() => setActiveMenu(false)}
          >
            FOTO
          </a>
          <a
            href="/#biografie"
            className="link"
            onClick={() => setActiveMenu(false)}
          >
            BIOGRAFIE
          </a>{" "}
          <a
            href="/#kontakty"
            className="link"
            onClick={() => setActiveMenu(false)}
          >
            KONTAKTY
          </a>
          <a onClick={handleOpenMobileMenu} className="link kestazeni">
            KE STAŽENÍ
          </a>
          {authUser && (
            <a
              href="/dashboard"
              className="link"
              onClick={() => setActiveMenu(false)}
            >
              ADMIN
            </a>
          )}
        </div>
      )}
      {/* MODAL */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h1"
            className="modal-nadpis"
          >
            Pro pořadatele hudebních produkcí:
          </Typography>
          <ul>
            <li>
              <a
                className="modal-link"
                href="https://kabat-tribute.cz/files/smlouva.pdf"
                target="_blank"
              >
                Smlouva s pořadatelem
              </a>
            </li>
            <li>
              <a
                className="modal-link"
                href="https://kabat-tribute.cz/files/play_list__kabat_tribute.pdf"
                target="_blank"
              >
                Play List pro OSA
              </a>
            </li>
            <li>
              <a
                className="modal-link"
                href="https://kabat-tribute.cz/files/stage_plan.jpg"
                target="_blank"
              >
                Stage Plán
              </a>
            </li>
            <li>
              <a
                className="modal-link"
                href="https://kabat-tribute.cz/files/plakat.jpg"
                target="_blank"
              >
                Plakát - Kabát Tribute (rozlišení 8000x11400)
              </a>
            </li>
          </ul>
        </Box>
      </Modal>
      {/* //MODAL */}
    </>
  );
};

export default Navbar;

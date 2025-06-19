import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { HiDownload } from "react-icons/hi";
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
  width: "min(90vw, 600px)",
  bgcolor: "#1a1d24",
  border: "2px solid #ef4444",
  borderRadius: "12px",
  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8)",
  backdropFilter: "blur(10px)",
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
  };

  const navItems = [
    { href: "/#uvod", label: "ÚVOD" },
    { href: "/#koncerty", label: "KONCERTY" },
    { href: "/#video", label: "VIDEO" },
    { href: "/#foto", label: "FOTO" },
    { href: "/#biografie", label: "BIOGRAFIE" },
    { href: "/#kontakty", label: "KONTAKTY" },
  ];

  return (
    <>
      {/* Navbar */}
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <div className="logo-container">
            <a href="/#uvod" className="logo-link">
              <img
                alt="Kabát Tribute Logo"
                src="https://kabat-tribute.cz/assets/LogoPNG-b14256f1.png"
                className="logo-image"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              {navItems.map((item, index) => (
                <li key={index} className="nav-item">
                  <a href={item.href} className="nav-link">
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="nav-item">
                <button onClick={handleOpen} className="nav-link download-btn">
                  <HiDownload className="download-icon" />
                  KE STAŽENÍ
                </button>
              </li>
              {authUser && (
                <li className="nav-item">
                  <a href="/dashboard" className="nav-link admin-link">
                    ADMIN
                  </a>
                </li>
              )}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={mobNavHandle}>
            {activeMenu ? (
              <IoClose className="menu-icon" />
            ) : (
              <GiHamburgerMenu className="menu-icon" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${activeMenu ? "mobile-menu-active" : ""}`}>
        <div className="mobile-menu-content">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="mobile-nav-link"
              onClick={() => setActiveMenu(false)}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={handleOpenMobileMenu}
            className="mobile-nav-link download-mobile"
          >
            <HiDownload className="download-icon-mobile" />
            KE STAŽENÍ
          </button>
          {authUser && (
            <a
              href="/dashboard"
              className="mobile-nav-link admin-mobile"
              onClick={() => setActiveMenu(false)}
            >
              ADMIN
            </a>
          )}
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {activeMenu && (
        <div className="mobile-overlay" onClick={() => setActiveMenu(false)} />
      )}

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        className="modal-container"
      >
        <Box sx={modalStyle}>
          <div className="modal-header">
            <Typography
              id="modal-title"
              variant="h5"
              component="h2"
              className="modal-title"
            >
              📋 Pro pořadatele hudebních produkcí
            </Typography>
            <button onClick={handleClose} className="modal-close-btn">
              <IoClose />
            </button>
          </div>

          <div className="modal-content">
            <div className="download-grid">
              <a
                className="download-item"
                href="https://kabat-tribute.cz/files/smlouva.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="download-icon-wrapper">📄</div>
                <span>Smlouva s pořadatelem</span>
              </a>

              <a
                className="download-item"
                href="https://kabat-tribute.cz/files/play_list__kabat_tribute.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="download-icon-wrapper">🎵</div>
                <span>Play List pro OSA</span>
              </a>

              <a
                className="download-item"
                href="https://kabat-tribute.cz/files/stage_plan.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="download-icon-wrapper">🎪</div>
                <span>Stage Plán</span>
              </a>

              <a
                className="download-item"
                href="https://kabat-tribute.cz/files/plakat.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="download-icon-wrapper">🖼️</div>
                <span>Plakát - Kabát Tribute</span>
                <small>(rozlišení 8000x11400)</small>
              </a>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Navbar;

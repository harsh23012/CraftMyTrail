import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/craftmytrail.png";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const openForm = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdTstF74bgWi957hsJ6DWa_2BWpFgKD0rTtAn7awuK1kY0a7g/viewform",
      "_blank"
    );
  };

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="flex justify-between items-center px-6 py-4">
	  
	  {/* ✅ LOGO (Clickable) */}
	  <div
	    onClick={() => navigate("/")}
	    className="flex items-center gap-2 cursor-pointer"
	  >
	    <img
	      src={logo}
	      alt="logo"
	      className="w-10 h-10 rounded-full object-cover"
	    />
	    
	    <h1 className="text-xl font-bold text-[#0A2342]">
	      CraftMyTrail
	    </h1>
	  </div>

        {/* ✅ DESKTOP MENU */}
        <div className="hidden md:flex gap-6 items-center">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/destinations")}>
            Destinations
          </button>
          <button onClick={() => navigate("/about")}>
            About
          </button>
          <button onClick={() => navigate("/contact")}>
            Contact
          </button>

          <button
            onClick={openForm}
            className="bg-[#F7941D] text-white px-5 py-2 rounded-lg font-semibold"
          >
            Plan Trip
          </button>
        </div>

        {/* ✅ MOBILE MENU BUTTON (Animated Hamburger → X) */}
        <div
          className="md:hidden flex flex-col justify-center items-center gap-1 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </div>
      </div>

      {/* ✅ ANIMATED MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-6 pb-4 flex flex-col gap-3 bg-white shadow-lg"
          >
            <button onClick={() => navigate("/")}>Home</button>
            <button onClick={() => navigate("/destinations")}>
              Destinations
            </button>
            <button onClick={() => navigate("/about")}>
              About
            </button>
            <button onClick={() => navigate("/contact")}>
              Contact
            </button>

            <button
              onClick={openForm}
              className="bg-[#F7941D] text-white px-4 py-2 rounded-lg"
            >
              Plan Trip
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import destinationCards from "../data/destinationsCards";

function Destinations() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filteredDestinations = destinationCards.filter((place) =>
    place.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen font-[Poppins]">

      <Navbar />

      {/* ✅ HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16 bg-gradient-to-r from-[#0A2342] to-blue-900 text-white"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Explore Destinations
        </h1>

        <p className="text-gray-300 mb-6">
          Find your perfect travel destination
        </p>

        {/* ✅ PREMIUM SEARCH */}
        <input
          type="text"
          placeholder="Search destinations..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-6 py-3 w-[90%] md:w-[400px] rounded-full text-black outline-none shadow-lg"
        />
      </motion.div>

      {/* ✅ GRID */}
      <div className="max-w-6xl mx-auto px-6 py-12">

        {filteredDestinations.length === 0 && (
          <p className="text-center text-gray-500">
            No destinations found
          </p>
        )}

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid md:grid-cols-3 gap-8"
        >

          {filteredDestinations.map((place) => (
            <motion.div
              key={place.slug}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate(`/destination/${place.slug}`)}
              className="cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >

              {/* ✅ IMAGE WITH OVERLAY */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                />

                {/* ✅ GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                {/* ✅ TEXT ON IMAGE */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{place.name}</h3>
                  <p className="text-sm text-gray-200">
                    {place.desc}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}

        </motion.div>

      </div>

      <Footer />
    </div>
  );
}

export default Destinations;
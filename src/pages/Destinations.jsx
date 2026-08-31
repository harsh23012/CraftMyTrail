import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import destinationCards from "../data/destinationsCards";

function Destinations() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const cardsPerPage = 6;

  const filteredDestinations = destinationCards
    .filter((place) =>
      place.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const totalPages = Math.ceil(
    filteredDestinations.length / cardsPerPage
  );

  const startIndex = (currentPage - 1) * cardsPerPage;

  const currentDestinations = filteredDestinations.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  return (
    <div className="bg-gray-50 min-h-screen font-[Poppins]">
      <Navbar />

      {/* Header */}
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

        <input
          type="text"
          placeholder="Search destinations..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="px-6 py-3 w-[90%] md:w-[400px] rounded-full text-black outline-none shadow-lg"
        />
      </motion.div>

      {/* Destinations Grid */}
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentDestinations.map((place) => (
            <motion.div
              key={place.slug}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              onClick={() =>
                navigate(`/destination/${place.slug}`)
              }
              className="cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition bg-white"
            >
			<div className= "relative h-56 overflow-hidden">
			  <img src={place.image} onError={(e) => {
			      e.target.style.display = "none";

			      const fallback =
			        e.target.parentElement.querySelector(".fallback-name");

			      if (fallback) {
			        fallback.style.display = "flex";
			      }
			    }}
			  />

			  <div
			    className="fallback-name absolute inset-0 hidden items-center justify-center bg-gradient-to-r from-[#0A2342] to-blue-700 text-white text-3xl font-bold"
			  >
			    {place.name}
			  </div>

			  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

			  <div className="absolute bottom-4 left-4 text-white">
			    <h3 className="text-xl font-bold">{place.name}</h3>
			    <p className="text-sm text-gray-200">{place.desc}</p>
			  </div>
			</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12 flex-wrap">
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.max(prev - 1, 1))
              }
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg bg-[#0A2342] text-white disabled:opacity-50"
            >
              Previous
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded-lg transition ${
                  currentPage === index + 1
                    ? "bg-[#F7941D] text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.min(prev + 1, totalPages)
                )
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg bg-[#0A2342] text-white disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Destinations;
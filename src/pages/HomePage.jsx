import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../assets/craftmytrail.png";
import destinationsCards from "../data/destinationsCards";

function Home() {
  const navigate = useNavigate();

  const openForm = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdTstF74bgWi957hsJ6DWa_2BWpFgKD0rTtAn7awuK1kY0a7g/viewform",
      "_blank"
    );
  };
  
  const featuredDestinations = [
  "gokarna",
  "pondicherry",
  "rishikesh",
  "goa",
  "munnar",
  "coorg",
  ];
  const featuredCards = destinationsCards.filter((place) =>
  featuredDestinations.includes(place.slug)
  );

  return (
    <div className="min-h-screen font-[Poppins]">

      {/* ✅ NAVBAR */}
	  <Navbar />

      {/* ✅ HERO SECTION */}
    <section className="bg-gradient-to-br from-[#0A2342] via-blue-900 to-[#0A2342] text-white pt-16 pb-24 px-6 text-center relative overflow-hidden">

        {/* Glow effects */}
        <div className="absolute w-[500px] h-[500px] bg-[#F7941D] opacity-20 rounded-full blur-3xl top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-blue-400 opacity-20 rounded-full blur-3xl bottom-[-100px] right-[-100px]" />

		<motion.div
		  initial={{ opacity: 0, y: 40 }}
		  animate={{ opacity: 1, y: 0 }}
		  transition={{ duration: 1 }}
		  className="relative z-10 flex flex-col items-center justify-center"
		>
		<img
		  src={logo}
		  alt="CraftMyTrail Logo"
		  className="
		    w-20 h-20 
		    rounded-full 
		    mb-6 
		    shadow-lg 
		    border-2 border-white/30
		    mx-auto
		    hover:scale-110 
		    transition duration-300
		  "
		/>
          <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
            Your Journey <br />
            <span className="text-[#F7941D]">
              Crafted Just For You
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-300 mb-8 text-lg">
            Personalized itineraries, budget planning, and complete travel support across India.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button
              onClick={openForm}
              className="bg-[#F7941D] px-8 py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              Craft My Trip 🚀
            </button>

            <button
              onClick={() => navigate("/destinations")}
              className="border px-8 py-3 rounded-xl hover:bg-white hover:text-[#0A2342] transition"
            >
              Explore Destinations
            </button>
          </div>

          <p className="text-sm mt-4 text-gray-300">
            You will be redirected to a secure form to submit your request.
          </p>

          <div className="mt-6 bg-[#F7941D] inline-block px-6 py-2 rounded-full">
            🎉 Free itinerary for first 50 users!
          </div>
        </motion.div>
      </section>


	  {/* ✅ FEATURED DESTINATIONS */}
	  <section className="py-20 px-6 bg-gray-50 text-center">
	    <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342] mb-4">
	      Popular Destinations
	    </h2>

	    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
	      Discover India's most loved destinations with curated itineraries,
	      stay recommendations, local food guides and travel tips.
	    </p>

		<div className="max-w-6xl mx-auto px-6 py-12">
		        {featuredCards.length === 0 && (
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
		          {featuredCards.map((place) => (
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
				</div>

	    <div className="mt-12">
	      <button
	        onClick={() => navigate("/destinations")}
	        className="bg-[#0A2342] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#133b6e] transition duration-300 shadow-lg"
	      >
	        Explore More Destinations →
	      </button>
	    </div>
	  </section>

	  {/* ✅ WHY CHOOSE US */}
	  <section className="py-20 px-6 bg-gray-50 text-center">
	    <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342] mb-4">
	      Why Choose CraftMyTrail?
	    </h2>

	    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
	      We don’t just plan trips — we craft personalized travel experiences designed
	      around your needs, budget, and travel style. Here’s what makes us different.
	    </p>

	    <div className="grid md:grid-cols-3 gap-8">

	      {/* ✅ CARD 1 */}
	      <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
	        <div className="text-4xl mb-4">🎯</div>
	        <h3 className="text-xl font-semibold mb-3 text-[#0A2342]">
	          Personalized Planning
	        </h3>
	        <p className="text-gray-600 text-sm">
	          Every itinerary is customized based on your travel goals, interests,
	          budget, and preferences — no generic packages.
	        </p>
	      </div>

	      {/* ✅ CARD 2 */}
	      <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
	        <div className="text-4xl mb-4">💡</div>
	        <h3 className="text-xl font-semibold mb-3 text-[#0A2342]">
	          Transparency & Trust
	        </h3>
	        <p className="text-gray-600 text-sm">
	          Get complete clarity on costs, destinations, and activities — no hidden
	          charges, just honest travel planning.
	        </p>
	      </div>

	      {/* ✅ CARD 3 */}
	      <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
	        <div className="text-4xl mb-4">🎒</div>
	        <h3 className="text-xl font-semibold mb-3 text-[#0A2342]">
	          Travel Freedom
	        </h3>
	        <p className="text-gray-600 text-sm">
	          Whether it’s solo travel, a romantic getaway, or a family vacation —
	          your journey is fully flexible and designed your way.
	        </p>
	      </div>

	    </div>
	  </section>

      {/* ✅ CTA */}
      <section className="bg-[#0A2342] text-white text-center py-16">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Plan Your Trip?
        </h2>

        <button
          onClick={openForm}
          className="bg-[#F7941D] text-white px-6 py-3 rounded-lg font-semibold"
        >
          Craft My Trip 🚀
        </button>
      </section>

      {/* ✅ FOOTER */}
      <Footer />
    </div>
  );
}

export default Home;
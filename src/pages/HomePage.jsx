import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../assets/craftmytrail.png";

function Home() {
  const navigate = useNavigate();

  const openForm = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdTstF74bgWi957hsJ6DWa_2BWpFgKD0rTtAn7awuK1kY0a7g/viewform",
      "_blank"
    );
  };

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
	      Featured Destinations
	    </h2>

	    <p className="text-gray-600 mb-10">
	      Discover handpicked destinations with curated itineraries and travel guides.
	    </p>

	    <div className="grid md:grid-cols-3 gap-8">

	      {[
	        {
	          name: "Munnar",
	          image: "https://images.unsplash.com/photo-1637066742971-726bee8d9f56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVubmFyfGVufDB8fDB8fHww",
	          slug: "munnar",
	        },
	        {
	          name: "Goa",
	          image: "https://images.unsplash.com/photo-1560179406-1c6c60e0dc76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8R29hfGVufDB8fDB8fHww",
	          slug: "goa",
	        },
	        {
	          name: "Coorg",
	          image: "https://media.istockphoto.com/id/1225793683/photo/mountain-gap-with-river-flowing-and-green-forests.webp?a=1&b=1&s=612x612&w=0&k=20&c=x6rPNAzN-USPyp35XIWhyUmxEYpuuGlnOnYmdh_gI5k=",
	          slug: "coorg",
	        },
			{
				name: "Gokarna",
				image: "https://media.istockphoto.com/id/590043276/photo/lonely-coast-and-sea.webp?a=1&b=1&s=612x612&w=0&k=20&c=3NmM9Miz5TNcHpLoZMoVfMkTrGPhH6vQeOV193EP_Dg=",
				slug: "gokarna",
		    },
	      ].map((place) => (
	        <div
	          key={place.name}
	          onClick={() => navigate(`/destination/${place.slug}`)}
	          className="cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
	        >
	          
	          {/* ✅ IMAGE */}
	          <img
	            src={place.image}
	            alt={place.name}
	            className="w-full h-48 object-cover"
	          />

	          {/* ✅ CONTENT */}
	          <div className="p-5">
	            <h3 className="text-xl font-semibold text-[#0A2342]">
	              {place.name}
	            </h3>

	            <p className="text-gray-600 text-sm mt-2">
	              Explore stunning landscapes, hidden gems, and curated travel experiences.
	            </p>

	            <button className="mt-4 text-[#F7941D] font-semibold">
	              View Details →
	            </button>
	          </div>

	        </div>
	      ))}

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
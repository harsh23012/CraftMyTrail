import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../assets/craftmytrail.png";

function About() {
  return (
    <div className="min-h-screen bg-gray-50 font-[Poppins]">

      <Navbar />

	  {/* ✅ HERO */}
	  <section className="bg-gradient-to-r from-[#0A2342] to-blue-900 text-white text-center py-20">
	    <motion.div
	      initial={{ opacity: 0, y: 40 }}
	      animate={{ opacity: 1, y: 0 }}
	      transition={{ duration: 0.8 }}
	      className="flex flex-col items-center"
	    >

	      {/* ✅ LOGO */}
	      <img
	        src={logo}
	        alt="CraftMyTrail Logo"
	        className="w-16 h-16 rounded-full mb-4 shadow-lg"
	      />

	      {/* ✅ TITLE */}
	      <h1 className="text-3xl md:text-5xl font-bold mb-4">
	        About CraftMyTrail
	      </h1>

	      {/* ✅ SUBTEXT */}
	      <p className="max-w-2xl text-gray-300">
	        We craft personalized travel experiences designed around you — 
	        your preferences, your budget, your journey.
	      </p>

	    </motion.div>
	  </section>

      {/* ✅ ABOUT SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-[#0A2342] mb-4">
            Who We Are
          </h2>

          <p className="text-gray-700 leading-relaxed">
            CraftMyTrail is a modern travel planning platform that helps you design
            fully personalized travel itineraries. Instead of pre-made travel packages,
            we focus on understanding your interests, budget, and travel style to
            create a journey that is uniquely yours.
          </p>
		  
		  <div className="mt-10">
		    <h2 className="text-3xl font-bold text-[#0A2342] mb-4">
		      Our Story
		    </h2>

		    <p className="text-gray-700 leading-relaxed">
		      CraftMyTrail started from a very real and common problem. While planning
		      trips, I often found myself struggling to create a proper itinerary. 
		      Between managing work and daily responsibilities, it became difficult 
		      to dedicate enough time to research destinations, plan routes, and organize
		      everything efficiently.

		      <br /><br />

		      Creating a well-structured itinerary is not just time-consuming — it can
		      also be overwhelming and sometimes stressful. From deciding where to go,
		      what to cover each day, budgeting, and managing bookings, the entire process
		      can feel like a headache.

		      <br /><br />

		      That’s when the idea of CraftMyTrail was born — to simplify travel planning
		      and help people enjoy their journeys without the stress of planning. Our
		      goal is to take away the complexity and provide personalized, well-crafted
		      itineraries that fit your style, budget, and time.

		      <br /><br />

		      With CraftMyTrail, you don’t just travel — you travel with clarity,
		      confidence, and ease.
		    </p>
		  </div>
        </motion.div>

      </section>

      {/* ✅ MISSION + VISION */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3 text-[#0A2342]">
                🎯 Our Mission
              </h3>
              <p className="text-gray-600">
                To make travel planning simple, personalized, and stress-free
                for everyone by offering customized itineraries tailored
                to individual needs.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3 text-[#0A2342]">
                🌍 Our Vision
              </h3>
              <p className="text-gray-600">
                To become the most trusted travel planning platform where
                travelers find curated, meaningful, and memorable experiences.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ✅ WHY CHOOSE US */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-[#0A2342] mb-10">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="mb-2 font-semibold">🎯 Personalized Trips</h3>
            <p className="text-gray-600 text-sm">
              Every trip is crafted based on your preferences.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="mb-2 font-semibold">💡 Transparent Planning</h3>
            <p className="text-gray-600 text-sm">
              No hidden costs. Everything is clear and simple.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="mb-2 font-semibold">🚀 Hassle-Free Experience</h3>
            <p className="text-gray-600 text-sm">
              Focus on travel while we handle the planning.
            </p>
          </div>

        </div>
      </section>

      {/* ✅ HOW IT WORKS */}
      <section className="bg-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-10 text-[#0A2342]">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">

          <div>
            <div className="text-4xl mb-2">📝</div>
            <h4 className="font-semibold">Submit Details</h4>
          </div>

          <div>
            <div className="text-4xl mb-2">⚙️</div>
            <h4 className="font-semibold">We Plan Your Trip</h4>
          </div>

          <div>
            <div className="text-4xl mb-2">📩</div>
            <h4 className="font-semibold">Receive Itinerary</h4>
          </div>

        </div>
      </section>

      {/* ✅ CTA */}
      <section className="bg-[#0A2342] text-white text-center py-16">

        <h2 className="text-3xl font-bold mb-4">
          Ready to Plan Your Trip?
        </h2>

        <button
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSdTstF74bgWi957hsJ6DWa_2BWpFgKD0rTtAn7awuK1kY0a7g/viewform",
              "_blank"
            )
          }
          className="bg-[#F7941D] px-6 py-3 rounded-lg font-semibold"
        >
          Craft My Trip 🚀
        </button>

      </section>

      <Footer />
    </div>
  );
}

export default About;
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import instaLogo from "../assets/instalogo.png";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 font-[Poppins]">

      <Navbar />

      {/* ✅ HERO */}
      <section className="bg-gradient-to-r from-[#0A2342] to-blue-900 text-white text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>

          <p className="text-gray-300">
            Reach out to us directly and we’ll help you craft your perfect trip.
          </p>
        </motion.div>
      </section>

      {/* ✅ CONTACT DETAILS SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-16">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-2xl shadow-md space-y-8 text-center"
        >

          <h2 className="text-2xl font-bold text-[#0A2342]">
            Get in Touch
          </h2>

          {/* ✅ PHONE */}
          <div className="hover:scale-105 transition">
            <p className="text-lg font-semibold">📞 Phone</p>
            <a
              href="tel:+916205093779"
              className="text-gray-600 hover:text-[#F7941D]"
            >
              +91 62050 93779
            </a>
          </div>

		  {/* ✅ EMAIL */}
		  <div className="hover:scale-105 transition">
		    <p className="text-lg font-semibold">📧 Email</p>

		    <a
		      href="mailto:craftmytrail@gmail.com"
		      className="text-gray-600 hover:text-[#F7941D]"
		    >
		      craftmytrail@gmail.com
		    </a>
		  </div>


          {/* ✅ INSTAGRAM */}
          <div className="flex items-center justify-center gap-3 hover:scale-105 transition">
            <img src={instaLogo} alt="Instagram" className="w-6 h-6" />
            <a
              href="https://instagram.com/craftmytrail"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#F7941D]"
            >
              @craftmytrail
            </a>
          </div>

          {/* ✅ INFO NOTE */}
          <div className="bg-[#F7941D]/10 p-5 rounded-xl border-l-4 border-[#F7941D]">
            <p className="text-gray-700 text-sm">
              🌍 Based in India | We help travelers across the country plan
              customized trips with ease.
            </p>
          </div>

        </motion.div>

      </section>

      {/* ✅ CTA */}
      <section className="bg-[#0A2342] text-white text-center py-16">

        <h2 className="text-3xl font-bold mb-4">
          Ready to Plan Your Trip?
        </h2>

        <p className="text-gray-300 mb-6">
          Fill out your requirements and get a personalized itinerary.
        </p>

        <button
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSdTstF74bgWi957hsJ6DWa_2BWpFgKD0rTtAn7awuK1kY0a7g/viewform",
              "_blank"
            )
          }
          className="bg-[#F7941D] px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
        >
          Craft My Trip 🚀
        </button>

      </section>

      <Footer />
    </div>
  );
}

export default Contact;
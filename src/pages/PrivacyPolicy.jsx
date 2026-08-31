import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen font-[Poppins]">

      <Navbar />

      {/* ✅ HERO */}
      <section className="bg-gradient-to-r from-[#0A2342] to-blue-900 text-white text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-300">
            Your privacy is important to us at CraftMyTrail
          </p>
          <p className="text-sm mt-2 text-gray-400">
            Last Updated: June 2026
          </p>
        </motion.div>
      </section>

      {/* ✅ CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid gap-6"
        >

          {/* ✅ CARD */}
          {[
            {
              title: "1. Information We Collect",
              text: "We collect information such as your name, email, phone number, and travel preferences when you interact with our services.",
            },
            {
              title: "2. How We Use Your Information",
              text: "Your data helps us create personalized itineraries, improve services, and communicate with you effectively.",
            },
            {
              title: "3. Data Sharing",
              text: "We do not sell your personal data. It is only used to provide services or when legally required.",
            },
            {
              title: "4. Data Security",
              text: "We take appropriate measures to ensure your information remains secure and protected.",
            },
            {
              title: "5. Cookies",
              text: "Cookies may be used to enhance your browsing experience and improve website performance.",
            },
            {
              title: "6. Third-Party Links",
              text: "We are not responsible for privacy practices of third-party websites linked from our platform.",
            },
            {
              title: "7. Policy Updates",
              text: "We may update our privacy policy periodically. Changes will be reflected on this page.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
            >
              <h2 className="text-lg font-semibold text-[#0A2342] mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm">
                {item.text}
              </p>
            </motion.div>
          ))}

          {/* ✅ CONTACT CARD */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            className="bg-gradient-to-r from-[#F7941D]/10 to-[#F7941D]/5 p-6 rounded-xl border-l-4 border-[#F7941D] shadow"
          >
            <h2 className="text-lg font-semibold text-[#0A2342] mb-2">
              8. Contact Us
            </h2>
            <p className="text-gray-700 text-sm mb-2">
              If you have any questions about this policy:
            </p>

            <p className="text-gray-700 text-sm">
              📧{" "}
              <a
                href="mailto:craftmytrail@gmail.com"
                className="hover:text-[#F7941D]"
              >
                craftmytrail@gmail.com
              </a>
              <br />
              📞{" "}
              <a
                href="tel:+916205093779"
                className="hover:text-[#F7941D]"
              >
                +91 62050 93779
              </a>
            </p>
          </motion.div>

        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
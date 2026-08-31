import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Terms() {
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
            Terms & Conditions
          </h1>
          <p className="text-gray-300">
            Please read these terms carefully before using our services
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
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="grid gap-6"
        >

          {[
            {
              title: "1. Acceptance of Terms",
              text: "By accessing and using CraftMyTrail, you agree to comply with these Terms and Conditions.",
            },
            {
              title: "2. Use of Services",
              text: "Our services are intended for personal travel planning. Misuse of information or services is strictly prohibited.",
            },
            {
              title: "3. Booking Responsibility",
              text: "CraftMyTrail provides travel suggestions and itineraries. Users are responsible for bookings, payments, and confirmations.",
            },
            {
              title: "4. Accuracy of Information",
              text: "We strive to provide accurate information, but we do not guarantee completeness or reliability of all travel details.",
            },
            {
              title: "5. Cancellation & Changes",
              text: "Any cancellations or changes in plans must be handled directly with service providers.",
            },
            {
              title: "6. Limitation of Liability",
              text: "CraftMyTrail is not liable for losses, delays, or damages arising from travel or third-party services.",
            },
            {
              title: "7. User Responsibilities",
              text: "Users must provide accurate information and follow all travel rules, regulations, and guidelines.",
            },
            {
              title: "8. Intellectual Property",
              text: "All content on this platform is owned by CraftMyTrail and should not be copied or reused without permission.",
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

          {/* ✅ CONTACT SECTION */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            className="bg-gradient-to-r from-[#F7941D]/10 to-[#F7941D]/5 p-6 rounded-xl border-l-4 border-[#F7941D] shadow"
          >
            <h2 className="text-lg font-semibold text-[#0A2342] mb-2">
              9. Contact Us
            </h2>

            <p className="text-gray-700 text-sm mb-2">
              For any queries regarding these terms:
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

export default Terms;
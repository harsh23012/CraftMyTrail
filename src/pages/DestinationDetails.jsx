import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import destinationDetailsData from "../data/destinationDetailsData";



function DestinationDetails() {
  const { name } = useParams();

  // ✅ Destination Data
  
  const place = destinationDetailsData[name?.toLowerCase()];

  if (!place) {
    return <div className="p-6 text-center">Destination not found</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen font-[Poppins]">

      <Navbar />

      {/* ✅ HERO */}
      <div className="relative h-[300px] md:h-[400px]">
        <img
          src={place.hero}
          alt={place.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl text-white font-bold">
            {place.title}
          </h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-6 space-y-12">

        {/* ✅ DESCRIPTION */}
        <p className="text-center text-gray-700 text-lg max-w-3xl mx-auto">
          {place.description}
        </p>

        {/* ✅ IMAGES */}
        <div className="grid md:grid-cols-3 gap-4">
          {place.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="place"
              className="h-40 w-full object-cover rounded-lg shadow hover:scale-105 transition"
            />
          ))}
        </div>

        {/* ✅ BASIC INFO */}
        <div className="grid md:grid-cols-3 gap-6">
          <InfoCard icon="🚗" title="How to Reach" text={place.reach} />
          <InfoCard icon="🏨" title="Stay" text={place.stay} />
          <InfoCard icon="📍" title="Explore" text={place.explore} />
        </div>

        {/* ✅ PREMIUM SECTIONS */}
        <div className="grid md:grid-cols-2 gap-6">
          <ListCard title="🍽️ Food" items={place.food} color="from-orange-50" />
          <ListCard title="🚗 Transport" items={place.transport} color="from-blue-50" />
          <ListCard title="🎒 Packing" items={place.packing} color="from-yellow-50" />
          <ListCard title="💡 Tips" items={place.tips} color="from-green-50" />
        </div>

        {/* ✅ ITINERARY */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-[#0A2342]">
            📅 Sample Itinerary
          </h2>

          <div className="space-y-4">
            {place.itinerary.map((day, i) => (
              <div
                key={i}
                className="bg-white border-l-4 border-[#F7941D] p-4 rounded shadow"
              >
                {day}
              </div>
            ))}
          </div>
        </div>

        {/* ✅ NOTES */}
        <div className="bg-[#F7941D]/10 border-l-4 border-[#F7941D] p-5 rounded-xl shadow">
          <h3 className="font-semibold mb-2 text-[#0A2342]">
            ✨ CraftMyTrail Tip
          </h3>
          <p className="text-gray-700 text-sm">
            {place.note}
          </p>
        </div>

      </div>

      <Footer />
    </div>
  );
}

/* ✅ Info Card */
function InfoCard({ icon, title, text }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="font-semibold text-[#0A2342] mb-2">
        {icon} {title}
      </h3>
      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  );
}

/* ✅ List Card */
function ListCard({ title, items, color }) {
  return (
    <div className={`bg-gradient-to-br ${color} to-white p-5 rounded-xl shadow hover:shadow-lg transition`}>
      <h3 className="font-semibold text-[#0A2342] mb-3">
        {title}
      </h3>

      <ul className="space-y-2 text-gray-600 text-sm">
        {items.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

export default DestinationDetails;
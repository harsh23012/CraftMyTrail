import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function DestinationDetails() {
  const { name } = useParams();
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/destinations/${name}.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Destination not found");
        }
        return res.json();
      })
      .then((data) => {
        setPlace(data);
        setLoading(false);
      })
      .catch(() => {
        setPlace(null);
        setLoading(false);
      });
  }, [name]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Loading...
      </div>
    );
  }

  if (!place) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Destination not found
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen font-[Poppins]">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[450px]">
        <img src={place.hero} onError={(e) => {
            e.target.style.display = "none";
          }}
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold text-center px-4">
            {place.title}
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 space-y-12">

        {/* Description */}
        <div>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
            {place.description}
          </p>
        </div>

        {/* Gallery */}
        <div>
          <h2 className="text-2xl font-bold text-[#0A2342] mb-4">
            📸 Gallery
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {place.images?.map((img) => (
              <img src={img}/>
            ))}
          </div>
        </div>

        {/* Reach Information */}
        <div>
          <h2 className="text-2xl font-bold text-[#0A2342] mb-6">
            🚗 How to Reach
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <InfoCard
              icon="✈️"
              title={place.reach.airport.name}
              text={`Distance: ${place.reach.airport.distance}
Travel Time: ${place.reach.airport.travelTime}`}
            />

            <InfoCard
              icon="🚆"
              title={place.reach.railwayStation.name}
              text={`Distance: ${place.reach.railwayStation.distance}
Travel Time: ${place.reach.railwayStation.travelTime}`}
            />

            <InfoCard
              icon="🚌"
              title={place.reach.busStand.name}
              text={`Distance: ${place.reach.busStand.distance}`}
            />
          </div>
        </div>

        {/* Stay & Explore */}
        <div className="grid md:grid-cols-2 gap-6">
          <ListCard
            title="🏨 Stay Options"
            items={place.stay}
            color="from-blue-50"
          />

          <ListCard
            title="📍 Best Places to Explore"
            items={place.explore}
            color="from-green-50"
          />
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-6">
          <ListCard
            title="🍽️ Food"
            items={place.food}
            color="from-orange-50"
          />

          <ListCard
            title="🚗 Local Transport"
            items={place.transport}
            color="from-blue-50"
          />

          <ListCard
            title="🎒 Packing Essentials"
            items={place.packing}
            color="from-yellow-50"
          />

          <ListCard
            title="💡 Travel Tips"
            items={place.tips}
            color="from-green-50"
          />
        </div>

        {/* Itinerary */}
        <div>
          <h2 className="text-2xl font-bold text-[#0A2342] mb-6">
            📅 Suggested Itinerary
          </h2>

          <div className="space-y-5">
            {place.itinerary?.map((day, index) => (
              <div
                key={index}
                className="bg-white border-l-4 border-[#F7941D] rounded-xl p-5 shadow"
              >
                <h3 className="font-bold text-lg text-[#0A2342]">
                  {day.day}
                </h3>

                <p className="text-[#F7941D] font-medium mb-3">
                  {day.title}
                </p>

                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {day.activities.map((activity, i) => (
                    <li key={i}>{activity}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Travel Tip */}
        <div className="bg-[#F7941D]/10 border-l-4 border-[#F7941D] p-5 rounded-xl shadow">
          <h3 className="font-semibold text-[#0A2342] mb-2">
            ✨ CraftMyTrail Expert Tip
          </h3>

          <p className="text-gray-700">
            {place.note}
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

/* Info Card */

function InfoCard({ icon, title, text }) {
  return (
    <div className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition">
      <h3 className="text-[#0A2342] font-semibold mb-3">
        {icon} {title}
      </h3>

      <p className="text-gray-600 whitespace-pre-line text-sm">
        {text}
      </p>
    </div>
  );
}

/* List Card */

function ListCard({ title, items, color }) {
  return (
    <div
      className={`bg-gradient-to-br ${color} to-white rounded-xl shadow p-5 hover:shadow-lg transition`}
    >
      <h3 className="font-semibold text-[#0A2342] mb-3">
        {title}
      </h3>

      <ul className="space-y-2 text-gray-700 text-sm">
        {items?.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

export default DestinationDetails;
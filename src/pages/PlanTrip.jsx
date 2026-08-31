import { useState } from "react";

function PlanTrip() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    departure: "",
    date: "",
    travelers: "",
    budget: "",
    tripType: "",
    preferences: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Temporary action (Google Form)
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdTstF74bgWi957hsJ6DWa_2BWpFgKD0rTtAn7awuK1kY0a7g/viewform",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-3xl p-8 rounded-xl shadow-lg"
      >
        <h1 className="text-3xl font-bold text-center mb-6 text-[#0A2342]">
          Plan Your Dream Trip ✈️
        </h1>

        {/* ✅ PERSONAL INFO */}
        <h2 className="text-xl font-semibold mb-4">Personal Details</h2>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="p-3 border rounded-lg"
            required
          />

          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="p-3 border rounded-lg"
            required
          />

          <input
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="p-3 border rounded-lg"
            required
          />
        </div>

        {/* ✅ TRIP DETAILS */}
        <h2 className="text-xl font-semibold mb-4">Trip Details</h2>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <input
            name="destination"
            placeholder="Destination"
            onChange={handleChange}
            className="p-3 border rounded-lg"
          />

          <input
            name="departure"
            placeholder="Departure City"
            onChange={handleChange}
            className="p-3 border rounded-lg"
          />

          <input
            type="date"
            name="date"
            onChange={handleChange}
            className="p-3 border rounded-lg"
          />

          <input
            name="travelers"
            placeholder="Number of Travelers"
            onChange={handleChange}
            className="p-3 border rounded-lg"
          />
        </div>

        {/* ✅ PREFERENCES */}
        <h2 className="text-xl font-semibold mb-4">Preferences</h2>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <select
            name="budget"
            onChange={handleChange}
            className="p-3 border rounded-lg"
          >
            <option>Budget</option>
            <option>Low</option>
            <option>Medium</option>
            <option>Luxury</option>
          </select>

          <select
            name="tripType"
            onChange={handleChange}
            className="p-3 border rounded-lg"
          >
            <option>Trip Type</option>
            <option>Solo</option>
            <option>Couple</option>
            <option>Family</option>
            <option>Friends</option>
          </select>
        </div>

        <textarea
          name="preferences"
          placeholder="Special requirements / preferences"
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-6"
          rows={4}
        />

        {/* ✅ BUTTON */}
        <button className="w-full bg-[#F7941D] text-white py-3 rounded-lg font-semibold hover:bg-orange-600">
          Craft My Trip 🚀
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          We’ll get back with your custom itinerary within 24 hours.
        </p>
      </form>
    </div>
  );
}

export default PlanTrip;

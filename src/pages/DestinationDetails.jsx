import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function DestinationDetails() {
	const { name } = useParams();

	const [place, setPlace] = useState(null);
	const [loading, setLoading] = useState(true);
	const [showAllHotels, setShowAllHotels] = useState(false);
	const [showAllFood, setShowAllFood] = useState(false);

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

			{/* Hero */}
			<div className="relative h-[300px] md:h-[450px]">
				<img src={place.hero} alt={name} />

				<div className="absolute inset-0 bg-black/50 flex items-center justify-center">
					<h1 className="text-3xl md:text-6xl font-bold text-white text-center px-4">
						{place.title}
					</h1>
				</div>
			</div>

			<div className="max-w-6xl mx-auto p-6 space-y-12">

				{/* Description */}
				<div>
					<p className="text-lg text-center text-gray-700 leading-relaxed">
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
							<img src={img} alt={name} />
						))}
					</div>
				</div>

				{/* Reach */}
				<div>
					<h2 className="text-2xl font-bold text-[#0A2342] mb-5">
						🚗 How to Reach
					</h2>

					<div className="grid md:grid-cols-3 gap-6">
						<InfoCard
							icon="✈️"
							title={place.reach?.airport?.name}
							text={`Distance: ${place.reach?.airport?.distance}
Travel Time: ${place.reach?.airport?.travelTime}`}
						/>

						<InfoCard
							icon="🚆"
							title={place.reach?.railwayStation?.name}
							text={`Distance: ${place.reach?.railwayStation?.distance}
Travel Time: ${place.reach?.railwayStation?.travelTime}`}
						/>

						<InfoCard
							icon="🚌"
							title={place.reach?.busStand?.name}
							text={`Distance: ${place.reach?.busStand?.distance}`}
						/>
					</div>
				</div>

				{/* Hotels */}
				<div>
					<h2 className="text-2xl font-bold text-[#0A2342] mb-5">
						🏨 Recommended Stays
					</h2>

					<div className="grid md:grid-cols-2 gap-5">
						{(showAllHotels
							? place.stay
							: place.stay?.slice(0, 2)
						)?.map((hotel, index) => (
							<div
								key={index}
								className="bg-white p-5 rounded-xl shadow"
							>
								<h3 className="font-bold text-lg text-[#0A2342]">
									{hotel.name}
								</h3>

								<p>{hotel.type}</p>

								<p className="text-sm text-gray-600">
									💰 {hotel.priceRange}
								</p>

								<p className="text-sm text-gray-600">
									📍 {hotel.distanceFromCenter}
								</p>

								<div className="mt-2 flex flex-wrap gap-2">
									{hotel.highlights?.map((item, i) => (
										<span
											key={i}
											className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs"
										>
											{item}
										</span>
									))}
								</div>

								{hotel.googleMaps && (
									<button
										onClick={() =>
											window.open(
												hotel.googleMaps,
												"_blank"
											)
										}
										className="mt-3 inline-flex items-center gap-2 bg-[#0A2342] hover:bg-blue-900 text-white px-4 py-2 rounded-lg shadow transition duration-300"
									>
										Open in Google Maps
									</button>
								)}


							</div>

						))}

					</div>
					{place.stay?.length > 2 && (
						<div className="flex justify-center mt-6">
							<button
								onClick={() => setShowAllHotels(!showAllHotels)}
								className="bg-[#0A2342] hover:bg-blue-900 text-white px-6 py-3 rounded-xl shadow-md transition"
							>
								{showAllHotels ? "Show Less" : "View More Stays"}
							</button>
						</div>
					)}
				</div>

				{/* Explore */}
				<ListCard
					title="📍 Places to Explore"
					items={place.explore}
					color="from-green-50"
				/>

				{/* Food */}
				<div>
					<h2 className="text-2xl font-bold text-[#0A2342] mb-5">
						🍽️ Food & Restaurants
					</h2>

					<div className="grid md:grid-cols-2 gap-5">
						{(showAllFood
							? place.food
							: place.food?.slice(0, 2)
						)?.map((food, index) => (
							<div
								key={index}
								className="bg-white p-5 rounded-xl shadow"
							>
								<h3 className="font-bold text-lg text-[#0A2342]">
									{food.name}
								</h3>

								<p>
									Specialty: {food.speciality}
								</p>

								<p className="text-sm text-gray-600">
									Price: {food.priceRange}
								</p>

								{food.mustTry?.length > 0 && (
									<div className="mt-2">
										<p className="font-medium">
											Must Try:
										</p>

										<ul className="list-disc pl-5">
											{food.mustTry.map((item, i) => (
												<li key={i}>{item}</li>
											))}
										</ul>
									</div>
								)}

								{food.googleMaps && (
									<button
										onClick={() =>
											window.open(
												food.googleMaps,
												"_blank"
											)
										}
										className="mt-3 inline-flex items-center gap-2 bg-[#0A2342] hover:bg-blue-900 text-white px-4 py-2 rounded-lg shadow transition duration-300"
									>
										Open in Google Maps
									</button>
								)}
							</div>
						))}
					</div>
					{place.food?.length > 2 && (
						<div className="flex justify-center mt-6">
							<button
								onClick={() => setShowAllFood(!showAllFood)}
								className="bg-[#0A2342] hover:bg-blue-900 text-white px-6 py-3 rounded-xl shadow-md transition"
							>
								{showAllFood ? "Show Less" : "View More Restaurants"}
							</button>
						</div>
					)}
				</div>

				{/* General Cards */}
				<div className="grid md:grid-cols-3 gap-6">
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
					<h2 className="text-2xl font-bold text-[#0A2342] mb-5">
						📅 Suggested Itinerary
					</h2>

					<div className="space-y-6">
						{place.itinerary?.map((day, index) => (
							<div
								key={index}
								className="bg-white rounded-xl shadow border-l-4 border-[#F7941D] p-5"
							>
								<h3 className="font-bold text-xl text-[#0A2342]">
									{day.day}
								</h3>

								<p className="text-[#F7941D] mb-4">
									{day.title}
								</p>

								<div className="space-y-4">
									{day.activities?.map((activity, i) => (
										<div
											key={i}
											className="border rounded-lg p-4 bg-gray-50"
										>
											<p className="font-semibold text-[#F7941D]">
												{activity.time}
											</p>

											<h4 className="font-bold text-[#0A2342]">
												{activity.place}
											</h4>

											<p className="text-gray-600">
												{activity.description}
											</p>


											{activity.googleMaps && (
												<button
													onClick={() =>
														window.open(
															activity.googleMaps,
															"_blank"
														)
													}
													className="mt-3 inline-flex items-center gap-2 bg-[#0A2342] hover:bg-blue-900 text-white px-4 py-2 rounded-lg shadow transition duration-300"
												>
													Open in Google Maps
												</button>
											)}
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Note */}
				<div className="bg-[#F7941D]/10 border-l-4 border-[#F7941D] rounded-xl p-5">
					<h3 className="font-bold text-[#0A2342] mb-2">
						✨ CraftMyTrail Expert Tip
					</h3>

					<p>{place.note}</p>
				</div>
			</div>

			<Footer />
		</div>
	);
}

function InfoCard({ icon, title, text }) {
	return (
		<div className="bg-white p-5 rounded-xl shadow">
			<h3 className="font-semibold text-[#0A2342] mb-3">
				{icon} {title}
			</h3>

			<p className="text-gray-600 whitespace-pre-line text-sm">
				{text}
			</p>
		</div>
	);
}

function ListCard({ title, items, color }) {
	return (
		<div
			className={`bg-gradient-to-br ${color} to-white rounded-xl shadow p-5`}
		>
			<h3 className="font-semibold text-[#0A2342] mb-3">
				{title}
			</h3>

			<ul className="space-y-2 text-gray-700">
				{items?.map((item, index) => (
					<li key={index}>• {item}</li>
				))}
			</ul>
		</div>
	);
}

export default DestinationDetails;
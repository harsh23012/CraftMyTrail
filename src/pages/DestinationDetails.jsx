import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
			<div className="relative h-[350px] md:h-[550px] overflow-hidden rounded-b-[40px]">
				<img src={place.hero} alt={name} />

				<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

				<div className="absolute bottom-10 left-8 md:left-16 text-white">
					<p className="uppercase tracking-[4px] text-sm opacity-80">
						Discover
					</p>

					<h1 className="text-4xl md:text-7xl font-bold">
						{place.title}
					</h1>
					<h3 className="text-2xl md:text-4xl">
						{place.state}
					</h3>

					<p className="mt-3 max-w-xl text-gray-200">
						Plan your perfect trip with curated stays,
						restaurants, local transport, and itinerary.
					</p>
				</div>
			</div>

			<div className="max-w-6xl mx-auto p-6 space-y-12">

				{/* Description */}
				<div>
					<p className="text-lg text-center text-gray-700 leading-relaxed">
						{place.description}
					</p>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
					<div className="bg-white rounded-2xl p-5 text-center shadow">
						<h3 className="text-3xl">📆</h3>
						<p className="font-bold mt-2">{place.recommendedDays}</p>
						<p className="text-gray-500 text-sm">Recommended Stay</p>
					</div>

					<div className="bg-white rounded-2xl p-5 text-center shadow">
						<h3 className="text-3xl">☀️</h3>
						<p className="font-bold mt-2">{place.bestTime}</p>
						<p className="text-gray-500 text-sm">Best Season</p>
					</div>

					<div className="bg-white rounded-2xl p-5 text-center shadow">
						<h3 className="text-3xl">💰</h3>
						<p className="font-bold mt-2">{place.budget}</p>
						<p className="text-gray-500 text-sm">Avg Budget</p>
					</div>
				</div>

				{/* Gallery */}
				<div className="bg-white rounded-3xl p-4 shadow-lg">
				<div className="flex items-center justify-between mb-5">
				  <h2 className="text-3xl font-bold text-[#0A2342]">
				    📸 Photo Gallery
				  </h2>

				  <span className="text-sm text-gray-500">
				    {place.images?.length} Photos
				  </span>
				</div>
				  <Swiper
				    modules={[Autoplay, Pagination, Navigation]}
				    spaceBetween={20}
				    slidesPerView={1}
				    loop={true}
				    autoplay={{
				      delay: 3000,
				      disableOnInteraction: false,
				    }}
				    pagination={{
				      clickable: true,
				    }}
				    navigation
				    breakpoints={{
				      640: {
				        slidesPerView: 1,
				      },
				      768: {
				        slidesPerView: 2,
				      },
				      1024: {
				        slidesPerView: 3,
				      },
				    }}
				  >
				    {place.images?.map((img, index) => (
				      <SwiperSlide key={index}>
				        <div className="overflow-hidden rounded-2xl">
				          <img src={img} alt={name}/>
				        </div>
				      </SwiperSlide>
				    ))}
				  </Swiper>
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

					<div className="grid md:grid-cols-3 gap-5">
						{(showAllHotels
							? place.stay
							: place.stay?.slice(0, 3)
						)?.map((hotel, index) => (
							<div
								key={index}
								className="bg-white p-5 rounded-xl shadow"
							>
								<h3 className="font-bold text-lg text-[#0A2342]">
									{hotel.name}
								</h3>

								<span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
									{hotel.rating}
								</span>

								<p>{hotel.type}</p>

								<p className="text-sm text-gray-600">
									Price Range: {hotel.priceRange}
								</p>

								<p className="text-sm text-gray-600">
									Center of City: {hotel.distanceFromCenter}
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
					{place.stay?.length > 3 && (
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

					<div className="grid md:grid-cols-3 gap-5">
						{(showAllFood
							? place.food
							: place.food?.slice(0, 3)
						)?.map((food, index) => (
							<div
								key={index}
								className="bg-white p-5 rounded-xl shadow"
							>
								<h3 className="font-bold text-lg text-[#0A2342]">
									{food.name}
								</h3>
								
								<span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
									{food.rating}
								</span>

								<p>
									Specialty: {food.speciality}
								</p>

								<p className="text-sm text-gray-600">
									Price: {food.priceRange}
								</p>

								<div className="flex flex-wrap gap-2 mt-3">
									{food.mustTry?.map((item, i) => (
										<span
											key={i}
											className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs"
										>
											{item}
										</span>
									))}
								</div>

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
					{place.food?.length > 3 && (
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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import CreateItinerary from "./pages/CreateItinerary";
import PlanTrip from "./pages/PlanTrip";
import DestinationDetails from "./pages/DestinationDetails";
import ScrollToTop from "./components/ScrollToTop";
import Destinations from "./pages/Destinations";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <BrowserRouter>
	 
		<ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateItinerary />} />
		<Route path="/plan" element={<PlanTrip />} />
		<Route path="/destination/:name" element={<DestinationDetails />} />
		<Route path="/destinations" element={<Destinations />} />
		<Route path="/about" element={<About />} />
		<Route path="/contact" element={<Contact />} />
		<Route path="/privacy" element={<Privacy />} />
		<Route path="/terms" element={<Terms />} />

      </Routes>
	  <Chatbot />
    </BrowserRouter>
  );
}

export default App;

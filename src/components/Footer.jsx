import { useNavigate } from "react-router-dom";
import instaLogo from "../assets/instalogo.png";
import logo from "../assets/craftmytrail.png";
function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#081c36] text-white px-6 py-8">

      <div className="grid md:grid-cols-4 gap-6 text-sm">

        {/* ✅ BRAND */}
		{/* ✅ BRAND */}
		<div>
		  <div className="flex items-center gap-2 mb-2">
		    <img
		      src={logo}
		      alt="logo"
		      className="w-9 h-9 rounded-full"
		    />

		    <h2 className="text-lg font-bold">
		      CraftMyTrail
		    </h2>
		  </div>

		  <p className="text-gray-300 text-xs">
		    Your Journey, Crafted Just For You
		  </p>
		</div>

        {/* ✅ NAVIGATION */}
        <div>
          <h3 className="font-semibold mb-2">Explore</h3>
          <ul className="space-y-1 text-gray-300">
            <li onClick={() => navigate("/")} className="cursor-pointer hover:text-white">Home</li>
            <li onClick={() => navigate("/destinations")} className="cursor-pointer hover:text-white">Destinations</li>
            <li onClick={() => navigate("/about")} className="cursor-pointer hover:text-white">About</li>
          </ul>
        </div>

        {/* ✅ QUICK LINKS */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-300">
            <li onClick={() => navigate("/contact")} className="cursor-pointer hover:text-white">Contact</li>
            <li  onClick={() => navigate("/privacy")} className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li onClick={() => navigate("/terms")} className="hover:text-white cursor-pointer">Terms</li>
          </ul>
        </div>

        {/* ✅ CONTACT */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <ul className="space-y-1 text-gray-300">
            <li>📞 +91 62050 93779</li>
            <li className="flex items-center gap-2">
			<a href="mailto:craftmytrail@gmail.com"
				className="hover:text-[#F7941D]"
			>  📧 craftmytrail@gmail.com
		</a>
			</li>
			<li className="flex items-center gap-2">
			  <img
			    src={instaLogo}
			    alt="Instagram"
			    className="w-5 h-5"
			  />

			  <a
			    href="https://instagram.com/craftmytrail"
			    target="_blank"
			    rel="noopener noreferrer"
			    className="hover:text-[#F7941D]"
			  >
			    @craftmytrail
			  </a>
			</li>


          </ul>
        </div>

      </div>

      {/* ✅ BOTTOM */}
      <div className="text-center mt-6 text-xs text-gray-400 border-t pt-3">
        © 2026 CraftMyTrail
      </div>

    </footer>
  );
}

export default Footer;
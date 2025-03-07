import Socials from "../assets/Socials.png";
import DocuTech from "../assets/Container (7).png"
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto bg-hexgray-100">
      <div className="flex justify-between items-center gap-4">
        <img src={DocuTech} />
        <h1 className="text-2xl font-bold text-blue-900">DocuTech</h1>
      </div>
      <ul className="flex space-x-6 ml-60 text-gray-700 text-[17px]">
        <li className="cursor-pointer"><a href="#features">Features</a></li>
        <li className="cursor-pointer"><a href="#why-choose-us">Why Choose Us</a></li>
        <li className="cursor-pointer"><a href="#pricing">Pricing</a></li>
        <li className="cursor-pointer"><a href="#faq">FAQ</a></li>
      </ul>
      <div className="flex justify-between items-center gap-6">
        <img src={Socials} className="ml-50 cursor-pointer"/>
        <button className="bg-[#173A66] text-white px-4 py-2 cursor-pointer rounded-lg">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;

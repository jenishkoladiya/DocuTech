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
        <li className="cursor-pointer">Features</li>
        <li className="cursor-pointer">Why Choose Us</li>
        <li className="cursor-pointer">Pricing</li>
        <li className="cursor-pointer">FAQ</li>
      </ul>
      <div className="flex justify-between items-center gap-6">
        <img src={Socials} className="ml-50 cursor-pointer"/>
        <button className="bg-blue-700 text-white px-4 py-2 cursor-pointer rounded-lg">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;

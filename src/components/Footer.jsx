import React from 'react'
import { FaWhatsapp, FaFacebookF, FaLinkedinIn, FaDiscord, FaEnvelope, FaDesktop } from "react-icons/fa";
import DocuTech from '../assets/Container (6).png';

function Footer() {
  return (
    <div>
      <footer className="bg-[#173A66] text-white py-6 rounded-t-2xl">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
                
                <div className="flex flex-col items-center md:items-start">
                    <div className="flex items-center gap-2">
                        <img src={DocuTech} alt="DocuTech Logo" className="h-6" />
                        <span className="text-lg font-bold">DocuTech</span>
                    </div>
                    <p className="text-sm opacity-75">Powered by Classy Endeavors</p>
                </div>

                <div className="flex flex-col  items-center md:items-end space-y-2">
                  <div className="flex gap-4 mt-4 md:mt-0">
                    <a href="#" className="hover:text-gray-300"><FaWhatsapp size={16} /></a>
                    <a href="#" className="hover:text-gray-300"><FaFacebookF size={16} /></a>
                    <a href="#" className="hover:text-gray-300"><FaLinkedinIn size={16} /></a>
                    <a href="#" className="hover:text-gray-300"><FaDiscord size={16} /></a>
                    <a href="#" className="hover:text-gray-300"><FaEnvelope size={16} /></a>
                    <a href="#" className="hover:text-gray-300"><FaDesktop size={16} /></a>
                  </div>
                  <hr className="w-50 border-white " />
                  <nav className="flex flex-wrap gap-6 text-sm mt-4 md:mt-0">
                    <a href="#features" className="hover:underline">Features</a>
                    <a href="#why-choose-us" className="hover:underline">Why Choose Us</a>
                    <a href="#pricing" className="hover:underline">Pricing</a>
                    <a href="#faq" className="hover:underline">FAQ</a>
                    <a href="#legal-terms" className="hover:underline">Legal terms</a>
                    <a href="#privacy-policy" className="hover:underline">Privacy policy</a>
                  </nav>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer

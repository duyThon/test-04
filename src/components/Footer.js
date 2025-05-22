import React from "react";

import InstallApp from "../assets/installapp.png";

const Footer = () => {
  return (
    <>
      <div className="relative top-[60px] md:top-0 footer grid grid-cols-12 py-[40px] px-[20px] md:px-[100px] lg:px-[236px] md:space-x-[40px] border-t border-[#383A42] border-[1px]">
        <div className="footer-about col-span-6 md:col-span-3 flex flex-col items-start">
          <div className="footer-header text-[18px] font-cervino text-white pb-[12px]">
            ABOUT US
          </div>
          <ul className="footer-content flex flex-col text-[14px] font-roboto text-tgray text-start space-y-[8px]">
            <li className="hover:text-yellow cursor-pointer">Careers</li>
            <li className="hover:text-yellow cursor-pointer">
              Company Details
            </li>
            <li className="hover:text-yellow cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-yellow cursor-pointer">Help center</li>
            <li className="hover:text-yellow cursor-pointer">Privacy Policy</li>
            <li className="hover:text-yellow cursor-pointer">Affiliate</li>
          </ul>
        </div>
        <div className="footer-products col-span-6 md:col-span-3 flex flex-col items-start">
          <div className="footer-header text-[18px] font-cervino text-white pb-[12px]">
            PRODUCTS
          </div>
          <ul className="footer-content flex flex-col text-[14px] font-roboto text-tgray text-start space-y-[8px]">
            <li className="hover:text-yellow cursor-pointer">
              NFT Marketplace
            </li>
            <li className="hover:text-yellow cursor-pointer">Slingshot</li>
            <li className="hover:text-yellow cursor-pointer">Swaps</li>
            <li className="hover:text-yellow cursor-pointer">NFT Launchpad</li>
            <li className="hover:text-yellow cursor-pointer">Runes Platform</li>
            <li className="hover:text-yellow cursor-pointer">
              Creator Dashboard
            </li>
          </ul>
        </div>
        <div className="footer-resources col-span-6 md:col-span-3 pt-[24px] md:pt-0 flex flex-col items-start">
          <div className="footer-header text-[18px] font-cervino text-white pb-[12px]">
            RESOURCES
          </div>
          <ul className="footer-content flex flex-col text-[14px] font-roboto text-tgray text-start space-y-[8px]">
            <li className="hover:text-yellow cursor-pointer">Support</li>
            <li className="hover:text-yellow cursor-pointer">API</li>
            <li className="hover:text-yellow cursor-pointer">
              Feature Requests
            </li>
            <li className="hover:text-yellow cursor-pointer">Trust & Safety</li>
            <li className="hover:text-yellow cursor-pointer">Sitemap</li>
          </ul>
        </div>
        <div className="footer-contact col-span-6 md:col-span-3 pt-[24px] md:pt-0 flex flex-col items-start">
          <div className="footer-header text-[18px] font-cervino text-white pb-[12px]">
            CONTACT US
          </div>
          <ul className="footer-content flex flex-col text-[14px] font-roboto text-tgray text-start space-y-[8px]">
            <li className="hover:text-yellow cursor-pointer">
              support@tech.email
            </li>
            <li className="hover:text-yellow cursor-pointer">
              affiliate@tech.com
            </li>
            <li className="pt-[16px] cursor-pointer">
              <img className="h-[44px] w-auto" src={InstallApp} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;

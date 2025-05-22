import "./App.css";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Footer from "./components/Footer";

import Link1 from "./assets/slider/link1.png";
import Link2 from "./assets/slider/link2.png";
import Link3 from "./assets/slider/link3.png";
import Link4 from "./assets/slider/link4.png";
import Link5 from "./assets/slider/link5.png";
import Link6 from "./assets/slider/link6.png";

const links = [
  {
    img: Link1,
    content: "free to earn",
  },
  {
    img: Link2,
    content: "Ranking",
  },
  {
    img: Link3,
    content: "VIdeo NFT",
  },
  {
    img: Link4,
    content: "How to buy",
  },
  {
    img: Link5,
    content: "New NFTS",
  },
  {
    img: Link6,
    content: "Roadmaps",
  },
];

function App() {
  return (
    <div className="App bg-dark w-screen overflow-x-hidden">
      <Navbar />
      <Slider />
      <div className="relative top-[60px] md:top-0 bg-grayer w-screen slider-list md:px-[100px] lg:px-[236px] py-[16px] md:py-[24px]">
        <ul className="flex items-start md:items-center justify-between">
          {links.map((link, idx) => (
            <li
              key={idx}
              className="flex flex-col items-center justify-center space-y-[8px] md:space-y-[12px] cursor-pointer text-[14px] font-roboto text-white hover:text-yellow"
            >
              <img src={link.img} className="h-[28px] md:h-[42px]" />
              <span className="uppercase">{link.content}</span>
            </li>
          ))}
        </ul>
      </div>
      <Section1 />
      <Section2 />
      <Footer />
    </div>
  );
}

export default App;

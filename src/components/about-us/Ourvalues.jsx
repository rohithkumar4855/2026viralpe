import Container from "../../layout/Container";
import verified from "../../../public/images/verified1.png"
import people from "../../../public/images/people.png"
import Gift from "../../../public/images/gift1.png"
import Bulb from  "../../../public/images/bulb.png"
import shakehands from "../../../public/images/shakehands.png"
import Threepeople from "../../../public/images/threepeople.png"
const cardsData = [
  {
    id: 1,
    image:verified ,
    title: "Trust&Security",
    description: "We Prioritize the trust of our users and ensure highest standards of security in everything we do."
    },
  {
    id: 2,
    image: people ,
    title: "Customer First",
    description: "We Prioritize the trust of our users and ensure highest standards of security in everything we do."
  },
  {
  id: 3,
    image:Gift,
    title: "Rewards & Gratitude",
    description: "We believe in celebrating every transaction by offering rewards and giving back to society."
  },
  {
    id: 4,
    image: Bulb,
    title: "Innovation",
    description: "We constantly innovate to create simple, smart and impactful solutions for a better digital tomorrow.",
  },
  {
    id: 5,
    image: shakehands,
    title: "Integrity",
    description: "We operate with transparency, honesty and fairness in all our interactions."
  },
  {
    id: 6,
    image: Threepeople,
    title: "Empowermnet",
    description: "We empower Individuals, businesses and communities to grow, earn and create a better future together",
  },
];

export default function Ourvalues(){
    return(
      <Container>
  <div className="w-full max-w-[1215px] bg-(--white) rounded-[20px] mx-auto px-4 py-6 md:py-8">
    
    {/* HEADER SECTION */}
    <div className="text-center mb-6 md:mb-8">
      <h1 className="text-3xl sm:text-4xl md:text-[52px] md:leading-[60px] font-semibold">
        Our <span className="text-(--primary-red)">Values</span>
      </h1>
      <p className="text-base sm:text-lg md:text-[20px] text-[#222222CC] mt-1">
        The Principles That Define Us
      </p>
    </div>

    {/* CARDS SECTION - Responsive Grid to Flex */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap gap-4 md:gap-5 justify-center pb-4">
      {cardsData.map((card) => (
        <div
          key={card.id}
          className="w-full md:w-[179px] bg-white rounded-[20px] flex flex-col items-start p-3 md:p-2 border border-solid border-[#0000001A] shadow-sm md:shadow-none"
        >
          {/* IMAGE */}
          <img
            src={card.image}
            alt={card.title}
            className="w-8 h-8 md:w-[40px] md:h-[40px] object-contain"
          />

          {/* HEADING */}
          <h3 className="mt-3 text-sm md:text-[16px] font-semibold text-[#222222] line-clamp-1">
            {card.title}
          </h3>

          {/* PARAGRAPH */}
          <p className="mt-1 md:mt-2 text-xs md:text-[13px] leading-[18px] md:leading-[20px] text-[#666666] line-clamp-3 md:line-clamp-none">
            {card.description}
          </p>
        </div>
      ))}
    </div>

  </div>
</Container>
    );

}
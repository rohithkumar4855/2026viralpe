import Container from "../../layout/Container";
import{cardsData} from "../../data/HomeData"


export default function Ourvalues(){
    return(
      <Container>
       <div className="w-full md:max-w-303.75 h-full md:max-h-96.75  bg-(--white) rounded-[20px] mx-auto ">
        <div className="text-center ">
            <h1 className="text-[52px] font-semibold">Trust & Secure</h1>
            <p className="text-[20px] text-[#222222CC]">The Principles That Define Us</p>
        </div>
<div className="flex flex-wrap gap-5  justify-center pb-4 pt-5.5">
      {cardsData.map((card) => (
        <div
          key={card.id}
          className="w-[179px]  bg-white rounded-[20px] flex flex-col items-start p-2  rounded-[20px] border-1 border-solid border-[#0000001A]"
        >
          {/* IMAGE */}
          <img
            src={card.image}
            alt={card.title}
            className="w-[40px] h-[40px] object-contain"
          />

          {/* HEADING */}
          <h3 className="mt-3 text-[16px] font-semibold text-[#222222]">
            {card.title}
          </h3>

          {/* PARAGRAPH */}
          <p className="mt-2 text-[13px] leading-[20px] text-[#666666]">
            {card.description}
          </p>
        </div>
      ))}
    </div>
       </div>
      </Container>
    );

}
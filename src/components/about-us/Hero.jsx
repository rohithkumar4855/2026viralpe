import Container from "../../layout/Container";
import thunder from "../../../public/images/thunder.svg";
import Lock from "../../../public/images/lock.png";
import Gift from "../../../public/images/gift.png";
import city from "../../../public/images/city.png";

const features = [
  {
    id: 1,
    title: "100% Secure",
    icon: Lock,
  },
  {
    id: 2,
    title: "Rewards for you",
    icon: Gift,
  },
  {
    id: 3,
    title: "Instant Cashback",
    icon: thunder,
  },
];

export default function Hero() {
  return (
    <Container>
      <div className="w-[95%] lg:w-full max-w-[1216px] bg-(--white) pt-4 md:pt-[32px] px-2 py-2 rounded-[20px] mx-auto overflow-hidden">

        <div>
          <div className="max-w-full md:max-w-[649px] p-5 sm:p-7 md:p-9.5 md:pr-0 pb-6 md:pb-[25px]">
            <h1 className="text-[28px] sm:text-[36px] md:text-[52px] font-semibold leading-[1.2] md:leading-tight">
              India’s Trusted Digital Payments & Rewards Platform
            </h1>

            <p className="py-5 md:py-10.75 text-[15px] sm:text-[18px] md:text-[24px] text-gray-700 md:text-black leading-snug md:leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-2 md:py-3 rounded-full bg-[#F6F1F1]"
                >
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 object-contain"
                  />

                  <span className="text-[#901C27] text-[12px] sm:text-[13px] md:text-[14px] font-semibold whitespace-nowrap">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <img
            src={city}
            alt="City"
            className="w-full h-[120px] sm:h-[150px] md:h-[190px] object-cover rounded-[12px] md:rounded-[20px]"
          />
        </div>

      </div>
    </Container>
  );
}
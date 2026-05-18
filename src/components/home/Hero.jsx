
import Container from "../../layout/Container";
import Button from "../ui/Button";
import Appleicon from "../../../public/images/appleicon.png";
import playstoreicon from "../../../public/images/playstoreicon.png";
import homescreen from "../../../public/images/Homescreen1.png";
import Frame_1 from "../../../public/images/Frame_1.png";
import Frame_2 from "../../../public/images/Frame_2.png";


const rechargeData = [
    {
        id: 1,
        title: "Prepaid Recharge",
        icon: "/images/recharge.png",
        alt: "Prepaid",
    },
    {
        id: 2,
        title: "Postpaid Recharge",
        icon: "/images/recharge.png",
        alt: "Postpaid",
    },
    {
        id: 3,
        title: "DTH Recharge",
        icon: "/images/dthicon.png",
        alt: "DTH",
    },
    {
        id: 4,
        title: "FASTag Recharge",
        icon: "/images/fastagicon.png",
        alt: "FASTag",
    },
];


export default function Heropage() {
    return (
        <section>
                <div className="max-w-301.75 mt-25 mx-auto  flex flex-col md:flex-row gap-7.75 ">
                    <div className="flex flex-col  gap-4  bg-white rounded-2xl max-w-181 max-h-66 w-full p-[27.28px] shadow-sm">
                        <h2 className="font-semibold  text-[28px] ">Recharge or Pay Mobile Bill</h2>
                        <div className="flex flex-row justify-evenly  gap-14.25">
                            {rechargeData.map((item) => (
                                <div className="flex items-center flex-col justify-between pt-4" key={item.id}  >
                                    <img
                                        src={item.icon}
                                        alt={item.alt}
                                        className="w-13 h-13 object-contain mb-2"
                                    />
                                    <p className="text-sm font-medium flex flex-row align-center text-gray-800 leading-tight">
                                        {item.title.split(" ")[0]}
                                        <br />
                                        {item.title.split(" ")[1]}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* rightcard */}
                    <div className="w-110 min-w-110 h-66 bg-[#FFEDEE] rounded-2xl flex flex-row relative overflow-hidden shrink-0 shadow-sm">

                        {/* --- Left Text Content --- */}
                        <div className="flex flex-col pt-8 pl-7 z-10 w-[240px]">
                            <h2 className="font-bold text-[26px] leading-[1.2] text-[#222222] mb-3">
                                Recharge or Pay<br />Mobile Bill
                            </h2>

                            <p className="text-[14px] leading-[1.4] text-gray-700 mb-6 max-w-[180px]">
                                Collective earnings from our user community
                            </p>

                            <div>
                                <Button className="rounded-lg py-[8px] px-[14px] flex flex-row items-center gap-[6px]  text-white hover:bg-[#721c22] transition-colors shadow-sm w-fit">
                                    <span className="text-[12px] font-medium leading-none mt-[1px]">Download ViralPe App</span>
                                    <div className="flex flex-row items-center gap-[4px]">
                                        <img src={playstoreicon} alt="Play Store" className="w-[14px] h-[14px] object-contain" />
                                        <img src={Appleicon} alt="Apple" className="w-[14px] h-[14px] object-contain pb-[1px]" />
                                    </div>
                                </Button>
                            </div>
                        </div>

                        <div className="absolute top-[80px] left-[235px] w-[180px] h-[353.67px] bg-white rounded-[25.2px] border-[6.3px] border-[#222222] z-0 flex flex-col items-center pt-[30px] shadow-sm">
                            <img
                                src={homescreen}
                                alt="ViralPe Logo"
                                className="w-[90px] h-auto object-contain"
                            />
                        </div>
                        <img
                            src={Frame_1}
                            alt="Frame_1"
                            className="absolute top-[155px] left-[200px] w-[210px] h-auto object-contain z-10 drop-shadow-md"
                        />
                        <img
                            src={Frame_2}
                            alt="Frame_2"
                            className="absolute top-[210px] left-[200px] w-[210px] h-auto object-contain z-10 drop-shadow-md"
                        />
                    </div>
                </div>
        </section>
    );
}
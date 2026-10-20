import { useNavigate } from 'react-router-dom';

import fata from '../assets/portrait-enthusiastic-smiling-woman-female-entrepreneur-pointing-fingers-left-showing-adverti.png';
import schita from '../assets/schita-desen-transparent.png';

function HeroSection() {
    const navigate = useNavigate();

    return (
        <section className="relative pt-28 -mt-16 pb-20 md:pb-[10rem] md:py-40 px-6 bg-gradient-to-b from-[#D5DEEF] to-[#638ECB] dark:from-[#638ECB] dark:to-[#1f2937] overflow-hidden">

            {/* Fundal imagine desen */}
            <img
                src={schita}
                alt="Fundal desen București"
                className="absolute inset-0 w-full h-full object-cover opacity-20 fade-bottom pointer-events-none select-none z-0"
            />

            <div className="relative z-10 flex flex-col md:flex-row juctify-center items-center gap-12 max-w-[1100px] w-full mx-auto">
                {/* Textul - SUS pe mobil, STÂNGA pe desktop */}
                <div className="order-1 md:order-1 w-full md:w-[50%] xl:w-[45%] px-6 text-center md:text-left">
                    <div>
                        <div className="text-4xl md:text-5xl font-extrabold text-[#090739] dark:text-white mb-2 leading-tight">
                            Vrei schimbare?
                        </div>
                        <div className="text-4xl md:text-5xl font-extrabold text-[#090739] dark:text-white mb-6 leading-tight">
                            Începe cu o sesizare!
                        </div>
                    </div>

                    <p className="text-[#090739] dark:text-gray-200 text-base md:text-lg mb-6 max-w-md md:max-w-none">
                        Dacă ai observat o problemă în spațiul public – ne poți anunța rapid și ușor.
                        Informațiile trimise de tine ne ajută să intervenim mai eficient și să facem
                        Bucureștiul un loc mai sigur și mai curat pentru toți.
                    </p>
                    {/* Butonul de trimitere sesizare */}
                    <button
                        onClick={() => navigate("/sesizare")}
                        className="w-[240px] bg-white text-[#090739] font-semibold py-3 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition duration-300"
                    >
                        Trimite o sesizare acum!
                    </button>
                </div>


                {/* Imaginea - JOS pe mobil, DREAPTA pe desktop */}
                <div className="order-2 md:order-2 md:w-[45%] flex justify-center mb-[-0rem] md:mb-[-5rem]">
                    <img
                        src={fata}
                        alt="Cetățean entuziast"
                        className="w-full max-w-xs md:max-w-[500px] lg:max-w-[540px]"
                    />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
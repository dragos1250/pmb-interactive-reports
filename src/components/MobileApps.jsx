import telefon from '../assets/telefon-fara-background.png';
import googleplay from '../assets/google_play.png';
import appstore from '../assets/app_store.png';
import infotb from '../assets/infotb-app-icon.png';
import pay24 from '../assets/24pay-app-icon.png';
import termoalert from '../assets/termoalert-app-icon.png';

function MobileApps() {
    {/* Crearea iconitelor si a link-urilor de download pentru aplicatii */}
    const apps = [
        {   
            name: "InfoTB",
            icon: infotb,
            google: "https://play.google.com/store/apps/details?id=ro.stbsa&pli=1",
            apple: "https://apps.apple.com/ro/app/info-transport-bucure%C8%99ti/id1454773234?l=ro",
        },
        {
            name: "24Pay",
            icon: pay24,
            google: "https://play.google.com/store/apps/details?id=com.twentyfourpay",
            apple: "https://apps.apple.com/us/app/24pay/id1282006921",
        },
        {
            name: "TermoAlert",
            icon: termoalert,
            google: "https://play.google.com/store/apps/details?id=ro.termoenergetica.termoalert",
            apple: "https://apps.apple.com/ro/app/termoalert/id1591078608",
        },
    ];

    return (
        <section className="relative z-30 -mt-20 px-4 bg-transparent">
            {/* Card plutitor */}
            <div className="relative w-full max-w-[95rem] mx-auto bg-white dark:bg-[#1a202c]
  rounded-[3rem] px-6 pt-10 pb-0 md:py-0 flex flex-col md:flex-row items-center justify-between gap-10
  shadow-[0_0_50px_20px_rgba(38,110,153,0.3)] dark:shadow-[0_0_50px_20px_rgba(59,130,246,0.3)]">
                {/* Telefon */}
                <div className="order-2 md:order-1 md:w-1/2 flex justify-center -mt-5 md:-mt-20 -mb-10 md:-ml-6 relative z-10">
                    <img
                        src={telefon}
                        alt="Telefon aplicații PMB"
                        className="w-full max-w-[300px] drop-shadow-2xl md:translate-y-6"
                    />
                </div>

                {/* Listă aplicații */}
                <div className="order-1 md:order-2 md:w-1/2 space-y-6 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-[#266E99] dark:text-white">
                        Smart City - Aplicații pentru mobil
                    </h2>
                    <br />
                    <div className="w-full px-4 flex flex-wrap items-center justify-center gap-6 md:justify-start md:ml-[-2rem]">
                        {apps.map((app, index) => (
                            <div key={index} className="flex items-center gap-4">
                                {/* Iconiță aplicație */}
                                <img src={app.icon} alt={app.name} className="h-16 w-16 object-contain" />

                                {/* Butoane store – aliniate vertical */}
                                <div className="flex flex-col gap-1">
                                    <a href={app.apple} target="_blank" rel="noopener noreferrer">
                                        <img src={appstore} alt="App Store" className="h-8" />
                                    </a>
                                    <a href={app.google} target="_blank" rel="noopener noreferrer">
                                        <img src={googleplay} alt="Google Play" className="h-8" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MobileApps;

import ro112 from '../assets/logo_112_r.png';
import fiipregatit from '../assets/fiipregatit.ro.jpg';
import nutremurlacutremur from '../assets/nutremurlacutremur.ro-1.jpg';
import consolidaresist from '../assets/banner-MySMIS.png';
import infocons from '../assets/InfoCons_r.png';
import conect from '../assets/logo-conect.gov.ro.jpg';
import pnrr from '../assets/hub_mobilitate_management_urban.jpg';
import dga from '../assets/banner-DGA.jpg';

function Partners() {
    const imgClass = "h-24 object-contain transition-transform hover:scale-105";

    return (
        <section className="mt-20 py-16 px-6 bg-transparent">
            <div className="w-full max-w-[980px] mx-auto flex flex-col gap-10">
                {/* Rând 1 - 112, Fii pregatit, nu tremur la cutremur */}
                <div className="flex flex-wrap justify-center sm:justify-evenly md:justify-between gap-6 transition-all duration-300">
                    <a href="https://sts.ro/ro/servicii/despre-112/" target="_blank" rel="noopener noreferrer">
                        <img src={ro112} alt="RO112" className={imgClass} />
                    </a>
                    <a href="https://fiipregatit.ro" target="_blank" rel="noopener noreferrer">
                        <img src={fiipregatit} alt="Fiipregatit.ro" className={imgClass} />
                    </a>
                    <a href="https://nutremurlacutremur.ro/" target="_blank" rel="noopener noreferrer">
                        <img src={nutremurlacutremur} alt="Nu tremur la cutremur" className={imgClass} />
                    </a>
                </div>

                {/* Rând 2 - consolidare sistem anticoruptie, Info Cons, Conect */}
                <div className="flex flex-wrap justify-center sm:justify-evenly md:justify-between gap-6 transition-all duration-300">
                    <a href="https://www.pmb.ro/programe/8/menu-page/165" target="_blank" rel="noopener noreferrer">
                        <img src={consolidaresist} alt="Consolidare sistem" className={imgClass} />
                    </a>
                    <a href="https://infocons.ro/" target="_blank" rel="noopener noreferrer">
                        <img src={infocons} alt="InfoCons" className={imgClass} />
                    </a>
                    <a href="https://conect.gov.ro/1/" target="_blank" rel="noopener noreferrer">
                        <img src={conect} alt="Conect" className={imgClass} />
                    </a>
                </div>

                {/* Rând 3 - PNRR, DGA */}
                <div className="flex flex-wrap justify-center sm:justify-evenly md:justify-between gap-6 transition-all duration-300">
                    <a href="https://www.pmb.ro/programe/8/menu-page/196" target="_blank" rel="noopener noreferrer">
                        <img src={pnrr} alt="PNRR" className={imgClass} />
                    </a>
                    <a href="https://www.mai-dga.ro/arhive/64296" target="_blank" rel="noopener noreferrer">
                        <img src={dga} alt="DGA" className={imgClass} />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Partners;

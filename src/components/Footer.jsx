import pmbLogo from '../assets/logo-blue-b.png';
import adresaIcon from '../assets/address.png';
import telefonIcon from '../assets/phone.png';
import emailIcon from '../assets/email.png';
import facebookIcon from '../assets/facebook.png';
import youtubeIcon from '../assets/youtube.png';
import instagramIcon from '../assets/instagram.png';
import licenta from '../assets/licenta.jpg';

function Footer() {
    return (
        <footer id="contact" className="bg-[#d6e7f5] dark:bg-[#1a202c] text-sm text-blue-900 dark:text-gray-200 pt-12">
            <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-5 gap-x-16 gap-y-8">

                {/* Coloana 1 - Info PMB */}
                <div className="space-y-6 col-span-2">
                    <div className="flex items-center">
                        <img src={pmbLogo} alt="Logo PMB" className="h-12 mr-2" />
                        <span className="text-lg font-bold text-[#266E99] dark:text-white">Primăria Capitalei</span>
                    </div>

                    <div className="flex items-start gap-2">
                        <img src={adresaIcon} alt="Adresă" className="h-5 w-5 mt-1" />
                        <span>
                            B-dul Regina Elisabeta, Nr. 47, Sector 5,<br />
                            cod poștal 050013, București
                        </span>
                    </div>

                    <div className="flex items-start gap-2">
                        <img src={telefonIcon} alt="Telefon" className="h-5 w-5 mt-1" />
                        <span>
                            <strong>Dispecerat:</strong><br />
                            <a href="tel:+40319898" className="hover:underline">(+4) 031.9898</a>
                        </span>
                    </div>

                    <div className="flex items-start gap-2">
                        <img src={telefonIcon} alt="Telefon" className="h-5 w-5 mt-1" />
                        <span>
                            <strong>Centrala:</strong><br />
                            <a href="tel:+40213055555" className="hover:underline">(+4) 021 305.55.55</a><br />
                            <a href="tel:+40213055500" className="hover:underline">(+4) 021 305.55.00</a>
                        </span>
                    </div>
                </div>

                {/* Coloana 2 - Pagini utile */}
                <div>
                    <p className="font-semibold mb-2">Pagini utile</p>
                    <ul className="space-y-1">
                        <li><a href="https://www.pmb.ro/executiv/organigrama/menu-page/anunturi-de-angajare" target="_blank" rel="noopener noreferrer" className="hover:underline">Anunțuri de angajare</a></li>
                        <li><a href="https://www.pmb.ro/legaturi-utile/menu-page/poliția-locală-a-municipiului-bucurești" target="_blank" rel="noopener noreferrer" className="hover:underline">Poliția Locală</a></li>
                        <li><a href="https://www.pmb.ro/legaturi-utile/menu-page/evidența-persoanelor" target="_blank" rel="noopener noreferrer" className="hover:underline">Evidența Persoanelor</a></li>
                        <li><a href="https://www.pmb.ro/legaturi-utile/menu-page/Registratura-%28C.I.D.R.C%29" target="_blank" rel="noopener noreferrer" className="hover:underline">Registratura (C.I.D.R.C)</a></li>
                        <li><a href="https://www.pmb.ro/legaturi-utile/menu-page/compartimentul-audiențe" target="_blank" rel="noopener noreferrer" className="hover:underline">Compartimentul Audiențe</a></li>
                        <li><a href="https://www.pmb.ro/legaturi-utile/directii-pmb" target="_blank" rel="noopener noreferrer" className="hover:underline">Direcții PMB</a></li>
                        <li><a href="https://atop.pmb.ro/" target="_blank" rel="noopener noreferrer" className="hover:underline">Autoritatea Teritorială</a></li>
                        <li><a href="https://www.pmb.ro/legaturi-utile/menu-page/informează-direcția-de-integritate" target="_blank" rel="noopener noreferrer" className="hover:underline">Informează Integritatea</a></li>
                        <li><a href="https://www.pmb.ro/legaturi-utile/menu-page/harta-metrou" target="_blank" rel="noopener noreferrer" className="hover:underline">Harta Metrou</a></li>
                        <li><a href="https://www.pmb.ro/legaturi-utile/menu-page/rețeaua-școlară" target="_blank" rel="noopener noreferrer" className="hover:underline">Rețeaua școlară</a></li>
                    </ul>
                </div>

                {/* Coloana 3 - Primării de sector */}
                <div>
                    <p className="font-semibold mb-2">Primării de sector</p>
                    <ul className="space-y-1">
                        <li><a href="https://primariasector1.ro/" target="_blank" rel="noopener noreferrer" className="hover:underline">Sector 1</a></li>
                        <li><a href="https://www.ps2.ro/" target="_blank" rel="noopener noreferrer" className="hover:underline">Sector 2</a></li>
                        <li><a href="https://www.primarie3.ro/" target="_blank" rel="noopener noreferrer" className="hover:underline">Sector 3</a></li>
                        <li><a href="https://ps4.ro/" target="_blank" rel="noopener noreferrer" className="hover:underline">Sector 4</a></li>
                        <li><a href="https://sector5.ro/" target="_blank" rel="noopener noreferrer" className="hover:underline">Sector 5</a></li>
                        <li><a href="https://www.primarie6.ro/" target="_blank" rel="noopener noreferrer" className="hover:underline">Sector 6</a></li>
                    </ul>
                    <a href="https://doc.pmb.ro/pmb/docs/certificate_iso_9001_14001.pdf" target="_blank" rel="noopener noreferrer">
                        <div className="max-w-[7rem]">
                            <img src={licenta} alt="Certificare ISO" className="w-full mt-5" />
                        </div>
                    </a>
                </div>

                {/* Coloana 4 - Legături externe */}
                <div>
                    <p className="font-semibold mb-2">Legături externe</p>
                    <ul className="space-y-1">
                        <li><a href="https://www.gov.ro/" target="_blank" rel="noopener noreferrer" className="hover:underline">Guvern</a></li>
                        <li><a href="https://e-guvernare.ro/" target="_blank" rel="noopener noreferrer" className="hover:underline">E-guvernare</a></li>
                        <li><a href="https://www.ghiseul.ro/" target="_blank" rel="noopener noreferrer" className="hover:underline">Ghiseul.ro</a></li>
                        <li><a href="https://www.stb.ro/" target="_blank" rel="noopener noreferrer" className="hover:underline">STB</a></li>
                        <li><a href="https://www.metrorex.ro/" target="_blank" rel="noopener noreferrer" className="hover:underline">Metrorex</a></li>
                        <li><a href="https://www.tarom.ro/" target="_blank" rel="noopener noreferrer" className="hover:underline">TAROM</a></li>
                        <li><a href="https://cfr.ro/" target="_blank" rel="noopener noreferrer" className="hover:underline">CFR</a></li>
                        <li><a href="https://anpc.ro/" target="_blank" rel="noopener noreferrer" className="hover:underline">ANPC</a></li>
                    </ul>
                </div>
            </div>

            {/* Linie + Social media */}
            <div className="mt-10 pt-6 pb-4">
                <div className="max-w-7xl mx-auto px-6 border-t border-[#6495c4] dark:border-gray-600 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <a href="https://www.facebook.com/PMBucuresti/" target="_blank" rel="noopener noreferrer">
                            <img src={facebookIcon} alt="Facebook" className="h-6" />
                        </a>
                        <a href="https://www.youtube.com/channel/UCAdqlnogJYrcmGwDUDnYaMQ" target="_blank" rel="noopener noreferrer">
                            <img src={youtubeIcon} alt="YouTube" className="h-6" />
                        </a>
                        <a href="https://www.instagram.com/primariamunicipiuluibucuresti/" target="_blank" rel="noopener noreferrer">
                            <img src={instagramIcon} alt="Instagram" className="h-6" />
                        </a>
                        <a href="mailto:relatiipublice@pmb.ro">
                            <img src={emailIcon} alt="Email" className="h-6" />
                        </a>
                    </div>
                    <a
                        href="https://www.pmb.ro/legaturi-utile/menu-page/gdpr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-900 dark:text-gray-200 underline"
                    >
                        Prelucrarea datelor cu caracter personal
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

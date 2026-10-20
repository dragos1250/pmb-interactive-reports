import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/Harta.css";

function Harta() {
    useEffect(() => {
        const timeout = setTimeout(() => {
            const mapElement = document.getElementById("map");
            if (!mapElement) return;
            const map = L.map("map", {
                center: [44.41, 26.1],
                zoom: 15,
                maxBounds: [
                    [44.28, 25.85],
                    [44.58, 26.35],
                ],
                maxBoundsViscosity: 1.0,
            });

            {/* setare min zoom */}
            map.once("zoomend", () => {
                map.setMinZoom(map.getZoom() + 1);
            });

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: '&copy; OpenStreetMap contributors',
            }).addTo(map);

            {/* setare fitbound pentru a nu depasi stanga-dreapta, sus-jos limitele Bucurestiului */}
            map.fitBounds([
                [44.28, 25.85],
                [44.58, 26.35],
            ]);

            {/* crearea animatiei iconitelor */}
            const createPulsingIcon = (url) =>
                L.divIcon({
                  className: '',
                  html: `
                    <div class="pulse-wrapper">
                      <img src="${url}" class="pulse-icon" />
                      <span class="pulse-ring"></span>
                    </div>
                  `,
                  iconSize: [40, 40],
                  iconAnchor: [20, 20],
                  popupAnchor: [-2.5, -20],
                });
            
            {/* crearea de iconite */}
            const iconApa = createPulsingIcon("/icoane-harta/apa-nova.png");
            const iconGroapa = createPulsingIcon("/icoane-harta/administratia-strazilor-bucuresti.png");
            const iconAnimale = createPulsingIcon("/icoane-harta/ASPA.png");
            const iconPrimarie = createPulsingIcon("/icoane-harta/primarie-logo.png");
            const iconIluminat = createPulsingIcon("/icoane-harta/iluminat.png");
            const iconCultura = createPulsingIcon("/icoane-harta/cultura-patrimoniu.png");
            const iconTransport = createPulsingIcon("/icoane-harta/transport-public.png");
            const iconSpitale = createPulsingIcon("/icoane-harta/spitale.png");
            const iconRiscSeismic = createPulsingIcon("/icoane-harta/risc-seismic.png");
        
                
            {/* crearea de grupuri pentru a pune intr-o categorie iconita de pe harta */}
            const grupApa = L.layerGroup().addTo(map);
            const grupGropi = L.layerGroup().addTo(map);
            const grupAnimale = L.layerGroup().addTo(map);
            const grupIluminat = L.layerGroup().addTo(map);
            const grupCultural = L.layerGroup().addTo(map);
            const grupTransport = L.layerGroup().addTo(map);
            const grupSpitale = L.layerGroup().addTo(map);
            const grupRiscSeismic = L.layerGroup().addTo(map);
            
            {/* punerea efectiva a iconitelor pe harta cu tot cu grupul din care fac parte pentru layer */}
            L.marker([44.4344, 26.0932], { icon: iconPrimarie }).addTo(map)
                .bindPopup("Primăria Municipiului București 🏛️");


            {/* Iluminat */}
            L.marker([44.43, 26.10], { icon: iconIluminat }).addTo(grupIluminat)
                .bindPopup("<b>Problemă: Stâlp deteriorat</b><br>Str. Vlad Țepeș nr. 52");
            
            L.marker([44.457347, 26.084032], { icon: iconIluminat }).addTo(grupIluminat)
                .bindPopup("<b>Problemă: Iluminat public nefuncțional</b><br>Parcul Kiseleff – zonă întunecată");


            {/* Apa/Termoficare */}
            L.marker([44.431, 26.12], { icon: iconApa }).addTo(grupApa)
                .bindPopup("<b>Problemă: Apă</b><br>Conductă spartă<br>Str. Labirint 103-105");
            
            L.marker([44.426720, 26.150179], { icon: iconApa }).addTo(grupApa)
                .bindPopup("<b>Problemă: Lipsă apă caldă</b><br>Bloc A4 – Str. Baba Novac nr. 17");
            

            {/* Gropi/Constructii ilegale */}
            L.marker([44.4246, 26.09], { icon: iconGroapa }).addTo(grupGropi)
                .bindPopup("<b>Problemă: Groapă periculoasa</b><br>Calea 13 Septembrie");
            
            L.marker([44.434202, 26.125553], { icon: iconGroapa }).addTo(grupGropi)
                .bindPopup("<b>Problemă: Construcție fără autorizație</b><br>Str. Popa Nan nr. 67");
                

            {/* Animale/ASPA */}
            L.marker([44.386994, 26.131988], { icon: iconAnimale }).addTo(grupAnimale)
                .bindPopup("<b>Problemă: Animale</b><br>Câine agresiv<br>Str. Anton Bacalbașa");
            
            L.marker([44.458638, 26.016239], { icon: iconAnimale }).addTo(grupAnimale)
                .bindPopup("<b>Problemă: Câini vagabonzi în haită</b><br>Lacul Morii – Giulesti");
            
            
            {/* Cultura și Patrimoniu */}
            L.marker([44.435023, 26.101161], { icon: iconCultura }).addTo(grupCultural)
            .bindPopup("<b>Problemă: Monument vandalizat</b><br>Statuia lui Mihai Viteazul – Piața Universității");

            L.marker([44.436829, 26.103479], { icon: iconCultura }).addTo(grupCultural)
            .bindPopup("<b>Problemă: Fațadă clădire istorică degradată</b><br> Teatrul Național (TNB)");


            {/* Transport Public */}
            L.marker([44.445323, 26.097653], { icon: iconTransport }).addTo(grupTransport)
            .bindPopup("<b>Problemă: Afișaj defect în stație</b><br>Stația Piața Romană");

            L.marker([44.416478, 26.112670], { icon: iconTransport }).addTo(grupTransport)
            .bindPopup("<b>Problemă: Refugiu deteriorat</b><br>Stația Univ. Crestina Dimitrie Cantemir<br> Linie tramvai 1");


            {/* Spitale */}
            L.marker([44.453152, 26.114062], { icon: iconSpitale }).addTo(grupSpitale)
            .bindPopup("<b>Problemă: Acces blocat ambulanță</b><br>Spitalul Clinic Colentina");

            L.marker([44.456400, 26.079095], { icon: iconSpitale }).addTo(grupSpitale)
            .bindPopup("<b>Problemă: Igienă precară</b><br>Spitalul Sf. Maria");


            {/* Clădiri cu risc seismic */}
            L.marker([44.445127, 26.099956], { icon: iconRiscSeismic }).addTo(grupRiscSeismic)
            .bindPopup("<b>Problemă: Clădire cu bulină roșie</b><br>Piața Alexandru Lahovari 5A – Piata Romana");

            L.marker([44.419519, 26.096391], { icon: iconRiscSeismic }).addTo(grupRiscSeismic)
            .bindPopup("<b>Problemă: Tencuială căzută de la înălțime</b><br>Str. Cornelia – zonă afectată");

                

            {/* layer-ul de toggle pentru filtre */}
                const toggleLayer = (id, group) => {
                const el = document.getElementById(id);
                if (el) {
                    el.addEventListener("change", () => {
                        el.checked ? map.addLayer(group) : map.removeLayer(group);
                    });
                }
            };

            {/* layer-urile pentru filtrarea sesizarilor pe harta */}
            toggleLayer("filtru-apa", grupApa);
            toggleLayer("filtru-gropi", grupGropi);
            toggleLayer("filtru-animale", grupAnimale);
            toggleLayer("filtru-Iluminat",grupIluminat);
            toggleLayer("filtru-Cultural",grupCultural);
            toggleLayer("filtru-Transport",grupTransport);
            toggleLayer("filtru-Spitale",grupSpitale);
            toggleLayer("filtru-RiscSeismic",grupRiscSeismic);

            {/* crearea legendei din dreapta jos a hartii */}
            const legenda = L.control({ position: "bottomright" });
            legenda.onAdd = () => {
                const div = L.DomUtil.create("div", "legend-container");
                div.innerHTML = `
          <div class="legend-item legend-title"><b>📖 Legendă 📖</b></div>
          <div class="legend-item"><img src="/icoane-harta/apa-nova.png"> Apă/Termoficare</div>
          <div class="legend-item"><img src="/icoane-harta/administratia-strazilor-bucuresti.png"> Gropi/Construcții ilegale</div>
          <div class="legend-item"><img src="/icoane-harta/ASPA.png"> Animale/ASPA</div>
          <div class="legend-item"><img src="/icoane-harta/iluminat.png"> Iluminat Stradal</div>
          <div class="legend-item"><img src="/icoane-harta/cultura-patrimoniu.png"> Cultură și Patrimoniu</div>
          <div class="legend-item"><img src="/icoane-harta/transport-public.png"> Transport Public</div>
          <div class="legend-item"><img src="/icoane-harta/spitale.png"> Spitale</div>
          <div class="legend-item"><img src="/icoane-harta/risc-seismic.png"> Cladiri cu risc seismic</div>

        `;
                return div;
            };
            legenda.addTo(map);
        }, 0);

        return () => clearTimeout(timeout);
    }, []);
    {/* crearea div-ului pentru filtre */}
    return (
        <>  
            <div
                id="filtre"
                className="absolute top-20 left-10 z-[999] bg-gradient-to-b from-[#e9f1ff] to-[#acc8f8] p-5 rounded-2xl text-sm shadow-lg"
            >   
                <label><b><center>🔍Filtre de căutare🔎</center></b></label><br />
                <label><input type="checkbox" id="filtru-apa" defaultChecked /> Apă/Termoficare</label><br />
                <label><input type="checkbox" id="filtru-gropi" defaultChecked /> Gropi/Construcții ilegale</label><br />
                <label><input type="checkbox" id="filtru-animale" defaultChecked /> Animale/ASPA</label><br />
                <label><input type="checkbox" id="filtru-Iluminat" defaultChecked /> Iluminat Stradal</label><br />
                <label><input type="checkbox" id="filtru-Cultural" defaultChecked /> Cultură și Patrimoniu</label><br />
                <label><input type="checkbox" id="filtru-Transport" defaultChecked /> Transport Public</label><br />
                <label><input type="checkbox" id="filtru-Spitale" defaultChecked /> Spitale</label><br />
                <label><input type="checkbox" id="filtru-RiscSeismic" defaultChecked /> Cladiri cu risc seismic</label>

            </div>

            <div id="map" style={{ height: "100vh", width: "100%" }}></div>
        </>
    );
}

export default Harta;

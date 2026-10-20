import '../styles/BucurestiSlideShow.css';
{/*importarea imaginilor din folder*/}
import buc1 from '../assets/buc1.jpg';
import buc2 from '../assets/buc2.jpg';
import buc3 from '../assets/buc3.jpg';
import buc4 from '../assets/buc4.jpg';
import buc5 from '../assets/buc5.jpg';
import buc6 from '../assets/buc6.jpg';

function BucurestiSlideshow() {
    {/*crearea slideshow-urilor stanga dreapta pe pagina de sesizare*/}
    return (
        <>
            <div className="image-slideshow left-slideshow">
                <img src={buc1} alt="București 1" style={{ animationDelay: "0s" }} />
                <img src={buc2} alt="București 2" style={{ animationDelay: "6s" }} />
                <img src={buc3} alt="București 3" style={{ animationDelay: "12s" }} />
            </div>

            <div className="image-slideshow right-slideshow">
                <img src={buc4} alt="București 4" style={{ animationDelay: "0s" }} />
                <img src={buc5} alt="București 5" style={{ animationDelay: "6s" }} />
                <img src={buc6} alt="București 6" style={{ animationDelay: "12s" }} />
            </div>
        </>
    );
}

export default BucurestiSlideshow;

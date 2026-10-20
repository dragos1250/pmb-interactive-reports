import { useState, useRef, useEffect } from "react";
import "../styles/SesizareForm.css";
{/* Integrarea functiilor in pagine de form - charcount, previewImage */}
function SesizareForm() {
  const [charCount, setCharCount] = useState(0);
  const [previewImages, setPreviewImages] = useState([]);
  const imageInputRef = useRef();
{/* Numararea characterelor din casuta de descriere */}
  const handleDescriereChange = (e) => {
    setCharCount(e.target.value.length);
  };
{/* Preview la imaginile incarcate de catre utilizator */}
  const handleImageChange = (e) => {
  const files = Array.from(e.target.files);
  const maxFiles = 3;

  if (files.length + previewImages.length > 3) {
    alert("Poți încărca maximum 3 imagini.");
    return;
  }

  const newPreviews = files.map((file) => ({
    file,
    url: URL.createObjectURL(file),
  }));

  setPreviewImages((prev) => [...prev, ...newPreviews]);
};
{/* Functia de remove a imaginilor */}
  const removeImage = (index) => {
    setPreviewImages((prev) => prev.filter((_, i) => i !== index));
  };
{/* Efecte pentru casuta de incarcat imagini */}
  useEffect(() => {
    const handleDragOver = (e) => e.preventDefault();
    const handleDrop = (e) => e.preventDefault();

    window.addEventListener("dragover", handleDragOver);
    window.addEventListener("drop", handleDrop);

    return () => {
      window.removeEventListener("dragover", handleDragOver);
      window.removeEventListener("drop", handleDrop);
    };
  }, []);
{/* Functia de trimitere a sesizarii cu tot cu verificarile casutelor */}
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form["email"].value.trim();
    const telefon = form["telefon"].value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^0\d{9}$/;

    if (!phoneRegex.test(telefon)) {
      alert("Numărul de telefon trebuie să înceapă cu 0 și să aibă 10 cifre.");
      form["telefon"].focus();
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Te rugăm să introduci un e-mail valid.");
      form["email"].focus();
      return;
    }

    const formData = new FormData();
    formData.append("nume", form["nume"].value.trim());
    formData.append("prenume", form["prenume"].value.trim());
    formData.append("telefon", telefon);
    formData.append("email", email);
    formData.append("adresautilizator", form["adresa-utilizator"].value.trim());
    formData.append("adresaproblema", form["adresa-problema"].value.trim());
    formData.append("tipproblema", form["tipproblema"].value);
    formData.append("descriere", form["descriere"].value.trim());

    if (previewImages.length > 0) {
  if (previewImages.length > 3) {
    alert("Poți trimite maximum 3 imagini.");
    return;
  }

  previewImages.forEach(({ file }) => {
    formData.append("images", file);
  });
}

    try {
      const response = await fetch("http://localhost:5000/sesizare", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
console.log("📥 Răspuns JSON:", result);

if (result.success && result.nrInregistrare) {
  alert(`✅ Sesizarea a fost trimisă!\nNumăr de înregistrare: ${result.nrInregistrare}`);
  form.reset();
  setPreviewImages([]);
  setCharCount(0);
} else if (result.success) {
  alert("✅ Sesizarea a fost trimisă! (dar fără număr de înregistrare)");
  form.reset();
  setPreviewImages([]);
  setCharCount(0);
} else {
  alert("❌ Trimiterea a eșuat.");
}

    } catch (err) {
      console.error("❌ Eroare la trimitere:", err);
      alert("❌ Eroare la trimiterea sesizării.");
    }
  };

{/* Crearea formularului */}
  return (
    <div className="container mx-auto px-4 py-10 max-w-2xl relative z-10 mt-28 mb-24">
      <h1 className="text-3xl font-bold text-center mb-4">Trimite o sesizare</h1>
      <p className="text-center mb-8">Completează formularul de mai jos pentru a trimite o sesizare</p>
      {/* Date personale si adresa problemei */}
      <form className="space-y-6" onSubmit={handleSubmit}>
        {[
          { id: "nume", label: "Nume" },
          { id: "prenume", label: "Prenume" },
          { id: "telefon", label: "Telefon" },
          { id: "adresa-utilizator", label: "Adresa dvs." },
          { id: "email", label: "Email" },
          { id: "adresa-problema", label: "Adresa problemei" },
        ].map(({ id, label }) => (
          <div key={id} className="flex flex-col">
            <label htmlFor={id} className="font-medium mb-1">{label}</label>
            <input type="text" id={id} name={id} required className="border p-2 rounded-md" />
          </div>
        ))}
      {/* Alegerea unui tip de probleme */}
        <div className="flex flex-col">
          <label htmlFor="tipproblema" className="font-medium mb-1">Tip problemă</label>
          <select id="tipproblema" name="tipproblema" required className="border p-2 rounded-md">
            <option value="">Alege un tip de problemă</option>
            {[
              "🔧 Infrastructură urbană (Gropi în carosabil, trotuare deteriorate, construcții ilegale)",
              "🏥 Sănătate / Spitale (Acces la spitale, igienă precară, sesizări Ambulanță)",
              "🚌 Transport public (Mijloace de transport defecte, lipsă afișaje, stații degradate)",
              "🔥 Termoficare (Lipsă căldură, țevi sparte, aburi din rețea)",
              "🎭 Cultură și patrimoniu (Teatre degradate, monumente vandalizate, evenimente culturale)",
              "💡 Iluminat stradal (Lămpi nefuncționale, zone întunecate, stâlpi periculoși)",
              "🐾 Gestionarea animalelor (Câini agresivi, animale abandonate, sesizări către ASPA)",
              "🏚️ Clădiri cu risc seismic (Fațade instabile, clădiri vechi, risc de prăbușire)",
              "❓ Alt tip de problemă"
            ].map((tip, idx) => (
              <option key={idx} value={tip.toLowerCase()}>{tip}</option>
            ))}
          </select>
        </div>
      {/* Casuta de descriere */}
        <div className="flex flex-col">
          <label htmlFor="descriere" className="font-medium mb-1">Descriere problemă (max. 500 caractere)</label>
          <textarea
            id="descriere"
            name="descriere"
            maxLength="500"
            required
            onChange={handleDescriereChange}
            className="border p-2 rounded-md"
          ></textarea>
          <small>{charCount} / 500</small>
        </div>
      {/* Crearea partii de incarcare a imginilor - maxim 3 */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Încarcă până la 3 imagini</label>
          <div
            onClick={() => imageInputRef.current?.click()}
            className="image-upload-box"
          >
            {previewImages.length === 0 ? (
              <p><center>Dă click aici pentru a încărca o imagine 📷</center></p>
            ) : (
              <div className="preview-stack">
                {previewImages.map((img, index) => (
                  <div key={index} className="preview-wrapper">
                    <img src={img.url} alt={`preview-${index}`} />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeImage(index);
                      }}
                      className="remove-btn"
                      title="Șterge imagine"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
            <input
              type="file"
              ref={imageInputRef}
              hidden
              accept="image/*"
              multiple
              onChange={handleImageChange}
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#266E99] hover:bg-[#205D81] text-white px-6 py-3 rounded-full font-semibold transition"
        >
          Trimite sesizarea
        </button>
      </form>
    </div>
  );
}

export default SesizareForm;

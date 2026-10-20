const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const uploadsRoot = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadsRoot)) {
  fs.mkdirSync(uploadsRoot, { recursive: true });
}
app.use('/uploads', express.static(uploadsRoot));

// 📸 Configurare multer să salveze direct fișierele într-un folder temporar sigur
const tempStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const tempPath = path.join(uploadsRoot, 'temp');
    if (!fs.existsSync(tempPath)) {
      fs.mkdirSync(tempPath, { recursive: true });
    }
    cb(null, tempPath);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage: tempStorage });

app.post('/sesizare', upload.array('images', 3), (req, res) => {
  const {
    nume,
    prenume,
    telefon,
    email,
    adresautilizator,
    adresaproblema,
    descriere
  } = req.body;

  const tipproblema = req.body.tipproblema || req.body["tip-problema"] || "nespecificat";

  const azi = new Date();
  const dataFormatata = `${azi.getFullYear()}${String(azi.getMonth() + 1).padStart(2, '0')}${String(azi.getDate()).padStart(2, '0')}`;
  const timestamp = Date.now();
  const nrInregistrare = `PMB-${dataFormatata}-${timestamp}`;

  const folderPath = path.join(uploadsRoot, nrInregistrare);
  fs.mkdirSync(folderPath, { recursive: true });

  // 📥 Mutăm fișierele din folderul temp în cel final
  req.files.forEach((file, index) => {
    const finalPath = path.join(folderPath, `${index + 1}-${file.originalname}`);
    fs.renameSync(file.path, finalPath);
  });

  const continutTxt = `
Număr de înregistrare: ${nrInregistrare}
Nume: ${nume}
Prenume: ${prenume}
Telefon: ${telefon}
Email: ${email}
Adresă utilizator: ${adresautilizator}
Adresă problemă: ${adresaproblema}
Tip problemă: ${tipproblema}
Descriere: ${descriere}
`.trim();

  fs.writeFileSync(path.join(folderPath, 'sesizare.txt'), continutTxt, 'utf-8');

  res.json({ success: true, nrInregistrare });
});

app.listen(PORT, () => {
  console.log(`✅ Server pornit la http://localhost:${PORT}`);
});

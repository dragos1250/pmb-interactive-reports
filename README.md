<h1 align="center">🏙️ PMB Interactive Reports 🏙️</h1>

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express.js" />
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript" />
</div>

<br />

> **An interactive civic tech platform bridging the gap between citizens and local administration. Citizens report urban issues directly from the streets, while City Hall validates and maps them to ensure complete accuracy.**

## 📋 About The Project

**PMB Smart Reports** is a full-stack web application developed to digitalize and streamline the reporting of urban issues, such as potholes, broken public lighting, and illegal dumping, within Bucharest.

To maintain the integrity of the platform and prevent spam or misinformation, the application follows a strict data-flow architecture: **users do not place pins directly on the map.** Instead, citizens submit detailed reports along with photo evidence, and the City Hall administration reviews, validates, and officially maps the confirmed issues.

### ✨ Key Features

- 📝 **Intuitive Reporting Form:** A seamless interface for citizens to submit urban issues, with dynamic image uploads handled via Multer.
- 🛡️ **Admin Validation Protocol:** Ensures that the interactive map remains clean and authoritative. Only issues explicitly verified and approved by the local administration are rendered.
- 🗺️ **Interactive Civic Map:** Dynamic rendering of custom-categorized pins, such as public transport, lighting, and ASPA, giving the community a transparent view of acknowledged urban issues.
- 🤝 **Agile & Pair Programming:** Co-developed in a collaborative environment using Agile methodologies and pair-programming practices.

## 🛠️ Technical Stack

- **Frontend:** React.js, JavaScript (ES6+), HTML5, CSS3
- **Backend:** Node.js, Express.js, Multer (File Handling)
- **Map Integration:** Leaflet.js / React-Leaflet
- **Development Methodology:** Agile, Pair Programming

## 🗂️ Project Structure

```text
📂 pmb-smart-reports
├── 📂 public
│   └── 📂 icoane-harta         # Custom map markers for different PMB issue categories
├── 📂 server                   # Node.js + Express Backend Environment
│   ├── 📄 index.js             # API endpoints & Multer upload logic
│   └── 📂 uploads              # Local storage for citizen-submitted images
├── 📂 src                      # React Frontend Environment
│   ├── 📂 assets               # Static assets & banners
│   ├── 📂 components           # Modular UI components
│   │   ├── 📄 Harta.jsx              # Map rendering logic and pin placement
│   │   ├── 📄 SesizareForm.jsx       # Citizen reporting form
│   │   ├── 📄 BucurestiSlideShow.jsx # Dynamic UI slideshow
│   │   └── 📄 ...                    # Navbar, Footer, MobileApps, etc.
│   ├── 📂 styles               # Component-specific CSS styling
│   ├── 📄 App.jsx              # Main React application
│   └── 📄 main.jsx             # React DOM root
├── 📄 package.json             # Frontend dependencies and scripts
└── 📄 README.md                # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and npm installed locally.

### Installation & Execution

#### 1. Clone the Repository

```bash
git clone https://github.com/dragos1250/pmb-smart-reports.git
cd pmb-smart-reports
```

#### 2. Start the Backend Server (Port 5000)

Open a terminal in the project root and run:

```bash
cd server
npm install
node index.js
```

The backend server should now be running on port `5000`, assuming that the server is configured to use this port.

#### 3. Start the Frontend Client (Vite)

Open a **new terminal** in the project root directory and run:

```bash
npm install
npm run dev
```

Follow the local URL displayed by Vite in your terminal to open the application in your browser.

## 👨‍💻 Development Context

This project was built as part of a Software Engineering evaluation. My primary focus and contributions during pair-programming sessions included:

- Architecting the Node.js/Express backend and implementing the Multer middleware for handling `multipart/form-data` image uploads.
- Developing the interactive `Harta.jsx` and the controlled `SesizareForm.jsx` React components.

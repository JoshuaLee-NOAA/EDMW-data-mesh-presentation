# An Architectural Approach to Cross-Domain Data Interoperability at NOAA Fisheries

**Georgetown University Capstone Project**  
Presented at the **NOAA Enterprise Data Management Workshop 2026**

---

## 📌 Abstract

NOAA Fisheries manages the nation's living marine resources through regulatory decisions that depend on analytical data produced across a highly federated organizational structure of Regional Fishery Management Councils, regional offices, and science centers. 

This interactive presentation explores how **Data Mesh** architectural patterns can be applied to highly federated organizations to resolve the inherent structural tensions between regional autonomy and enterprise-wide integration mandates. Using the Commercial Fishing Electronic Monitoring (EM) data product as a running case study, it outlines a concrete reference architecture leveraging Google Cloud Platform (GCP) to implement domain ownership, data as a product, self-serve infrastructure, and federated computational governance.

---

## 🚀 Interactive Presentation Deck

This repository does not contain a standard PowerPoint or PDF file. Instead, this presentation is built as a **fully interactive, mobile-responsive web application** using **React, Next.js (App Router), Tailwind CSS, and Framer Motion**.

The deck features custom CSS and SVG-based diagrams that are computationally rendered directly in the DOM, ensuring perfect clarity, responsiveness, and seamless integration with the NOAA Fisheries design system.

### Key Features
- **Mobile-First**: Fully responsive split columns and feature grids that gracefully stack on mobile devices.
- **Swipe Gestures**: Built-in support for smartphone touch swiping to navigate slides.
- **Custom React Diagrams**: Complex concepts (like Mandate Intersections, EM Architecture, and GCP Resource Hierarchies) are rendered natively as interactive React components.
- **Keyboard Shortcuts**: Arrow keys (`←` / `→` / `Space`), `Home`, and `End` support for seamless presenting.

---

## 🛠️ Local Development

To run this presentation locally on your own machine:

```bash
# 1. Clone the repository
git clone https://github.com/JoshuaLee-NOAA/EDMW-data-mesh-presentation.git
cd EDMW-data-mesh-presentation

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the presentation.

---

## 🌐 Deployment

This presentation is configured for automatic deployment to **GitHub Pages** via GitHub Actions.

Any push to the `main` branch will trigger a Next.js static export (`npm run build`) and securely deploy the `out` directory to your GitHub Pages URL: `https://JoshuaLee-NOAA.github.io/EDMW-data-mesh-presentation/`.

---

## 📚 Acknowledgements

This architecture and presentation are adapted from a research paper developed at **Georgetown University**. The foundational frameworks for this research were highly influenced by concepts explored in:
- *MTPM 5750-1 (Enterprise Modernization)*
- *MTPM/MPIT 6656-01 (Cloud Computing & Virtual Data)*
- Instructor: Matthew Briggs

*Disclaimer: The views and insights expressed in this presentation are my own and do not necessarily represent the official opinions, positions, or policies of NOAA Fisheries or any associated entities.*

# 3D Portfolio Website — Sujal Pokale

This repository contains the source code for the personal 3D portfolio website of **Sujal Pokale**, a Data Scientist and Full Stack Developer. The portfolio is built using React, TypeScript, Three.js, React Three Fiber, and GSAP. It features interactive 3D elements, smooth animations, and a responsive showcase of projects, career history, and skillset.
 
LinkedIn: [linkedin.com/in/sujal-pokale-779074277](https://www.linkedin.com/in/sujal-pokale-779074277/)  
Live Site: [profile.sujalpokale.engineer](https://profile.sujalpokale.engineer/)

## Table of Contents

- [About Me](#about-me)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Work / Projects](#work--projects)
- [Career & Experience](#career--experience)
- [Education](#education)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [GSAP License Note](#gsap-license-note)
- [Troubleshooting](#troubleshooting)
- [Deployment](#deployment)
- [License](#license)

## About Me

I am a passionate Data Scientist and Full Stack Developer expected to graduate in June 2026. With a strong foundation in Machine Learning, GenAI, and Web Technologies, I specialize in building end-to-end AI applications, optimizing database systems, and developing smart automated solutions. My experience ranges from engineering scalable backend architectures to training complex ML models and fine-tuning LLMs.

## Key Features

- **Interactive 3D Elements**: Powered by React Three Fiber, Three.js, and physics-based colliders via `@react-three/rapier` for a dynamic developer experience.
- **GSAP-powered Animations**: Smooth transitions, custom cursor movements, and scroll-driven visual effects.
- **Project Showcase**: A carousel interface showcasing real-world projects with their target category and tools utilized.
- **Detailed Career Timeline**: Clean, interactive timeline highlighting professional growth and internships.
- **Direct Messaging Form**: Fully integrated messaging form for direct connection.

## Tech Stack

### Core
- React 18
- TypeScript
- Vite
- HTML5 / CSS3 / JavaScript

### Animation and 3D
- GSAP + `@gsap/react`
- Three.js
- `@react-three/fiber`
- `@react-three/drei`
- `@react-three/postprocessing`
- `@react-three/rapier`
- `@react-three/cannon`

### Supporting Libraries
- `react-icons`
- `react-fast-marquee`
- `@vercel/analytics`

## Work / Projects

Here are some of the key projects featured in the portfolio:

1. **Lumina AI**
   - **Category**: Smart Data Analyst Dashboard.
   - **Tools & Features**: Next.js, TypeScript, Recharts, OpenRouter API.
   - **Link**: [GitHub Repository](https://github.com/sujalpokale)

2. **AlpaCare**
   - **Category**: Medical LLM Fine-Tuning.
   - **Tools & Features**: Python, HuggingFace, LoRA/PEFT, Mistral-7B, Gradio, Google Colab.
   - **Link**: [GitHub Repository](https://github.com/sujalpokale)

3. **Invoice Automation**
   - **Category**: Multi-Vendor Consumption Tracking & Invoice Platform.
   - **Tools & Features**: Laravel, MySQL, PHP, PDF Generation.
   - **Link**: [GitHub Repository](https://github.com/sujalpokale)

4. **Smart Attendance Tracker**
   - **Category**: Face Recognition System.
   - **Tools & Features**: Python, Flask, OpenCV, face_recognition, SQLite.
   - **Link**: [GitHub Repository](https://github.com/sujalpokale)

## Career & Experience

- **Backend Developer Intern** | Easy2IT Techno Solutions LLP (2025–26)
  - Designed normalized SQL schemas and optimized queries for high-volume transactional data.
  - Built automated reporting and invoice pipelines with PDF generation.
  - Managed multi-vendor database architecture ensuring data integrity and role-based access control.
- **Data Scientist Intern** | VOIS (Vodafone Intelligent Solutions) (2025)
  - Built conversational data analysis pipelines using LLMs to automate business insight extraction.
  - Cleaned large telecom datasets and surfaced actionable KPIs.
  - Trained ML models using Python, Pandas, and Scikit-learn.
- **Frontend Developer Intern** | ApexPlanet Software Pvt Ltd (2025)
  - Developed responsive web interfaces using HTML, CSS, and JavaScript.
  - Implemented mobile-first design best practices.
- **Data Scientist Intern** | Codec Technologies (2025)
  - Preprocessed data, performed feature engineering, and built predictive models using Scikit-learn, Pandas, and NumPy.
- **Data Analyst Intern** | CodSoft (2024)
  - Collected, cleaned, and analyzed data using Python and Excel.
  - Built visual dashboards and conducted Exploratory Data Analysis (EDA).

## Education

- **B.Tech in Data Science** | G H Raisoni College of Engineering and Management (2022–Present)
- **HSC (12th Grade)** | Saraswati Uchcha Madhyamik Vidyalaya Junior College (2020–2022)

## Project Structure

```text
.
├── public/                    # Static assets & Resume.pdf
├── src/
│   ├── assets/                # Local media/assets
│   ├── components/
│   │   ├── Character/         # 3D scene + character logic/utilities
│   │   ├── styles/            # Section/component CSS files
│   │   ├── utils/             # Helper utilities
│   │   ├── About.tsx
│   │   ├── Career.tsx
│   │   ├── Contact.tsx
│   │   ├── Landing.tsx
│   │   ├── MainContainer.tsx  # Main page composition
│   │   ├── Navbar.tsx
│   │   ├── TechStack.tsx
│   │   ├── WhatIDo.tsx
│   │   └── Work.tsx
│   ├── context/               # Global providers (loading state, etc.)
│   ├── data/                  # Static data/content definitions
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm 9+ (or compatible)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sujalpokale/sujal-portfolio.git
   cd sujal-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open the development URL (typically `http://localhost:5173`) in your browser.

## Available Scripts

- `npm run dev` — Starts Vite dev server.
- `npm run build` — Type-checks and builds a production bundle.
- `npm run preview` — Serves the production build locally.
- `npm run lint` — Runs ESLint checks.

## GSAP License Note

This project uses the standard `gsap` package, including bonus plugins now available in the core package.

- Install dependencies with `npm install`.
- If migrating from older setups, remove `gsap-trial` from your project.

Read official installation guidance here: [GSAP Installation Docs](https://gsap.com/docs/v3/Installation/)

## Troubleshooting

- **Blank screen in development**  
  Check browser console for module import errors and verify all dependencies are installed.

- **3D performance issues on low-end devices**  
  Reduce scene complexity and post-processing effects in the character/scene utilities.

- **GSAP plugin errors**  
  Ensure you have the correct plugin package and license configuration for your target environment.

- **TypeScript build failures**  
  Run `npm run build` and address reported type errors before deploying.

## Deployment

1. Create a production build:
   ```bash
   npm run build
   ```
2. Deploy the generated `dist/` folder to your hosting provider of choice (Vercel, Netlify, Cloudflare Pages, etc.).

## License

This project is open-source and available under the [MIT License](LICENSE).

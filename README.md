# Saini Amitkumar — Portfolio
Live: [https://portfolio-mu-eosin-63.vercel.app/](https://portfolio-mu-eosin-63.vercel.app/)

A personal portfolio website showcasing my projects, technical skills, experience, and certificates. Built with React and Vite, it features a responsive layout, light and dark themes, and an EmailJS-powered contact form.

## About me

I’m a BCA student and aspiring full-stack developer interested in building useful, reliable web applications. I work with React, Node.js, and Python, and I’m currently looking for full-stack development internship opportunities.

## What’s included

- Responsive portfolio layout with sections for About, Skills, Experience, Projects, Certificates, and Contact
- Light and dark themes that follow your system preference and remember your selection
- Project cards linking to live applications
- Certificate gallery
- Contact form powered by EmailJS
- Accessible navigation and support for reduced motion

## Featured projects

| Project | Description | Link |
| --- | --- | --- |
| **PaisaTrack** | A personal finance and transaction tracking application. | [Visit PaisaTrack](https://paisa-track-sigma.vercel.app/) |
| **InternShield** | A student-focused platform for assessing companies and internship offers. | [Visit InternShield](https://intern-shield-five.vercel.app/) |
| **MedBuddy** | A health and safety companion with first-aid guidance and medicine alerts. | [Visit MedBuddy](https://meddbuddy.github.io/MedBuddy/) |

## Tech stack

- **UI:** React, JavaScript, CSS
- **Build tool:** Vite
- **Icons:** Lucide React
- **Configured styling tools:** Tailwind CSS and PostCSS

## Run locally

### Prerequisites

- Node.js (version supported by the installed Vite release)
- npm

### Setup

The application is in the `forntend/` directory:

```bash
cd forntend
npm install
npm run dev
```

Open the local URL printed by Vite in your terminal.

### Configure the contact form

The contact form includes the project's EmailJS service ID, template ID, and public key as frontend defaults, so static deployments work without separate environment configuration. Vite does not load `.env.example`; to override the defaults locally, copy it to `forntend/.env.local` and restart the development server. In your EmailJS template, use the form field names `name`, `email`, `subject`, and `message`.

## Available scripts

Run these commands from `forntend/`:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint. |

## Build for production

```bash
cd forntend
npm install
npm run build
```

The generated site is written to `forntend/dist/`. Deploy that directory using a static hosting provider such as Vercel, Netlify, or GitHub Pages.

## Repository structure

```text
.
├── README.md
└── forntend/
    ├── public/                 # Public images, icons, and certificates
    ├── src/
    │   ├── components/         # Portfolio sections and UI components
    │   ├── assets/             # Bundled frontend assets
    │   ├── App.jsx
    │   └── main.jsx
    ├── index.html
    └── package.json
```

## Contact

- **Email:** [sainiamitkumar285@gmail.com](mailto:sainiamitkumar285@gmail.com)
- **GitHub:** [CodeCrafter021](https://github.com/CodeCrafter021)
- **LinkedIn:** [Saini Amitkumar](https://linkedin.com/in/saini-amitkumar-8a3479380)

---

© Saini Amitkumar

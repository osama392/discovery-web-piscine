# Osama Al-Sa'odi — Personal Portfolio
### Discovery Web Piscine — Exercise 00: Personal Portfolio

An authentic, clean, and responsive personal portfolio website built entirely from scratch using pure HTML5, CSS3, and JavaScript ES6+ without frameworks, templates, or UI libraries.

---

## 📌 Portfolio Sections

| Section | Description |
|---|---|
| **Header / Navbar** | Clean navigation bar with responsive toggle and theme switcher button |
| **Hero Section** | Introduction, focus areas (Cybersecurity, SOC Analysis, Development), and quick contact |
| **About Me** | Profile photo, professional summary, and academic background (TTU B.Sc. Honors & Erasmus+ Czech Republic) |
| **Experience** | Practical internships and research at Green Circle (SOC), NCSC Jordan, and Tafila Technical University |
| **Skills Grid** | Focused competency grid (SecOps, Tooling/Dev, Scripting/Languages, AI/ML Security) |
| **Projects Showcase** | Senior Capstone (VisionVoice Security), academic research projects, and Interactive Web Applications |
| **Certifications** | Industry certifications (Cisco Junior Cyber Analyst, CompTIA Security+, YGA U.S. Embassy, etc.) |
| **Volunteering** | Community initiatives and leadership (Founder of IPOS, IEEE PR Officer, Erasmus+ HERE student expert) |
| **Hobbies** | Personal interests (traveling across 17 countries, photography, tech reading, gaming) |
| **Contact Form** | Accessible direct contact form with client-side JavaScript validation |
| **Footer** | Clean copyright, tech stack notes, and navigation links |

---

## ⚡ Mandatory JavaScript Feature: Complete Event Lifecycle

The interactive theme switcher (`#themeToggle`) demonstrates the browser's complete 4-stage event lifecycle:

```
[1. User Action]
       │  (The user clicks the theme toggle button: <button id="themeToggle">)
       ▼
[2. Event Firing]
       │  (The browser's event dispatcher detects the click and dispatches a 'click' MouseEvent on the DOM element)
       ▼
[3. JavaScript Callback]
       │  (The registered callback function attached via addEventListener('click', ...) is pulled from the queue and executed)
       ▼
[4. DOM / CSS Mutation]
          - document.body.classList.toggle('dark-mode') mutates the DOM tree
          - CSS Custom Properties (--bg, --text, --card-bg, etc.) recalculate immediately
          - Button text (#themeLabel) and icon (#themeIcon) mutate dynamically via textContent and innerHTML
```

---

## 🛠️ Authorized Technologies

- **HTML5:** Semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- **CSS3:** CSS Custom Properties (variables), Flexbox, CSS Grid, media queries for mobile responsiveness
- **JavaScript ES6+:** DOM manipulation, event handling, form validation (`preventDefault`)
- **No Frameworks:** No Bootstrap, Tailwind, jQuery, or external libraries. Every line of code is handcrafted.

---

## 📁 File Structure

```
ex00/
├── index.html      # Semantic HTML5 markup
├── style.css       # Clean, lightweight CSS styling (default Dark Mode)
├── script.js       # Pure JS event handling (theme toggle, nav menu, contact form)
├── assets/
│   └── profile.jpeg # Profile photograph
└── README.md       # Project specifications, documentation & event lifecycle
```

---

## 🚀 How to Run Locally

```bash
# Clone the repository
git clone git@github.com:osama392/discovery-web-piscine.git

# Navigate to the exercise directory
cd discovery-web-piscine/ex00

# Open in browser (Windows)
start index.html
```

---

## ✍️ Author

**Osama Al-Sa'odi**  
- **Email:** issam.saodi@gmail.com  
- **Phone:** +962 770 441 541  
- **Location:** Amman, Jordan  
- **GitHub:** [@osama392](https://github.com/osama392)  
- **LinkedIn:** [osama-al-sa-odi](https://www.linkedin.com/in/osama-al-sa-odi-415a161b0/)
- **Go live:** (https://osama392.github.io/discovery-web-piscine/project04/ex00/index.html)

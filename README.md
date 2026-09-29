# The Oberoi Hotels & Resorts — Luxury Web Experience

<div align="center">

![The Oberoi Hotels & Resorts Logo](https://raw.githubusercontent.com/sudheer3883/OBEROIHOTELS/main/src/assets/img/logo1.png)

### *Heart. Felt. Luxury Across the World.*

An authentic, pixel-perfect frontend recreation of the official [The Oberoi Hotels & Resorts](https://www.oberoihotels.com/) website. Built with React 19, Vite, and custom luxury design systems to deliver world-renowned hospitality in digital form.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)](https://oberoihotels-pink.vercel.app/)
[![React](https://img.shields.io/badge/React%2019-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap%205-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![License](https://img.shields.io/badge/License-MIT-gold?style=for-the-badge)](LICENSE)

---

### 🌐 **Live Website Link**
👉 **[https://oberoihotels-pink.vercel.app/](https://oberoihotels-pink.vercel.app/)** 👈

</div>

---

## 📖 Overview

This project faithfully replicates the user interface, brand aesthetics, and interactive booking flows of **The Oberoi Hotels & Resorts** (voted the #1 Best Hotel Group in the World by Telegraph Travel Awards UK). 

Every component is crafted with attention to luxury design guidelines, including **Cormorant Garamond** editorial serif typography, **Oberoi Gold (`#bfa15f`)** accents, responsive media sliders, and rich guest interactions.

---

## ✨ Key Features & Interactive Flows

### 1. 🏨 Official Slide-Down Booking Engine Bar
- **Attached Dropdown Bar**: Toggled via the header's **BOOK** button, mirroring the live site (`openBookingEngineRevNew()`).
- **Country Groupings**: Select properties across **India**, **Egypt**, **Indonesia**, **Mauritius**, **Morocco**, and **Saudi Arabia**.
- **Interactive Rate Engine**: Computes real-time room tiers upon checking rates:
  - *Premier Room with Private Terrace*
  - *Luxury Suite with Monument / Lake View*
  - *Kohinoor Royal Presidential Suite with Dedicated Butler*
- **Oberoi One 15% Member Savings**: Automatically calculated and displayed with net rates.
- **Reservation Confirmation**: Generates a branded reference code (`OBR-2026-XXXXXX`) with immediate guest feedback.

### 2. 👑 Authentic Oberoi One Member Popover
- Floating guest recognition popover directly anchored beneath **Login/Join Now** on the top navigation bar.
- Dedicated flows for:
  - **Member Sign In** (with remember me and password recovery).
  - **Join Oberoi One** (seamless membership activation).
  - **Partner Login** (direct integration link for corporate & travel partners).

### 3. 🎬 Hero Video Experience with Audio Toggle
- Full-screen high-definition video looping showcasing Oberoi's flagship palatial resorts.
- Dynamic sound toggle (**Mute / Sound On**) with live wave indicator.
- Docked floating booking control widget for desktop and mobile reservations.

### 4. 🔍 Instant Live Autocomplete Search
- Real-time search across 25+ curated items:
  - 15 Oberoi luxury hotels and palaces
  - 7 fine dining restaurants & bars
  - Holistic Ayurvedic spa therapies
  - Bespoke curated cultural experiences
  - Special offers & suites
- Instant thumbnail preview and one-click navigation.
- Popular and recent search chips.

### 5. 🍽️ Signature Dining & Table Reservations
- Showcases award-winning restaurants: *Mewar by Vineet* (Udaipur), *Madam Chow* (Gurgaon), *Lord Vesper*, *Dhilli* (New Delhi), *Eau Bar* (Mumbai), *Wabi Sabi* (Bengaluru), and *Rivayat* (Marrakech).
- Interactive **Reserve Table** modal with date, meal slot (Lunch/Dinner), guest count, and dietary options.

### 6. 🌿 Oberoi Spa & Wellness
- Highlights holistic Ayurvedic therapies, signature Eastern/Western massages, sensory sound healing, and yoga pavilions.

### 7. 🌄 Curated Experiences
- Interactive carousel for rare journeys: Forest Bathing in Siswan Forest, Dine Under the Stars overlooking the Taj Mahal, Himalayan Mountain Biking, and Red Sea Scuba Diving.
- Direct **RESERVE** actions on every card.

### 8. 💍 Meetings, Weddings & Celebrations
- Imperial ballrooms, private lakefront lawns, and royal courtyards.
- Interactive **Request a Proposal** modal generating bespoke inquiry tickets (`EVT-2026-XXXX`).

### 9. 💬 24/7 Live Oberoi Concierge Assistant
- Floating chat widget (*"How may I help you?"*).
- Conversational concierge responding to inquiries about room availability, dining reservations, member discounts, and event planning.

### 10. 📱 Offcanvas Luxury Drawer Navigation
- Comprehensive side drawer with search filter.
- Tabs for **Oberoi Hotels & Resorts** and the **Mandarin Oriental Global Alliance**.
- Complete country-wise directory and social media links.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Framework** | [React 19](https://react.dev/) + [Vite](https://vitejs.dev/) |
| **Routing** | [React Router DOM v7](https://reactrouter.com/) |
| **Styling** | Vanilla CSS3 (Custom Luxury Design Tokens) + [Bootstrap 5](https://getbootstrap.com/) |
| **Carousels & Sliders** | [@splidejs/react-splide](https://splidejs.com/) |
| **Icons** | [FontAwesome 6](https://fontawesome.com/) + SVG vector assets |
| **Typography** | Cormorant Garamond, Montserrat (Google Fonts) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 📂 Project Directory Structure

```text
hotelwebsite/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   └── img/           # WebP high-res imagery & video assets
│   ├── components/
│   │   ├── HomeComp/
│   │   │   ├── Events.jsx         # Meetings & Celebrations slider
│   │   │   ├── Experience.jsx     # Curated experiences slider
│   │   │   └── Offer.jsx          # Special member offers
│   │   ├── DestinationSl.jsx      # Filterable destination carousel
│   │   ├── Dining.jsx             # Signature dining & table reservations
│   │   ├── Footer.jsx             # Luxury multi-column footer & accordion
│   │   ├── Navbar1.jsx            # Top bar with Oberoi One popover
│   │   ├── Navbar2.jsx            # Main navbar & slide-down booking engine
│   │   ├── ScrollToTop.jsx        # Smooth scroll restoration
│   │   ├── Video.jsx              # Hero video banner & docked booking bar
│   │   └── Wellness.jsx           # Spa & Ayurvedic wellness carousel
│   ├── pages/
│   │   ├── AwardsPage.jsx         # Awards & global accolades
│   │   ├── ContactPage.jsx        # 24/7 Global reservations & helplines
│   │   ├── DestinationsPage.jsx   # Worldwide properties directory
│   │   ├── DiningPage.jsx         # Fine dining restaurants & lounges
│   │   ├── EventsPage.jsx         # Weddings, summits & venues
│   │   ├── ExperiencesPage.jsx    # Curated guest curiosities
│   │   ├── OffersPage.jsx         # Exclusive seasonal promotions
│   │   └── WellnessPage.jsx       # Holistic spa therapies
│   ├── App.jsx            # Global state, routing & interactive modals
│   ├── Home.jsx           # Main landing page layout
│   ├── index.css          # Core design system & luxury typography
│   └── main.jsx           # Application entry point
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started Locally

Follow these simple steps to run the project on your machine:

### 1. Clone the Repository
```bash
git clone https://github.com/sudheer3883/OBEROIHOTELS.git
cd OBEROIHOTELS
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Build for Production
```bash
npm run build
```

---

## 🌐 Live Demo & Deployment

This project is deployed live on **Vercel**:

🔗 **[https://oberoihotels-pink.vercel.app/](https://oberoihotels-pink.vercel.app/)**

To deploy your own copy on Vercel:
1. Push your repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com/).
3. Framework preset: **Vite**.
4. Build command: `npm run build`, Output directory: `dist`.
5. Click **Deploy**.

---

## 🎨 Color Palette & Typography

- **Oberoi Royal Navy**: `#171a2e`
- **Oberoi Gold**: `#bfa15f`
- **Oberoi Gold Dark**: `#9c8044`
- **Oberoi Light Gold**: `#f5eedf`
- **Oberoi Off-White**: `#f8f6f2`
- **Editorial Headings**: `'Cormorant Garamond', Georgia, serif`
- **Body & UI**: `'Montserrat', sans-serif`

---

## 👤 Author & Credits

- **Developer**: [Sudheer Kumar](https://github.com/sudheer3883)
- **GitHub Repository**: [sudheer3883/OBEROIHOTELS](https://github.com/sudheer3883/OBEROIHOTELS)
- **Live Demo**: [https://oberoihotels-pink.vercel.app/](https://oberoihotels-pink.vercel.app/)
- **Brand Reference**: Inspired by [The Oberoi Hotels & Resorts](https://www.oberoihotels.com/) for educational and portfolio demonstration.

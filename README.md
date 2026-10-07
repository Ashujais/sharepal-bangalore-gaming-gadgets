# SharePal Bangalore — Gaming Gadgets on Rent

A high-fidelity, pixel-accurate reproduction of the [SharePal Bangalore Gaming Gadgets Rental](https://sharepal.in/bangalore/gaming-gadgets-on-rent) web application, powered by React 18, TypeScript, Tailwind CSS, and Vite.

## 🚀 Live Demo & Repository

- **Live Deployed URL**: [https://ashujais.github.io/sharepal-bangalore-gaming-gadgets/bangalore/gaming-gadgets-on-rent](https://ashujais.github.io/sharepal-bangalore-gaming-gadgets/bangalore/gaming-gadgets-on-rent)
- **Direct Route**: Supports direct landing and refreshing on `/bangalore/gaming-gadgets-on-rent`
- **GitHub Repository**: [https://github.com/Ashujais/sharepal-bangalore-gaming-gadgets](https://github.com/Ashujais/sharepal-bangalore-gaming-gadgets)

---

## 🎮 Project Overview

This application faithfully recreates the official SharePal Bangalore gaming console and gadget rental experience. The project was constructed by thoroughly reverse-engineering the reference page's CSS design tokens, typography, visual hierarchy, responsive layout, interactive components, and business rules.

All 23 products from `product-list.json` are dynamically loaded, rendered, and supported across all filtering, sorting, search, and rental cart workflows.

---

## ✨ Key Features & Experience

### 1. Header & Navigation System
- **Brand Identity**: Authentic SharePal SVG vector mark with purple accent dot.
- **Location Selector**: Header pill and interactive modal supporting Bangalore, Mumbai, Delhi-NCR, Hyderabad, and Pune.
- **Rental Date Selector**: Quick date range selector with automatic rental day calculation.
- **Live Search**: Instant keyword search for gaming consoles, controllers, games, and VR headsets.
- **Cart Badge**: Real-time cart counter reflecting item additions and quantity changes.
- **Sticky Category Bar**: Sub-navigation with active indicator highlight on "Gaming".

### 2. Hero & Value Proposition
- **Bangalore Banner**: Curated banner with "Gaming Consoles on Rent in Bangalore" headline.
- **Trust Badges**: Free doorstep delivery, pay on delivery, and 100% sanitized equipment indicators.

### 3. Product Catalog (All 23 Products)
- **Data-Driven Architecture**: Fully rendered from `product-list.json` with strict TypeScript typings.
- **Badge Engine**: Dynamic tags (`Trending`, `Vote to Launch`, `New`) mapped to SharePal design system.
- **Card Metrics**:
  - Star ratings with numerical scores (e.g. `★ 4.8`).
  - Flame popularity badge showing verified booking count (e.g. `🔥 649+ booked`).
  - Rental price formatted in Indian currency format (`₹.../day`) with `Incl. of GST` indicator.
  - "Lowest Price Guarantee" badge on consoles.
- **Availability & Out of Stock**:
  - Active items show direct "Rent Now" and quantity selector controls (`- 1 +`).
  - Unavailable products display an "Out of Stock" overlay, muted action buttons, and "Add to Wishlist" CTAs.
  - Dedicated "Currently Unavailable" section separating out-of-stock items.

### 4. Search, Filters & Sorting
- **Interactive Search**: Filters products in real time across titles and tags (e.g., `PS5`, `FC25`, `God of War`, `Xbox`, `VR`).
- **Tag Filter Chips**: Quick filtering by All, Consoles, Games, VR, and Controllers.
- **In-Stock Toggle**: Filter only readily available inventory.
- **Multi-Parameter Sorting**:
  - Popularity (Most Booked First)
  - Price: Low to High
  - Price: High to Low
  - Customer Rating (High to Low)

### 5. Interactive Modals & Drawers
- **Product Detail Modal**: Full specification sheet, security deposit notes, what's included in the box, and rental tenure controls.
- **Sliding Cart Drawer**:
  - Live item list with thumbnail, per-day rate, and tenure calculation.
  - Interactive quantity adjusters.
  - Clear order summary breakdown (Subtotal, Refundable Deposit, Total).
  - Free doorstep delivery notice.
- **City Selector Modal**: Quick location switcher.
- **Date Picker Modal**: Select rental start and end dates with day count updates.

### 6. Social Proof, FAQs & SEO Sections
- **Impact Metrics**: SharePal impact numbers (₹250Cr+ Value Shared, 4.5M+ kg CO2 Saved, 100K+ Happy Renters).
- **Customer Reviews**: Verified customer testimonial cards.
- **FAQ Accordion**: 5 expandable, real-world questions covering delivery, security deposit, KYC, and console setup.
- **SEO Rental Guide**: In-depth expandable rental guide for gaming enthusiasts in Bangalore.

### 7. Footer & Floating Elements
- **Comprehensive Directory**: Category links, city hubs, policy pages, and social media handles.
- **Floating Date Pill**: Sticky bottom control on mobile viewports.
- **Floating WhatsApp Help**: Direct WhatsApp support launcher.

---

## 🛠️ Tech Stack & Design System

- **Framework**: React 18 + TypeScript
- **Bundler**: Vite 5
- **Styling**: Tailwind CSS + Custom CSS Variables
- **Icons**: Lucide React + Native SharePal SVG assets
- **Routing**: React Router v6 with SPA direct route handling
- **Typography**: Ubuntu (headings & brand) + Inter (body & UI)
- **Brand Colors**:
  - Brand Purple: `#4C187C`
  - Accent Bright Purple: `#8A2BE2`
  - Action Blue: `#1945E8`
  - Electric Green: `#9EFF00`
  - Dark Navy Text: `#030D31`
  - Muted Slate: `#6B7280`

---

## 📦 Project Structure

```
SharePal_Software/
├── public/
│   ├── 404.html               # SPA routing fallback for direct URL visits
│   ├── favicon.svg            # SharePal favicon mark
│   └── icons.svg
├── src/
│   ├── assets/                # Brand SVGs and logos
│   ├── components/
│   │   ├── CartDrawer.tsx     # Slide-over rental cart
│   │   ├── CategoryBar.tsx    # Category navigation bar
│   │   ├── CityModal.tsx      # City selection modal
│   │   ├── DatePickerModal.tsx# Date range picker modal
│   │   ├── FAQSection.tsx     # Accordion FAQ section
│   │   ├── FloatingControls.tsx # Sticky bottom date & WhatsApp pills
│   │   ├── Footer.tsx         # Comprehensive SharePal footer
│   │   ├── Header.tsx         # Sticky header with Bangalore selector
│   │   ├── HeroBanner.tsx     # Bangalore gaming consoles banner
│   │   ├── ProductCard.tsx    # Reusable product card
│   │   ├── ProductDetailModal.tsx # Full product detail preview
│   │   ├── ProductGrid.tsx    # Listing, filters, search, sorting
│   │   ├── SearchModal.tsx    # Mobile & quick search overlay
│   │   ├── SEOContent.tsx     # Expandable SEO guide
│   │   ├── SharePalLogo.tsx   # Pixel-accurate SVG logo
│   │   └── SocialProof.tsx    # Reviews & impact counters
│   ├── context/
│   │   └── CartContext.tsx    # Cart state & rental calculations
│   ├── data/
│   │   ├── product-list.json  # 23 authentic SharePal products
│   │   └── products.ts        # Typed interface and product export
│   ├── pages/
│   │   └── GamingGadgetsPage.tsx # Master Bangalore Gaming Gadgets page
│   ├── App.tsx                # Route configuration
│   └── main.tsx               # App entrypoint
├── product-list.json          # Root product specification file
├── tailwind.config.js         # Custom theme colors and fonts
├── vite.config.ts             # Vite build configuration
└── vercel.json                # Vercel SPA routing rewrite rules
```

---

## 💻 Local Development Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Ashujais/sharepal-bangalore-gaming-gadgets.git
   cd sharepal-bangalore-gaming-gadgets
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173/bangalore/gaming-gadgets-on-rent](http://localhost:5173/bangalore/gaming-gadgets-on-rent) in your browser.

4. **Production Build:**
   ```bash
   npm run build
   npm run preview
   ```

# NVRR Developers Website

Premium corporate website for **NVRR Developers Pvt Ltd** — a real estate developer building integrated smart townships across India.

## Tech Stack

- Next.js 15 (App Router)
- React 19 + TypeScript
- Tailwind CSS
- Framer Motion
- Lenis Smooth Scroll
- SwiperJS
- React Hook Form + Zod
- Lucide Icons
- React CountUp

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/
│   ├── animations/   # Framer Motion wrappers
│   ├── layout/       # Navbar, Footer, MainLayout
│   ├── sections/     # Homepage & reusable sections
│   └── ui/           # Buttons, counters, forms
├── config/           # Site configuration
├── data/             # Content & static data
├── lib/              # Utilities & SEO helpers
├── providers/        # Theme & smooth scroll
└── types/            # TypeScript interfaces
```

## Pages

- Home, About, Vision & Mission, Chairman's Message
- Projects, Land Bank, Townships, Future Developments, Amenities
- Locations, CSR, Gallery, News, Careers
- Investor Relations, Contact
- Privacy Policy, Terms

## Environment Variables

Create `.env.local` for production:

```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key_here
```

## License

Proprietary — NVRR Developers Pvt Ltd

# Premium Engraving Service

A modern, professional e-commerce website for online engraving services built with Next.js, React, TypeScript, and Stripe payment integration.

## Features

- **Product Catalog**: Browse products across multiple categories (Jewelry, Awards, Gifts, Corporate Items)
- **Shopping Cart**: Add products to cart with real-time updates
- **Stripe Integration**: Secure payment processing with Stripe Checkout
- **Responsive Design**: Mobile-first design that works on all devices
- **How It Works**: 6-step process guide for customers
- **About Page**: Company information and team
- **Contact Form**: Customer inquiry form
- **Modern UI**: Clean, professional design with smooth animations

## Tech Stack

- **Framework**: Next.js 14+
- **Language**: TypeScript
- **Styling**: CSS3 with CSS Variables
- **Payment**: Stripe
- **State Management**: sessionStorage (can upgrade to Zustand for production)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Stripe account (https://stripe.com)

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file with your Stripe keys:
```
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_YOUR_PUBLIC_KEY
STRIPE_SECRET_KEY=sk_test_YOUR_SECRET_KEY
```

4. Run the development server:
```bash
npm run dev
```

5. Open http://localhost:3000 in your browser

## Project Structure

```
app/
├── components/          # Reusable components
│   ├── Navigation.tsx
│   ├── Navigation.css
│   ├── Footer.tsx
│   └── Footer.css
├── api/                 # API routes
│   └── checkout/
│       └── route.ts
├── products/            # Products page
│   └── page.tsx
├── cart/                # Shopping cart page
│   └── page.tsx
├── how-it-works/        # How it works page
│   └── page.tsx
├── about/               # About page
│   └── page.tsx
├── contact/             # Contact page
│   └── page.tsx
├── success/             # Order success page
│   ├── page.tsx
│   └── success.css
├── layout.tsx           # Root layout
├── page.tsx             # Home page
├── globals.css          # Global styles
├── home.css             # Home page styles
├── products.css         # Products page styles
├── cart.css             # Cart page styles
├── info-page.css        # Shared info page styles
└── page.tsx
```

## Key Features

### 1. Product Showcase
- Grid layout with category filtering
- Product cards with images, descriptions, and prices
- Quick add to cart functionality

### 2. Shopping Cart
- View all cart items
- Real-time total calculation
- Shipping and tax estimation
- Secure checkout with Stripe

### 3. Responsive Design
- Mobile-first approach
- Breakpoints at 1024px, 768px, and 480px
- Touch-friendly interface

### 4. Modern UI/UX
- Gradient backgrounds
- Smooth transitions and animations
- Clear visual hierarchy
- Accessible color contrasts

## Customization

### Colors
Update the CSS variables in `app/globals.css`:
```css
:root {
  --primary: #1f2937;
  --accent: #d97706;
  --text-primary: #111827;
  /* ... other colors ... */
}
```

### Products
Edit the products array in `app/products/page.tsx` to add/remove/modify products.

### Company Info
Update contact details in:
- `app/components/Footer.tsx`
- `app/contact/page.tsx`

## Stripe Setup

1. Create a Stripe account
2. Get your API keys from the Stripe Dashboard
3. Add them to `.env.local`
4. Test payments use Stripe test card: `4242 4242 4242 4242`

## Deployment

This project can be deployed to Vercel, Netlify, or any Node.js hosting:

```bash
npm run build
npm start
```

## Future Enhancements

- Product customization interface (text preview)
- User accounts and order history
- Product reviews and ratings
- Email notifications
- Admin dashboard for order management
- Inventory management
- Advanced search and filtering
- Wishlist functionality

## License

All rights reserved.

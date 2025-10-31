# Product Dashboard - Test Task Completion

## Answers to Your Questions

### 1. Did you actually read this job post from start to finish? Be honest.

Yes, I read it carefully several times to fully understand the task. I was surprised to see that the discount should apply when the amount is less than 500, not greater — that was an interesting detail.

### 2. According to the job post, how long should it take an elite dev to complete the test task?

It took me about 30 minutes to complete it.

### 3. Do you work for an agency or plan to hand this job to someone else?

If I understood correctly, this question is about whether I'll do the work myself — yes, I will. I have enough time to dedicate to this project.

### 4. What was the longest you ever worked without sleep when you had to make an important deadline?

I once worked around 15–16 hours straight to finish an important task. I wanted to complete it faster and impress the client — though, funnily enough, it didn't surprise anyone.

### 5. What was the coolest project you ever worked on in ReactJS?

The coolest one was building my own implementation of Create React App — it was a great challenge and gave me a deep understanding of React's build process.

---

## Note About Design

Since there was no link provided and only this text:

> "Make the design look like it fits into this product
>
> (link removed)
>
> Login: admin
>
> Pass: tester"

—I went with what felt right. If needed, I can rework it.

---

## Project Overview

This is a production-ready React application built with TypeScript, Vite, and Tailwind CSS. It implements a dynamic product dashboard with filtering, shopping cart functionality, and automatic discount calculation.

### Features

- ✅ **3-column responsive layout** (Filter Panel | Product Grid | Cart Summary)
- ✅ **Category filtering** - filter products by category
- ✅ **Shopping cart** - add/remove items with quantity tracking
- ✅ **Automatic discount** - 10% discount applied when subtotal < $500
- ✅ **Mobile responsive** - works perfectly on all screen sizes
- ✅ **Clean architecture** - custom hooks, separated logic, TypeScript types
- ✅ **Production ready** - optimized build, no unnecessary dependencies

---

## Project Structure

```
src/
├── components/          # React components
│   ├── FilterPanel.tsx      # Category filter sidebar
│   ├── ProductGrid.tsx      # Product cards display
│   └── CartSummary.tsx       # Shopping cart summary
├── hooks/               # Custom React hooks
│   ├── useProducts.ts       # Products data fetching
│   ├── useProductFilter.ts  # Product filtering logic
│   └── useCart.ts          # Shopping cart management
├── tools/              # Utility functions
│   └── cartCalculations.ts  # Cart price calculations
└── types/              # TypeScript type definitions
    └── product.ts          # Product & CartItem types
```

---

## How It Works

### Component Architecture

1. **FilterPanel** - Displays all available categories. When a category is selected, it filters the product list.

2. **ProductGrid** - Shows filtered products in a responsive grid. Each product card displays:

   - Product name
   - Description
   - Price
   - "Add to Cart" button

3. **CartSummary** - Displays cart contents with:
   - Item count
   - Individual cart items with remove option
   - Subtotal calculation
   - Discount calculation (10% if subtotal < $500)
   - Final total

### Business Logic

- **Product Loading**: Products are loaded from `/public/products.json` on component mount
- **Filtering**: Products are filtered by category using `useMemo` for performance
- **Cart Operations**:
  - Adding a product that's already in cart increments its quantity
  - Removing an item removes it completely from cart
- **Discount Logic**: Automatically applies 10% discount when cart subtotal is less than $500
- **Responsive Design**: Layout adapts from 3-column desktop to single-column mobile

### Custom Hooks

- **useProducts**: Manages product data fetching with loading and error states
- **useProductFilter**: Handles category selection and product filtering
- **useCart**: Manages cart state and operations (add/remove items)

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- Yarn package manager (or npm)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd vite-test-task
```

2. Install dependencies:

```bash
yarn install
```

### Development

Start the development server:

```bash
yarn dev
```

The application will be available at `http://localhost:5173` (or the port Vite assigns).

### Build for Production

Build the production bundle:

```bash
yarn build
```

The optimized files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
yarn preview
```

### Linting

Run ESLint to check code quality:

```bash
yarn lint
```

---

## Technical Stack

- **React 19.1** - Latest React with hooks
- **TypeScript 5.9** - Full type safety
- **Vite 7** - Fast build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **ESLint** - Code linting and quality checks

### Why These Technologies?

- **React Hooks Only**: Used only functional components with hooks (useState, useEffect, useMemo) as requested
- **No UI Libraries**: Pure Tailwind CSS for styling, no Material UI or other component libraries
- **No State Management**: No Redux - managed state with React hooks only
- **TypeScript**: Full type safety throughout the application
- **Clean Code**: Separated logic into custom hooks and utility functions

---

## Code Quality

- ✅ TypeScript strict mode enabled
- ✅ ESLint configured with React rules
- ✅ Type-only imports where appropriate
- ✅ Clean component separation
- ✅ Custom hooks for reusable logic
- ✅ No unnecessary dependencies

---

## Performance Optimizations

- `useMemo` for filtered products calculation
- Efficient cart state updates
- Optimized Tailwind CSS build
- Production-ready bundle size

---

## Browser Support

Works in all modern browsers:

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

---

## License

Private project for test task evaluation.

---

Built with attention to detail and production-ready practices.

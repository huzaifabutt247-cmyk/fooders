# Fooders Restaurant Website

A modern, responsive restaurant website built with **Next.js** and **React**, featuring a beautiful UI with Tailwind CSS.

## 🌟 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Home Page**: Hero section, featured dishes, about, testimonials, and CTA
- **Menu Page**: Interactive menu with categories (Appetizers, Mains, Desserts)
- **Reservations**: Fully functional reservation form with validation
- **About Page**: Restaurant story, values, and chef information
- **Contact Page**: Contact form and location information
- **Navigation**: Sticky header with mobile-friendly navigation

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **CSS Preprocessor**: PostCSS
- **JavaScript**: ES6+

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/huzaifabutt247-cmyk/fooders.git
cd fooders
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🚀 Building for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
fooders/
├── src/
│   ├── app/
│   │   ├── page.jsx          # Home page
│   │   ├── layout.jsx        # Root layout
│   │   ├── globals.css       # Global styles
│   │   ├── menu/
│   │   │   └── page.jsx      # Menu page
│   │   ├── reservations/
│   │   │   └── page.jsx      # Reservations page
│   │   ├── about/
│   │   │   └── page.jsx      # About page
│   │   └── contact/
│   │       └── page.jsx      # Contact page
│   └── components/
│       ├── Header.jsx        # Navigation header
│       ├── Footer.jsx        # Footer
│       ├── Hero.jsx          # Hero section
│       ├── FeaturedDishes.jsx # Featured dishes
│       ├── DishCard.jsx      # Dish card component
│       ├── About.jsx         # About section
│       ├── Testimonials.jsx  # Testimonials section
│       └── CTA.jsx           # Call-to-action section
├── public/                   # Static assets
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── jsconfig.json
```

## 🎨 Customization

### Colors
Edit the color theme in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#ff6b35',
      secondary: '#f7931e',
      accent: '#fdb913',
    },
  },
}
```

### Restaurant Information
Update the contact information, hours, and address in:
- `src/components/Footer.jsx`
- `src/app/contact/page.jsx`

### Menu Items
Edit the menu items in `src/app/menu/page.jsx`

### Images
Replace placeholder images in components with your own restaurant images

## 📝 Pages

- **Home** (`/`) - Landing page with hero, featured dishes, about, testimonials
- **Menu** (`/menu`) - Full menu with categories
- **Reservations** (`/reservations`) - Booking form
- **About** (`/about`) - Restaurant story and values
- **Contact** (`/contact`) - Contact form and information

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file if you need environment variables:
```
NEXT_PUBLIC_API_URL=your_api_url
```

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Built by Huzaifa Butt

## 🤝 Contributing

Feel free to fork this project and submit pull requests!

---

**Happy Dining! 🍽️**

# Tucson Travel Guide Website

A comprehensive, mobile-first travel guide website for Tucson, Arizona, featuring family-friendly restaurants, attractions, and daily itineraries.

## Overview

This website was built from markdown documentation to create an immersive, easy-to-navigate travel guide. It's optimized for mobile devices and includes detailed information about 15+ restaurants and 16+ attractions in Tucson.

## Features

### Navigation Structure
- **Home** - Overview and quick navigation
- **Restaurants** - Complete dining guide with kid-friendly options
- **Attractions** - Museums, parks, scenic drives, and activities
- **Don't-Miss Checklist** - S-tier and A-tier must-see locations
- **Daily Itineraries** - Pre-planned day trips with timing and routes

### Individual Location Pages
Each restaurant and attraction has its own dedicated page including:
- Detailed description and vibe
- Kids menu items (for restaurants)
- Essential information (hours, cost, location)
- Google Maps links
- Yelp links
- Website links (when available)
- Nearby attractions with distances
- Nearby restaurants with distances
- Pro tips and important notes

### Design Features
- Clean, modern desert-themed design
- Mobile-first responsive layout (320px to 1440px+)
- Sticky navigation header
- Hamburger menu for mobile
- Search functionality on directory pages
- Touch-friendly tap targets (44x44px minimum)
- Accessible design (WCAG AA compliant)

## File Structure

```
/site
├── index.html                 # Homepage
├── css/
│   └── styles.css            # Main stylesheet (mobile-first)
├── js/
│   ├── navigation.js         # Mobile menu functionality
│   └── search.js             # Search filtering
├── categories/
│   ├── restaurants.html      # Restaurant directory
│   ├── attractions.html      # Attractions directory
│   ├── dont-miss.html        # Don't-Miss checklist
│   └── itineraries.html      # Daily itinerary ideas
├── pages/
│   ├── restaurants/          # Individual restaurant pages (16 pages)
│   │   ├── bobos-restaurant.html
│   │   ├── baja-cafe.html
│   │   ├── el-guero-canelo.html
│   │   └── ... (13 more)
│   └── attractions/          # Individual attraction pages (18 pages)
│       ├── arizona-sonora-desert-museum.html
│       ├── sabino-canyon.html
│       ├── saguaro-national-park.html
│       └── ... (15 more)
└── README.md                 # This file
```

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox
- **Vanilla JavaScript** - No frameworks for maximum compatibility
- **Mobile-First** - Responsive breakpoints at 768px, 1024px, 1440px

## Content Sources

All content extracted and organized from:
- Restaurant_Guide.md
- Attractions_Guide.md
- Daily_Itinerary_Options.md
- Distance_Reference_Guide.md

## Key Pages

### Homepage (index.html)
- Hero section with welcome message
- Quick navigation cards to all sections
- Featured S-tier attractions and top restaurants
- Planning tips

### Don't-Miss Checklist (categories/dont-miss.html)
Features the best of Tucson:
- **S-Tier Attractions:** Arizona-Sonora Desert Museum, Sabino Canyon
- **A-Tier Attractions:** Reid Park Zoo, Saguaro National Park, Mini Time Machine Museum
- **Top Restaurants:** Bobo's, Baja Cafe, El Guero Canelo, El Charro, Seis Kitchen, Mi Nidito, Prep & Pastry, Cup Cafe

### Daily Itineraries (categories/itineraries.html)
Pre-planned day trips including:
- Day 1: Desert Museum + Saguaro + Sunset
- Day 2: Zoo + Mercado + Trail Dust Town
- Day 3: Sabino Canyon Morning
- Day 4: Mini Time Machine + Chill Day
- Optional: Mt. Lemmon Day Trip

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

## Usage

Simply open `index.html` in a web browser. No build process or server required - this is a static site that works offline!

### To Deploy

Upload the entire `/site` folder to any web hosting service. The site will work immediately with no additional configuration.

## Color Scheme

Desert-inspired palette:
- **Primary:** #D97642 (Sunset orange)
- **Secondary:** #5B8A72 (Desert sage)
- **Accent:** #E8B84D (Golden desert)
- **Background:** #FFFCF7 (Warm cream)
- **Text:** #2C2416 (Dark brown)

## Accessibility Features

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Sufficient color contrast (WCAG AA)
- Alt text on images
- Skip navigation links
- Responsive font sizes (minimum 16px)

## Performance Optimizations

- Minimal external dependencies
- CSS custom properties for theming
- Smooth scroll behavior
- Efficient CSS Grid and Flexbox layouts
- No heavy JavaScript frameworks

## Future Enhancements

Potential additions:
- Image galleries for each location
- Interactive maps with all locations
- User reviews and ratings
- Print-friendly styles
- Dark mode toggle
- Multi-language support

## Credits

Content compiled from Tucson planning documentation.
Design and development: December 2024

## License

For personal use in planning your Tucson trip.

---

**Last Updated:** December 2024
**Total Pages:** 35+ (1 homepage + 4 category pages + 30+ individual location pages)

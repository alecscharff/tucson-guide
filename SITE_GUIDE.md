# Tucson Family Travel Guide Website

## Overview
Complete travel guide website built from your markdown files with:
- 15 Restaurants with individual detail pages
- 15 Attractions with individual detail pages  
- 10 Daily Itinerary options
- Don't-Miss Checklist (S-Tier and A-Tier priorities)
- Mobile-first responsive design
- Desert/Southwest color palette
- Search functionality on directory pages

## Site Structure

### Main Navigation Pages
- `index.html` - Homepage with quick highlights
- `restaurants.html` - Directory of all 15 restaurants
- `attractions.html` - Directory of all 15 attractions
- `itineraries.html` - 10 detailed daily itinerary options
- `dont-miss.html` - S-Tier and A-Tier checklist

### Individual Location Pages
All restaurant and attraction pages include:
- Description and vibe
- Key details (hours, address, cost, distance)
- Google Maps and Yelp/TripAdvisor links
- Nearby attractions (for restaurants)
- Nearby restaurants (for attractions)

#### Restaurants (15 total)
**Breakfast & Brunch:**
1. Baja Cafe - Southwest breakfast, famous pancakes
2. Bobo's Restaurant - Classic diner, BEST for picky eaters
3. Prep & Pastry - Modern brunch, Yelp Top 100
4. Barista del Barrio - Coffee & light breakfast
5. Seis Kitchen - Mexican breakfast
6. Hotel Congress / Cup Cafe - Historic downtown

**Sonoran & Mexican:**
7. El Guero Canelo - James Beard winner, Sonoran hot dogs
8. El Charro Cafe - Historic since 1922
9. Mi Nidito - Famous Mexican since 1952
10. Amelia's Mexican Kitchen - Cute kid-friendly
11. Paco's Mexican Food - Simple authentic

**Other Cuisines & Quick Bites:**
12. Jewel's Noodle Kitchen - Chinese dumplings
13. Eegee's - Local chain, famous frozen drinks
14. American Eat Co. - Food court + arcade
15. Jojo's Restaurant - Classic American
16. Barnyard Crafthouse - Play space for kids

#### Attractions (15 total)
**S-Tier (Must-Do):**
1. Arizona-Sonora Desert Museum - Zoo + Museum + Gardens
2. Sabino Canyon - Scenic tram ride

**A-Tier (Highly Recommended):**
3. Reid Park Zoo - Perfect size for kids
4. Saguaro National Park - Giant cacti
5. Mini Time Machine Museum - Magical miniatures

**B-Tier (Good Additions):**
6. Gates Pass - Sunset viewpoint
7. Sentinel Peak ("A" Mountain) - City views
8. Mt. Lemmon - Mountain village
9. Children's Museum Tucson - Indoor play
10. San Xavier Mission - Historic church
11. Trail Dust Town - Western theme park
12. Horseback Riding - Desert trail rides
13. Second Sky - Indoor play (Dec 29-30)

**C-Tier (Time Permitting):**
14. 4th Avenue Shopping - Indie shops
15. Mercado San Agustin - Market + food

### Daily Itineraries (10 Options)
1. **West Side Adventure** - Desert Museum + Saguaro NP + Gates Pass
2. **Sabino Canyon Day** - Tram ride + creek splashing
3. **Zoo + Mercado + 4th Avenue** - Balanced animals/shopping day
4. **Mt. Lemmon Day Trip** - Full mountain adventure
5. **Mini Time Machine + East Side** - Museum + playground
6. **Downtown Culture Day** - Children's Museum + historic downtown
7. **Mission + South Side** - San Xavier + Mi Nidito
8. **Trail Dust Town Evening** - Western theme park
9. **Horseback Riding Day** - Morning ride + relaxed afternoon
10. **Second Sky + Departure** - Last day before airport (Dec 29-30)

## Features

### Navigation
- Sticky header on all pages
- Mobile hamburger menu
- Breadcrumb navigation on detail pages
- Consistent links across all pages

### Search Functionality
- Live search on Restaurants and Attractions directory pages
- Searches titles, descriptions, and metadata
- Shows "no results" message when appropriate

### Responsive Design
- Mobile-first approach
- Breakpoints: 320px, 768px, 1024px, 1440px
- Touch-friendly tap targets (44x44px minimum)
- Readable font sizes (16px minimum)
- Tables with horizontal scroll on mobile

### Accessibility
- Skip to main content link
- ARIA labels for navigation
- Semantic HTML5 elements
- Sufficient color contrast
- Keyboard navigation support

### Design Theme
- Desert/Southwest color palette:
  - Terracotta: #D4693B
  - Sage: #8B9D83
  - Desert Sand: #E8D5C4
  - Sunset Orange: #E87D35
  - Deep Canyon: #8B4513
- Clean, modern layout
- Card-based design
- Gradient hero sections

## Key Information Highlighted

### For Picky Eaters
Restaurants are rated:
- **Excellent**: Has grilled cheese, hamburger, AND fries
- **Good**: Has grilled cheese or hamburger with fries
- **Moderate**: Has quesadillas or similar kid options
- **Limited**: May need to request simple items

### Health Scores
All restaurants show health inspection scores:
- **Excellent**: Top rating
- **Good**: Passing score

### Tier Rankings
Attractions clearly labeled:
- **S-Tier**: Must-do experiences (2 attractions)
- **A-Tier**: Highly recommended (3 attractions)
- **B-Tier**: Good additions (8 attractions)
- **C-Tier**: Time permitting (2 attractions)

## Technical Details

### File Structure
```
/site
  /css
    - styles.css (main stylesheet)
    - responsive.css (mobile-first responsive)
  /js
    - navigation.js (mobile menu toggle)
    - search.js (live search functionality)
  /pages
    /restaurants (15 individual restaurant pages)
    /attractions (15 individual attraction pages)
  - index.html
  - restaurants.html
  - attractions.html
  - itineraries.html
  - dont-miss.html
```

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Vanilla HTML, CSS, JavaScript (no frameworks)
- CSS Grid and Flexbox for layouts
- CSS custom properties for theming

## Updates From Original Markdown
- Removed reference codes (A1, R2, etc.)
- Removed Little Anthony's Diner and Piazza Gavi (health issues)
- Added new restaurants: Barista del Barrio, Amelia's, Jojo's, Paco's, Barnyard
- Added new attractions: Second Sky, 4th Avenue, Horseback Riding
- 10 geographically-grouped itinerary options
- NO Christmas-specific content (general travel guide)

## How to Use

1. **Open index.html** in a web browser to start
2. **Navigate** using the top menu to different sections
3. **Search** on directory pages to find specific locations
4. **Click individual restaurants/attractions** for detailed information
5. **Review itineraries** to plan your daily schedule
6. **Check Don't-Miss** page for top priorities

## Notes
- All Google Maps links auto-generate from addresses
- External links open in new tabs
- All content sourced from your updated markdown files
- Distance calculations from Rillito Park area (lodging base)
- December sunset time: ~5:20-5:25 PM

---
**Last Updated:** December 16, 2024
**Source Files:** Restaurant_Guide.md, Attractions_Guide.md, Daily_Itinerary_Options.md, Distance_Reference_Guide.md

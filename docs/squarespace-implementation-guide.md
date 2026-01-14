# CIW Annual Reunion: Squarespace Implementation Guide

This guide provides step-by-step instructions for recreating the CIW Annual Reunion website on Squarespace.

## Overview

The original Wix website has been recreated with modern HTML, CSS, and JavaScript that can be implemented in Squarespace using a combination of native blocks and custom code injection.

## Recommended Squarespace Template

Choose one of these templates for the best starting point:

- **Brine** (highly customizable)
- **Bedford** (event-focused)
- **Montauk** (clean and modern)
- **Avenue** (gallery-focused)

## Implementation Options

### Option 1: Using Squarespace Native Blocks (Recommended for Ease)

This approach uses Squarespace's built-in blocks and customizes them with CSS.

#### Step 1: Create the Page Structure

1. Create a new page called "Home" or "Reunion 2023"
2. Add sections for each major content area:
   - Hero Banner
   - Event Details
   - About/Ticket Info
   - Payment Options
   - Schedule
   - Photo Gallery
   - Committee Members
   - Contact

#### Step 2: Build Each Section

**Hero Section:**
1. Add a "Banner" or "Cover Page" section
2. Set the background to a dark color (hex: #1a1a2e) or upload a background image
3. Add Text blocks for:
   - "CIW" (large heading)
   - "Annual" (styled differently)
   - "Reunion Dinner"
   - "2023"
4. Add a Button block linking to the gallery section

**Event Details:**
1. Add a section with two columns
2. Left column: "When" details
3. Right column: "Where" details with venue information

**About/Ticket Info:**
1. Use a combination of Text and Spacer blocks
2. Create the ticket price display using styled text
3. Use a List block for included items
4. Add an "Early Bird" callout using a styled Quote block

**Payment Options:**
1. Create a three-column layout
2. Each column contains payment method details

**Schedule:**
1. Use Text blocks styled as a timeline
2. Or use the "Accordion" block for expandable schedule

**Gallery:**
1. Use Squarespace's built-in Gallery block
2. Choose "Grid" or "Masonry" layout
3. Upload the reunion photos

**Committee:**
1. Use a Gallery block with "Simple" or "Slideshow" type
2. Or use Text blocks with images for each member

**Contact:**
1. Add Text blocks with contact names
2. Add a Social Links block for Facebook

#### Step 3: Add Custom CSS

1. Go to **Design > Custom CSS**
2. Paste the contents of `css/squarespace-custom.css`

### Option 2: Using Code Blocks (More Control)

For sections requiring more precise styling, use Code blocks.

#### Step 1: Add Code Blocks

1. In the page editor, click "+" to add a block
2. Choose "Code" under "More"
3. Paste the relevant HTML from `index.html`
4. Check "Display Source" is OFF

#### Step 2: Inject CSS

1. Go to **Settings > Advanced > Code Injection**
2. In the Header section, add:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
  /* Paste custom CSS here */
</style>
```

#### Step 3: Add JavaScript

1. In Code Injection, go to the Footer section
2. Add:

```html
<script>
  // Paste main.js content here
</script>
```

## CSS Variables Reference

These CSS variables control the site's color scheme:

```css
:root {
    --color-primary: #1a1a2e;      /* Dark navy - headers, footer */
    --color-secondary: #16213e;     /* Darker navy - backgrounds */
    --color-accent: #e94560;        /* Coral red - highlights */
    --color-gold: #d4af37;          /* Gold - accents, buttons */
    --color-cream: #fef5e7;         /* Cream - backgrounds */
}
```

To change colors in Squarespace:
1. Go to **Design > Site Styles**
2. Modify the color palette
3. Or update the CSS variables in Custom CSS

## Section-by-Section Implementation Details

### Hero Banner

```css
/* Add to Custom CSS for hero styling */
.header-display-desktop .page-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 6rem;
    letter-spacing: -0.02em;
}

.header-actions .btn {
    background: #d4af37;
    color: #1a1a2e;
    text-transform: uppercase;
    letter-spacing: 0.1em;
}
```

### Event Cards

Use Squarespace's "Cards" or "Info" block, then style:

```css
.sqs-block-card {
    background: #fef5e7;
    border-radius: 4px;
    padding: 2rem;
}
```

### Timeline Schedule

If using native blocks, style list items as a timeline:

```css
.schedule-list li {
    position: relative;
    padding-left: 100px;
    border-left: 2px solid #d4af37;
}

.schedule-list li::before {
    content: attr(data-time);
    position: absolute;
    left: -60px;
}
```

### Gallery Grid

Configure Squarespace Gallery block:
1. Set to "Grid" design
2. Adjust to 4 columns on desktop, 2 on mobile
3. Add hover effects via CSS:

```css
.gallery-grid .gallery-item img {
    transition: transform 0.4s ease;
}

.gallery-grid .gallery-item:hover img {
    transform: scale(1.1);
}
```

## Mobile Responsiveness

Squarespace templates are mobile-responsive by default. Add these overrides for fine-tuning:

```css
@media (max-width: 768px) {
    .page-title {
        font-size: 3rem !important;
    }
    
    .sqs-gallery-design-grid .gallery-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
```

## Updating Content for Future Years

To update the site for 2024 and beyond:

1. **Change Year:**
   - Update all "2023" references to the new year
   - Update date references (September 9th, etc.)

2. **Update Venue (if changed):**
   - Modify address in Event Details section
   - Update Google Maps link

3. **Update Pricing/Details:**
   - Modify ticket price
   - Update early bird deadline
   - Change payment information if needed

4. **Update Photos:**
   - Replace gallery with new year's photos
   - Update "View XXXX Photos" button text

5. **Update Committee:**
   - Add/remove committee member photos and names

## Troubleshooting

**Fonts not loading:**
- Ensure Google Fonts links are in Code Injection Header
- Check for typos in font-family declarations

**Sections not aligning:**
- Squarespace uses a 12-column grid
- Adjust spacing in Site Styles

**Mobile menu issues:**
- Check Navigation settings
- Verify mobile breakpoints in custom CSS

**Gallery not displaying correctly:**
- Verify image dimensions are consistent
- Check gallery block settings

## Files Included

- `index.html` - Complete HTML structure
- `css/styles.css` - Full stylesheet
- `css/squarespace-custom.css` - Squarespace-specific CSS
- `js/main.js` - JavaScript functionality

## Support

For questions about Squarespace implementation:
- [Squarespace Help Center](https://support.squarespace.com/)
- [Squarespace Forum](https://forum.squarespace.com/)

# AI Models Ranking - Specification

## Project Overview
- **Project name**: AI Models Radar
- **Type**: Single-page website
- **Core functionality**: Display rankings of most popular and most powerful AI models with live data and interactive hover cards
- **Target users**: Tech enthusiasts, developers, AI researchers

## UI/UX Specification

### Layout Structure
- **Header**: Fixed top navigation with logo and title
- **Hero Section**: Dynamic tagline with animated background
- **Main Content**: Two-column grid for rankings (Usage vs Power)
- **Footer**: Minimal credits

### Responsive Breakpoints
- Mobile: < 768px (single column)
- Tablet: 768px - 1024px (two columns)
- Desktop: > 1024px (two columns with max-width)

### Visual Design

#### Color Palette
- **Background**: `#0a0a0f` (deep space black)
- **Card Background**: `#12121a` (dark navy)
- **Card Hover**: `#1a1a25` (lighter navy)
- **Primary Accent**: `#00d4ff` (electric cyan)
- **Secondary Accent**: `#ff006e` (hot pink)
- **Tertiary Accent**: `#8b5cf6` (violet)
- **Text Primary**: `#ffffff`
- **Text Secondary**: `#a0a0b0`
- **Gradient**: linear-gradient(135deg, #00d4ff 0%, #8b5cf6 50%, #ff006e 100%)

#### Typography
- **Font Family**: "Syne" for headings, "DM Sans" for body
- **Heading Sizes**: 
  - H1: 3.5rem (hero)
  - H2: 2rem (section titles)
  - H3: 1.25rem (card titles)
- **Body**: 1rem
- **Small**: 0.875rem

#### Spacing System
- Section padding: 4rem vertical
- Card padding: 1.5rem
- Grid gap: 1.5rem
- Border radius: 16px (cards), 8px (badges)

#### Visual Effects
- Glassmorphism cards with backdrop-blur
- Gradient borders on hover
- Smooth scale transitions (0.3s ease)
- Floating animation on hero elements
- Glow effects on accent elements

### Components

#### Model Card
- Rank badge (top-left corner)
- Model icon/logo
- Model name and provider
- Key metrics (usage %, score, etc.)
- **Hover state**: 
  - Scale up slightly (1.02)
  - Show detailed info card overlay
  - Border glow with gradient
- **Tooltip**: Full description, benchmarks, release date, context window, pricing

#### Ranking Section
- Section title with gradient text
- Tab/filter indicator (Usage vs Power)
- 10 model cards per ranking
- Animated entry on page load

## Functionality Specification

### Core Features
1. **Live Data**: Fetch/display current rankings (simulated with latest 2026 data)
2. **Usage Ranking**: Models ranked by monthly active users
3. **Power Ranking**: Models ranked by benchmark scores
4. **Hover Cards**: Detailed information appears on hover
5. **Random Shuffle**: Reorder slightly on each page load for variety

### Data Points Per Model
- Name
- Provider (company)
- Release date
- Context window
- Pricing (input/output per 1M tokens)
- Key strengths
- Benchmark scores (MMLU, GPQA, SWE-Bench, Chatbot Arena)
- Description

### User Interactions
- Hover on card → Show detailed tooltip
- Scroll → Parallax subtle effect
- Page load → Staggered card animation

## Acceptance Criteria
1. Page loads with animated entrance
2. Both rankings display 10 models each
3. Hover shows detailed card with all model info
4. Responsive on mobile/tablet/desktop
5. No console errors
6. Modern, visually striking design

# IBuildIt - The GitHub of Automations

**Another $20/Month? No Thanks.**

Build it once. Own it forever.

## Overview

IBuildIt is a community-driven platform that provides standardized, ready-to-use automation workflows. Replace expensive SaaS subscriptions with workflows you own and control. Think of it as GitHub for automations - a centralized repository where builders share proven workflows with clear documentation, cost breakdowns, and step-by-step guides.

## Key Differentiators

### 1. Standardized Documentation
Every workflow follows the same structure:
- **Input/Output clearly defined** - No guessing what triggers the workflow or where data goes
- **Prerequisites listed upfront** - API keys, accounts, and setup requirements
- **Cost transparency** - Exact monthly costs vs SaaS alternatives
- **Step-by-step guides** - With screenshots and video tutorials
- **Platform agnostic** - Works with n8n, Make.com, Zapier

### 2. Always Up to Date
- Community-maintained workflows
- Updated when APIs change
- Rated and reviewed by real users
- Not buried in Reddit threads or Twitter

### 3. Real Cost Savings
- Average savings: $150-300/month per workflow
- Pay only for API usage, not subscriptions
- Break-even typically within weeks
- Self-hosting options to save even more

## Project Structure

```
IBuildIt/
├── app/
│   ├── globals.css              # Global styles with Tailwind
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Landing page composition
│   └── workflow/
│       └── [slug]/
│           └── page.tsx         # Dynamic workflow detail pages
├── components/
│   ├── Header.tsx               # White header with logo/nav
│   ├── HeroSection.tsx          # "Another $20/Month? No Thanks" hero
│   ├── ValueProposition.tsx     # Full Control, Save Thousands, Learn & Share
│   ├── WorkflowBrowser.tsx      # Search and filter workflows
│   ├── CostCalculator.tsx       # Interactive savings calculator
│   ├── HowItWorks.tsx           # Find → Follow → Customize
│   ├── FeaturedWorkflows.tsx    # Top workflows showcase
│   ├── CommunityStats.tsx       # Stats with activity feed
│   ├── WhoThisIsFor.tsx         # Target audience section
│   ├── ContributeCTA.tsx        # Workflow contribution CTA
│   ├── FAQ.tsx                  # Expandable FAQ
│   ├── Footer.tsx               # Footer with links
│   ├── WorkflowDetail.tsx       # Complete workflow detail layout
│   ├── WorkflowThumbnail.tsx    # Workflow preview images
│   └── Logo.tsx                 # IBuildIt logo component
├── public/
│   └── images/                  # Logo and workflow images
├── PRD.md                       # Product requirements document
├── STRATEGY.md                  # Strategic vision and positioning
└── README.md                    # This file
```

## Current Features

### Landing Page
1. **Hero Section** - Clear value proposition with SaaS killer visual
2. **Value Proposition** - 3 key benefits with icons
3. **Workflow Browser** - Searchable workflow cards with real images
4. **Cost Calculator** - Interactive savings calculator
5. **How It Works** - 3-step process (Find, Follow, Customize)
6. **Featured Workflows** - Top 6 workflows with stats
7. **Community Stats** - Metrics + recent activity feed
8. **Who This Is For** - Target audience personas
9. **Contribute CTA** - Community contribution benefits
10. **FAQ** - Common questions accordion
11. **Footer** - Links and information

### Workflow Detail Pages
Each workflow (`/workflow/[slug]`) includes:

**Overview:**
- Title, tagline, and category badge
- Rating, usage count, and meta info
- Quick summary cards (Input, Output, Platform)

**Cost Breakdown:**
- Original SaaS cost (one-time + monthly)
- Workflow cost (with self-hosting options)
- Savings calculation with break-even point

**Implementation Guide:**
- Prerequisites with cost estimates
- Video tutorial placeholder
- Step-by-step instructions with screenshots
- Output destination options
- Troubleshooting tips

**Community:**
- Author information
- Rating and usage stats
- Last updated date

### Example: Physical Meeting AI Notetaker
**URL:** `/workflow/ai-notetaker`
- **Replaces:** PLAUD Device + Subscription ($28/mo)
- **Cost with workflow:** $5-25/mo (depending on hosting)
- **Savings:** $3-23/mo ($36-276/year)
- **Input:** Voice recordings from meetings
- **Output:** Meeting summaries, action items, key decisions
- **Platform:** Apple Shortcut + n8n
- **Difficulty:** Medium | **Time:** 45-60 minutes

## Design System

### Colors
- **Primary Orange:** #F59E0B (CTAs, highlights)
- **Dark Orange:** #D97706 (hover states)
- **Teal:** #2B7A7B (accents, secondary CTAs)
- **Light Teal:** #3B9A9B (hover states)
- **Navy:** #11161A (dark sections)
- **Gray:** #4A5568 (body text)
- **Light:** #F7FAFC (section backgrounds)

### Typography
- **Headlines:** Bold, large (4xl-6xl)
- **Body:** Clean, readable
- **Stats:** Extra bold for emphasis

### Visual Style
- Professional stock photography (Pixabay)
- Real workflow screenshots
- Clean, minimal interface
- High contrast for readability
- Mobile-first responsive design

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Images:** Next.js Image optimization
- **Deployment:** Vercel-ready

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/IBuildIt.git
cd IBuildIt
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Current Status

### ✅ Completed
- Landing page with all sections
- Workflow detail page template
- Physical Meeting AI Notetaker workflow (complete)
- Responsive design (mobile + desktop)
- Brand identity and visual design
- Logo and hero image
- Real workflow images from Pixabay
- Cost calculator component
- FAQ section
- Community stats section

### 🚧 In Progress
- Additional workflow examples
- Search and filter functionality
- User authentication

### 📋 Roadmap
- [ ] Database integration (workflows, users, ratings)
- [ ] User authentication and profiles
- [ ] Workflow submission form
- [ ] Search with Algolia/Meilisearch
- [ ] Rating and review system
- [ ] Fork/clone workflow functionality
- [ ] API for workflow data
- [ ] Analytics and tracking
- [ ] Email notifications
- [ ] Workflow versioning

## Contributing Workflows

Want to share a workflow? Each submission should include:

1. **Clear Input/Output** - What triggers it, where data goes
2. **Prerequisites** - All required accounts, API keys, costs
3. **Cost Breakdown** - Monthly costs vs SaaS alternative
4. **Step-by-Step Guide** - With screenshots
5. **Platform** - n8n, Make.com, Zapier, etc.
6. **Troubleshooting** - Common issues and solutions

See `PRD.md` for full workflow documentation requirements.

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

```bash
npm run build
vercel deploy
```

### Other Platforms

Build the static site:
```bash
npm run build
```

Deploy the `.next` folder to any Node.js hosting provider.

## License

MIT License - See LICENSE file for details

## Contact

For questions or collaboration: [Your contact information]

---

**Built by the community, for the community.**

Stop paying for another SaaS product. Build it once. Own it forever.

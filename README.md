# IBuildIt - Community Workflow Repository

**Fix Your Automation. Own Your Tools.**

*Inspired by iFixit's philosophy of empowerment through knowledge - translating "right to repair" into "right to build your own tools"*

## Project Structure

```
IBuildIt/
├── app/
│   ├── globals.css          # Global styles with Tailwind
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main landing page
├── components/
│   ├── Header.tsx           # Dark navy header with navigation
│   ├── HeroSection.tsx      # iFixit-style hero (2-column, "The Right to Build")
│   ├── ValueProposition.tsx # 3 cards with icon, minimal design
│   ├── WorkflowBrowser.tsx  # Search, filters, workflow cards
│   ├── CostCalculator.tsx   # Interactive savings calculator
│   ├── HowItWorks.tsx       # 3-step process
│   ├── FeaturedWorkflows.tsx # Popular workflows showcase
│   ├── CommunityStats.tsx   # Dark section with stats + activity feed
│   ├── WhoThisIsFor.tsx     # Target audience section
│   ├── ContributeCTA.tsx    # Orange-bordered contribution CTA
│   ├── FAQ.tsx              # Expandable FAQ section
│   └── Footer.tsx           # Dark footer with links
├── PRD.md                   # Full product requirements doc
└── README.md                # This file
```

## Landing Page Sections

1. **Header** - Dark navy sticky header with logo and navigation
2. **Hero Section** - 2-column layout with workflow illustration
3. **Platform Logos** - Zapier, Make.com, n8n
4. **Value Proposition** - Full Control, Save Thousands, Learn & Share
5. **Workflow Browser** - Clickable workflow cards with gradient thumbnails
6. **How It Works** - Find → Follow → Customize (3 steps)
7. **Featured Workflows** - Top 6 with colorful gradient headers
8. **Community Stats** - 6 key metrics + recent activity feed
9. **Contribute CTA** - Benefits of contributing workflows
10. **FAQ** - Expandable accordion with common questions
11. **Footer** - Dark footer with links

## Workflow Detail Pages

Each workflow has a standardized detail page at `/workflow/[slug]`:

### Complete Workflow Information
- Hero with tagline and quick stats (rating, time, difficulty, savings)
- Input/Output/Platform summary cards
- Full cost breakdown with savings calculation
- Prerequisites with setup guide links
- Video tutorial placeholder
- Step-by-step instructions with screenshot placeholders
- Output destination options
- Customization guide (easy/medium/advanced)
- Troubleshooting section
- Author/contributor information

### Example: AI Meeting Notetaker
**URL:** `/workflow/ai-notetaker`
- Replaces PLAUD device ($200/mo) → $20-25/mo
- Input: Voice recordings from meetings
- Output: Summaries, action items, talking points
- Platform: n8n (or equivalents)
- Difficulty: Medium | Time: 30-45 min

## Design Philosophy

Inspired by **iFixit.com**, we translate "hardware repair" to "software automation":

- **Dark Navy Header** (#11161A) - Professional, authoritative tone
- **Orange Accent** (#FF6B00) - Call-to-action highlights, matches iFixit's energy
- **Blue Accent** (#0071CE) - Trust and reliability
- **Minimal Design** - Substance over flash, education-first
- **Community Focus** - Built by makers, for makers
- **Empowerment Messaging** - "The Right to Build" vs iFixit's "The Right to Repair"

### Key Parallels:
| iFixit | IBuildIt |
|--------|----------|
| Fix Your Devices | Fix Your Automation |
| Repair Guides | Workflow Guides |
| Teardowns | Workflow Breakdowns |
| Right to Repair | Right to Build |
| Tool Kits | Workflow Kits |

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Ready for Vercel

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Visual Elements & Branding

### Logos & Icons
- **IBuildIt Logo** - Custom SVG logo with wrench/tool icon in orange
- **Favicon** - Dark navy background with orange tool icon
- **Platform Logos** - Zapier, Make.com, n8n simplified logos

### Illustrations & Graphics
- **Hero Workflow Diagram** - Animated SVG showing trigger → process → output flow
- **Workflow Thumbnails** - Gradient cards with unique icons for each workflow type:
  - 🎙️ Meeting (blue gradient)
  - 📱 Social Media (purple-pink gradient)
  - ✉️ Email (green gradient)
  - 👥 CRM (orange-red gradient)
  - 💰 Invoice (yellow-orange gradient)
  - 📝 Content (indigo-purple gradient)

### Featured Workflow Cards
- Colorful gradient headers with emojis
- Ranking badges (#1, #2, etc.)
- Hover effects with border color change

## Features

- ✅ Fully responsive design (mobile-first)
- ✅ Interactive cost calculator with real-time calculations
- ✅ Workflow browser with search and filters (placeholder data)
- ✅ Custom SVG logo and favicon
- ✅ Workflow card thumbnails with gradient backgrounds
- ✅ Platform logo section (Zapier, Make.com, n8n)
- ✅ Hero section workflow illustration
- ✅ Expandable FAQ accordion
- ✅ Clean component architecture
- ✅ Ready for backend integration

## Next Steps

- [ ] Connect to real workflow database
- [ ] Add user authentication
- [ ] Implement workflow submission form
- [ ] Add search functionality (Algolia/Meilisearch)
- [ ] Create individual workflow detail pages
- [ ] Set up analytics

## Deploy to Vercel

```bash
npm run build
vercel deploy
```

---

Built with the iFixit philosophy: teach people to build, not just consume.

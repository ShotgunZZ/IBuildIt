# Quick Start Guide for New Team Members

Welcome to IBuildIt! This guide will get you up and running in 5 minutes.

## 🚀 Installation (2 minutes)

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/IBuildIt.git
cd IBuildIt

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## 📖 Essential Reading (3 minutes)

### Start Here
1. **README.md** - Complete project overview and tech stack
2. **STRATEGY.md** - Our positioning as "The GitHub of Automations"
3. **PRD.md** - Detailed product requirements and workflow structure

### Key Concept: What Makes Us Different

We're solving a real problem: automation workflows are scattered across Reddit, Twitter, and Discord threads. They're hard to find, inconsistent, and often outdated.

**Our Solution:**
- **Standardized format** - Every workflow has the same structure (Input → Prerequisites → Steps → Output)
- **Cost transparency** - Show real API costs vs SaaS alternatives
- **Always updated** - Community maintains workflows when APIs change
- **Platform agnostic** - Works with n8n, Make.com, Zapier, etc.

## 🏗️ Project Structure

```
Key Directories:
├── app/                 # Next.js App Router pages
│   ├── page.tsx         # Landing page (composed of components)
│   └── workflow/[slug]/ # Dynamic workflow detail pages
├── components/          # All React components
│   ├── HeroSection.tsx  # "Another $20/Month? No Thanks"
│   ├── WorkflowDetail.tsx  # Complete workflow page layout
│   └── ...              # Other landing page sections
├── public/images/       # Logo and workflow images
└── tailwind.config.ts   # Custom colors and styling
```

## 🎨 Design System

### Brand Colors
```typescript
Primary Orange: #F59E0B    // CTAs, highlights
Teal: #2B7A7B             // Secondary accents
Navy: #11161A             // Dark sections
```

### Key Messaging
- **Tagline:** "The GitHub of Automations"
- **Headline:** "Another $20/Month? No Thanks."
- **Value Prop:** "Build it once. Own it forever."

## 📝 Example: How Workflows Are Structured

Check out `/app/workflow/[slug]/page.tsx` for the **Physical Meeting AI Notetaker** workflow:

```typescript
{
  title: 'AI Meeting Notetaker',
  replaces: 'PLAUD Device + Subscription',

  // Input/Output (our secret weapon - always clearly defined)
  input: {
    type: 'Voice recording from physical meeting',
    formats: ['MP3', 'WAV', 'M4A']
  },
  output: {
    items: ['Meeting summaries', 'Action items'],
    destinations: ['Notion', 'Slack', 'Email']
  },

  // Cost breakdown (transparency is key)
  costBreakdown: {
    original: [
      { name: 'PLAUD Device', cost: 200, type: 'one-time' },
      { name: 'PLAUD Subscription', cost: 28, type: 'monthly' }
    ],
    withThisWorkflow: {
      monthly: [
        { name: 'n8n Cloud', cost: 20, note: 'Free if self-hosted' },
        { name: 'OpenAI API', cost: 5 }
      ]
    }
  },

  // Step-by-step guide
  steps: [
    { title: 'Create Apple Shortcut', description: '...' },
    { title: 'Set Up n8n Webhook', description: '...' },
    // ...
  ]
}
```

## 🔨 Common Tasks

### Add a New Workflow
1. Add workflow data to `app/workflow/[slug]/page.tsx` following the existing structure
2. Add workflow card to `components/WorkflowBrowser.tsx`
3. Add thumbnail image to `public/images/workflow-*.jpg`
4. Update featured workflows in `components/FeaturedWorkflows.tsx` if needed

### Update Homepage Section
1. Find component in `components/` directory
2. Edit component (most use Tailwind CSS)
3. Changes reflect immediately with `npm run dev`

### Add New Images
1. Place in `public/images/`
2. Use Next.js Image component for optimization:
```tsx
import Image from 'next/image'

<Image
  src="/images/your-image.jpg"
  alt="Description"
  width={640}
  height={427}
/>
```

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Type Errors
- We use TypeScript - check for proper types
- In Next.js 15, params are async: `const { slug } = await params`

### Styling Not Updating
```bash
# Restart dev server
# Ctrl+C to stop, then:
npm run dev
```

## 📚 Additional Resources

### Technologies Used
- **Next.js 15** - [Documentation](https://nextjs.org/docs)
- **Tailwind CSS** - [Documentation](https://tailwindcss.com/docs)
- **TypeScript** - [Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

### Project Documents
- **CLEANUP_SUMMARY.md** - Recent cleanup and current status
- **README.md** - Complete project documentation
- **PRD.md** - Product requirements and workflow standards
- **STRATEGY.md** - Market positioning and differentiators

## 💬 Questions?

If something's unclear:
1. Check README.md for detailed documentation
2. Look at existing components for examples
3. Review PRD.md for workflow structure requirements
4. Ask your teammate!

## 🎯 Your First Task

Try this to get familiar with the codebase:

1. Run `npm run dev`
2. Visit the Physical Meeting AI Notetaker page: `http://localhost:3000/workflow/ai-notetaker`
3. Review the workflow data in `app/workflow/[slug]/page.tsx`
4. Make a small change (e.g., update the tagline) and see it live

Welcome to the team! 🚀

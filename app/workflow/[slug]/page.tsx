import { notFound } from 'next/navigation'
import WorkflowDetail from '@/components/WorkflowDetail'

// This would come from a database in production
const workflows = {
  'ai-notetaker': {
    id: 'ai-notetaker',
    title: 'AI Meeting Notetaker',
    tagline: 'Fully automated physical meeting AI notetaker that summarizes meetings and action items to desired output platforms',

    // Metadata
    category: 'Communication & Collaboration',
    difficulty: 'Medium',
    timeToComplete: '45-60 minutes',
    estimatedMonthlyCost: 25, // Cloud cost (n8n Cloud + OpenAI)
    moneySavedPerMonth: 3, // Minimum savings ($28 - $25 cloud)
    platform: 'Apple Shortcut + n8n',
    alternativePlatforms: ['Make.com', 'Zapier'],
    replaces: 'PLAUD Device + Subscription',
    rating: 4.9,
    uses: 234,
    lastUpdated: '2025-10-15',

    // Input/Output
    input: {
      type: 'Voice recording from physical meeting',
      formats: ['MP3', 'WAV', 'M4A'],
      sources: ['PLAUD device', 'Claude device', 'Phone recording', 'Voice recorder'],
    },

    output: {
      items: ['Meeting summaries', 'Action items', 'Talking points', 'Key decisions'],
      destinations: ['Notion', 'Slack', 'Email', 'Google Docs', 'Airtable', 'Monday.com'],
      customizable: true,
    },

    // Prerequisites
    prerequisites: [
      {
        name: 'iPhone with iOS Shortcuts',
        description: 'For recording and uploading audio',
        cost: 'Free (built-in)',
        setupVideoUrl: '#',
        required: true,
      },
      {
        name: 'n8n Account',
        description: 'Self-hosted or cloud n8n instance',
        cost: 'Free (self-hosted) or $20/mo (cloud)',
        setupVideoUrl: '#',
        required: true,
      },
      {
        name: 'OpenAI API Key',
        description: 'For Whisper (transcription) and GPT-4 (summarization)',
        cost: '~$5/mo (~500k tokens for 20 meetings)',
        setupVideoUrl: '#',
        required: true,
      },
    ],

    // Cost Breakdown
    costBreakdown: {
      original: [
        { name: 'PLAUD Device', cost: 200, type: 'one-time' },
        { name: 'PLAUD Subscription', cost: 28, type: 'monthly' },
      ],
      withThisWorkflow: {
        oneTime: [],
        monthly: [
          { name: 'n8n Cloud', cost: 20, note: 'Free if self-hosted' },
          { name: 'OpenAI API', cost: 5, note: '~500k tokens/month for 20 meetings' },
        ],
        costRange: {
          min: 5, // Self-hosted: Only OpenAI API
          max: 25, // Cloud: n8n Cloud + OpenAI API
        },
      },
      savings: {
        monthly: 3, // $28 (PLAUD) - $25 (cloud workflow) = $3, or $28 - $5 (self-hosted) = $23
        annual: 36, // Minimum savings with cloud
        maxMonthlySavings: 23, // Maximum savings with self-hosting
        maxAnnualSavings: 276, // $23 * 12
        breakEvenWeeks: 8, // $200 device / $25 per month savings ≈ 8 weeks
        note: 'Based on n8n Cloud + OpenAI ($25/mo). Self-hosting n8n saves additional $20/mo (only $5/mo for OpenAI).',
      },
    },

    // Workflow Steps
    steps: [
      {
        number: 1,
        title: 'Create Apple Shortcut',
        description: 'Set up iOS Shortcut to record audio and send to n8n webhook. [Detailed guide with screenshots will be provided]',
        screenshotUrl: '/placeholder-step1.png',
        isPlaceholder: true,
      },
      {
        number: 2,
        title: 'Set Up n8n Webhook',
        description: 'Create a webhook trigger in n8n to receive audio files from your iPhone',
        screenshotUrl: '/placeholder-step2.png',
      },
      {
        number: 3,
        title: 'Feed to AI Model',
        description: 'Send audio to OpenAI Whisper API for transcription, then to GPT-4 for summarization',
        screenshotUrl: '/placeholder-step3.png',
      },
      {
        number: 4,
        title: 'Format Output',
        description: 'Parse and structure AI response into meeting summary, action items, and key decisions',
        screenshotUrl: '/placeholder-step4.png',
      },
      {
        number: 5,
        title: 'Send to Destinations',
        description: 'Push formatted notes to your chosen platforms (Notion, Slack, Email, etc.)',
        screenshotUrl: '/placeholder-step5.png',
      },
    ],

    // Tutorial video
    tutorialVideoUrl: '#',

    // Troubleshooting
    troubleshooting: [
      {
        issue: 'Transcription is inaccurate',
        solution: 'Ensure audio quality is good. Try using Whisper large model. Check background noise levels.',
      },
      {
        issue: 'Workflow times out for long meetings',
        solution: 'Split audio into 10-minute chunks before processing. Increase n8n timeout settings.',
      },
      {
        issue: 'Missing action items in summary',
        solution: 'Improve GPT-4 prompt with examples of action items. Increase token limit.',
      },
    ],

    // Author
    author: {
      name: 'IBuildIt Team',
      avatar: '/avatar-placeholder.png',
      contributedWorkflows: 12,
    },
  },
}

export default async function WorkflowPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const workflow = workflows[slug as keyof typeof workflows]

  if (!workflow) {
    notFound()
  }

  return <WorkflowDetail workflow={workflow} />
}

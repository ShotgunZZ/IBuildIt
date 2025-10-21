import Image from 'next/image'

type WorkflowType = 'meeting' | 'social' | 'email' | 'crm' | 'invoice' | 'content'

export default function WorkflowThumbnail({ type }: { type: WorkflowType }) {
  const configs = {
    meeting: {
      image: '/images/workflow-meeting.jpg',
      alt: 'Meeting workflow automation whiteboard'
    },
    social: {
      image: '/images/workflow-social.jpg',
      alt: 'Social media workflow kanban board'
    },
    email: {
      image: '/images/workflow-email.jpg',
      alt: 'Email workflow flowchart'
    },
    crm: {
      image: '/images/workflow-crm.jpg',
      alt: 'CRM workflow kanban process'
    },
    invoice: {
      image: '/images/workflow-invoice.jpg',
      alt: 'Invoice workflow kanban board'
    },
    content: {
      image: '/images/workflow-content.jpg',
      alt: 'Content workflow diagram'
    }
  }

  const config = configs[type]

  return (
    <div className="relative aspect-video rounded-t-lg overflow-hidden bg-gray-100">
      <Image
        src={config.image}
        alt={config.alt}
        width={640}
        height={360}
        className="w-full h-full object-cover"
      />
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
    </div>
  )
}

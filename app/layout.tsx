import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: AI-Powered Screenshot to Text',
  description: '[
  {
    "title": "Concept Mapper",
    "one_liner": "Turn screenshots into organized mind maps effortlessly.",
    "why_now": "The rise of remote work creates a need for clearer visual communication tools.",
    "novel_mechanism": "Utilizes OCR to extract text and AI to structure it into a mind map format for better comprehension.",
    "ai_stack": [
      "GPT",
      "Vision",
      "Embeddings"
    ],
    "edge_use_cases": [
      "Students converting lecture notes from screenshots into visual study aids.",
      "Teams synthesizing project notes from design mockups in real-time."
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Screenshot upload",
        "Mind map generation",
        "Export options"
      ],
      "tools": [
        "Next.js",
        "Supabase",
        "Upgrade via Zapier"
      ],
      "data_bootstrap": [
        "curate user-generated mind maps",
        "public educational resources"
      ],
      "risk": [
        "underestimating user adoption",
        "technical limitations in text extraction"
      ],
      "mitigation": [
        "focus group testing",
        "iterative user feedback loops"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Unlock your ideas visually",
        "Before/After mind map transformation"
      ],
      "channels": [
        "ProductHunt",
        "Slack communities",
        "Subreddits related to productivity"
      ],
      "pricing": {
        "free": "5 mind maps/month",
        "pro": "$9.99/month",
        "business": "$49.99/month"
      }
    },
    "moat": [
      "exclusive partnerships with educational institutions",
      "enhanced user insights for map improvements"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 7,
      "revenue_potential": 8,
      "defensibility": 6
    },
    "total_score": 29,
    "reasoning": "It combines visual learning trends with easy-to-use mapping, appealing to a broad audience of students and professionals."
  },
  {
    "title": "Snapshot Reader",
    "one_liner": "Convert scanned pages from books and articles into searchable text.",
    "why_now": "Growing digital archives and the push for accessibility create demand.",
    "novel_mechanism": "OCR combined with keyword searching to enhance the readability of captured content.",
    "ai_stack": [
      "Tesseract",
      "NLP",
      "Search Algorithms"
    ],
    "edge_use_cases": [
      "Researchers converting old literature into accessible formats.",
      "Book clubs sharing notes and highlighted themes from physical books."
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Image upload",
        "Text conversion",
        "Basic search capabilities"
      ],
      "tools": [
        "React",
        "Firebase",
        "Algolia for search"
      ],
      "data_bootstrap": [
        "collect sample public domain texts",
        "gather user submissions and feedback"
      ],
      "risk": [
        "Text recognition inaccuracies",
        "User privacy concerns"
      ],
      "mitigation": [
        "limit sensitive data collection",
        "enhance accuracy via user corrections"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Transform paper into data",
        "Revive forgotten texts"
      ],
      "channels": [
        "Instagram",
        "YouTube tutorials",
        "Niche academic forums"
      ],
      "pricing": {
        "free": "5 pages/month",
        "pro": "$5.99/month",
        "business": "$29.99/month"
      }
    },
    "moat": [
      "unique library of processed texts leading to community development",
      "AI improvements on user corrections"
    ],
    "scores": {
      "novelty": 9,
      "72h_feasibility": 8,
      "revenue_potential": 7,
      "defensibility": 7
    },
    "total_score": 31,
    "reasoning": "It leverages the untapped potential of converting physical texts into digital formats, appealing to academic and hobbyist markets."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
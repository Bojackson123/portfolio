export type Group = {
  label: string
  items: string[]
}

export const capabilities: Group[] = [
  {
    label: 'Languages',
    items: ['C#', 'TypeScript', 'JavaScript', 'Python', 'Java', 'SQL'],
  },
  {
    label: 'Frameworks',
    items: [
      '.NET',
      'ASP.NET Core',
      'EF Core',
      'React',
      'TanStack',
      'Tailwind CSS',
      'FastAPI',
      'Django',
      'Flask',
      'Express',
      'PyTorch',
      'scikit-learn',
    ],
  },
  {
    label: 'Cloud & AI',
    items: [
      'Azure',
      'Azure IoT Hub',
      'Azure AI Foundry',
      'Google Cloud',
      'Cloud Run',
      'Vertex AI',
      'Gemini API',
      'Google ADK',
      'MCP',
      'RAG',
      'LangChain',
      'AWS',
      'Docker',
      'n8n',
    ],
  },
  {
    label: 'Practices',
    items: [
      'Agile',
      'CI/CD',
      'DevOps',
      'QA & Playwright',
      'RBAC',
      'Requirements gathering',
      'Documentation',
    ],
  },
]

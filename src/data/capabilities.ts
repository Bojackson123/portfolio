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
      'React',
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
      'Vertex AI',
      'Google ADK',
      'MCP',
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

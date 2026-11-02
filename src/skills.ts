export interface SkillGroup {
  title: string;
  items: readonly string[];
}

export const skillGroups: readonly SkillGroup[] = [
  {
    "title": "Full-Stack",
    "items": [
      "JavaScript",
      "TypeScript",
      "Python",
      "React",
      "Next.js",
      "Redux Toolkit",
      "HTML",
      "CSS / SCSS",
      "Node.js",
      "Express",
      "NestJS",
      "FastAPI",
      "REST APIs",
      "GraphQL",
      "Apollo",
      "MongoDB",
      "Mongoose",
      "PostgreSQL",
      "JWT",
      "Socket.IO"
    ]
  },
  {
    "title": "DevOps",
    "items": [
      "Linux (Ubuntu)",
      "Nginx",
      "DNS",
      "Docker",
      "Docker Compose",
      "PM2",
      "GitHub Actions",
      "GitHub Pages",
      "Render"
    ]
  },
  {
    "title": "Agentic Development",
    "items": [
      "Codex",
      "Cursor",
      "AI-assisted implementation",
      "Task decomposition",
      "Context management",
      "Debugging",
      "Testing",
      "Code review"
    ]
  },
  {
    "title": "AI Engineering",
    "items": [
      "RAG",
      "Gemini API",
      "BGE embeddings",
      "ONNX Runtime",
      "PDF extraction",
      "Semantic retrieval",
      "Context management",
      "Source validation"
    ]
  },
  {
    "title": "AI / ML & Vision",
    "items": [
      "PyTorch",
      "OpenCV",
      "MediaPipe",
      "YOLOX",
      "torchvision",
      "NumPy",
      "pandas",
      "Matplotlib",
      "MobileNet",
      "Google Colab"
    ]
  },
  {
    "title": "Architecture & Security",
    "items": [
      "MVC",
      "Middleware",
      "Dependency Injection",
      "Decorators",
      "Role-based access control",
      "Session authentication",
      "Input validation"
    ]
  },
  {
    "title": "Tools & Testing",
    "items": [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "npm",
      "Yarn",
      "NVM",
      "Figma",
      "MongoDB Compass",
      "pytest",
      "unittest",
      "Jest",
      "React Testing Library"
    ]
  }
];

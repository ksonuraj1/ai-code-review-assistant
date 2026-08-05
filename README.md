# AI Code Review Assistant

A full-stack application that reviews source code using Large Language Models (LLMs).

The project was built to learn how modern AI-powered developer tools work by combining a React-based frontend, an Express backend, and an LLM for code analysis. Users can paste code into the editor, submit it for review, and receive feedback in Markdown format.

The project is still under active development, and new features are being added incrementally.

---

## Current Features

- Code editor powered by Monaco Editor
- AI-generated code reviews
- Markdown rendering for responses
- Express REST API
- Route → Controller → Service architecture
- TypeScript on both frontend and backend
- Modular project structure
- Reusable React components

---

## Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Monaco Editor
- Axios
- React Markdown

### Backend

- Node.js
- Express.js
- TypeScript

### AI

- Groq API
- Llama 3.3

---

## Project Structure

```
ai-code-review-assistant/

├── frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── services/
│   │   ├── types/
│   │   └── constants/
│
└── backend/
    ├── src/
    │   ├── controllers/
    │   ├── routes/
    │   ├── services/
    │   ├── providers/
    │   ├── app.ts
    │   └── server.ts
```

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/<your-username>/ai-code-review-assistant.git

cd ai-code-review-assistant
```

### Frontend

```bash
cd frontend

npm install

npm run dev
```

Runs on:

```
http://localhost:3000
```

### Backend

```bash
cd backend

npm install

npm run dev
```

Runs on:

```
http://localhost:5000
```

---

## Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000
GROQ_API_KEY=your_api_key
```

---

## API

### Review Code

**POST**

```
/api/review
```

Example request

```json
{
  "language": "javascript",
  "code": "function sum(a, b) { return a + b; }"
}
```

Example response

```json
{
  "success": true,
  "data": {
    "review": "# Overall Assessment\n..."
  }
}
```

---

## Why I Built This

Most AI coding assistants hide a lot of complexity behind a simple interface.

The goal of this project is to understand how those tools work by building one from scratch instead of only consuming an API.

While working on it, I focused on:

- Designing a clean backend architecture
- Separating business logic from routing
- Integrating an LLM into a REST API
- Rendering AI responses as Markdown
- Building reusable frontend components

---

## Roadmap

Planned improvements include:

- Syntax highlighting in AI responses
- Loading indicators
- Language selection
- Review history
- Authentication
- Multiple AI providers
- Streaming responses
- Export review as Markdown
- Docker support
- Deployment

---

## License

MIT

# Professional Portfolio Website

A modern, responsive portfolio website for frontend developers built with Next.js 14, Tailwind CSS, shadcn/ui components, Drizzle ORM, and PostgreSQL.

## Features

### Public Pages
- **Homepage**: Hero section, projects showcase, skills, about, and contact
- **Projects**: Filterable project gallery with category filtering
- **Project Detail**: Detailed project pages with gallery and information
- **About**: Professional bio, experience timeline, and education
- **Contact**: Contact form and information

### Admin Dashboard
- **Dashboard Overview**: Statistics and quick actions
- **Project Management**: Create, read, update, delete projects
- **Skill Management**: Add, edit, remove skills organized by categories
- **Content Management**: Edit about section and contact information
- **Media Library**: Upload and manage images

### Technical Features
- **Responsive Design**: Works on all device sizes
- **Dark/Light Mode**: Theme switching support
- **Animations**: Smooth transitions and hover effects
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Secure admin login with Better Auth
- **Docker**: Containerized development and production environments

## Tech Stack

- **Frontend**: Next.js 14 with App Router, React 19, TypeScript
- **Styling**: Tailwind CSS 4, shadcn/ui components
- **Animations**: Framer Motion
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Better Auth
- **Deployment**: Docker, Docker Compose
- **UI Components**: Radix UI, Lucide Icons

## Getting Started

### Prerequisites
- Node.js 18+
- Docker and Docker Compose
- PostgreSQL (via Docker)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-next-full
```

2. Install dependencies:
```bash
npm install
```

3. Copy environment variables:
```bash
cp .env.example .env
```

4. Start the development database:
```bash
npm run db:dev
```

5. Run database migrations:
```bash
npm run db:push
```

6. Start the development server:
```bash
npm run dev
```

### Docker Setup

1. Build and start all services:
```bash
npm run docker:up
```

2. Stop services:
```bash
npm run docker:down
```

## Project Structure

```
app/
  ├── api/              # API routes
  ├── dashboard/        # Admin dashboard pages
  ├── projects/         # Public projects pages
  ├── about/            # About page
  ├── contact/          # Contact page
  └── sign-in/          # Authentication pages

components/
  ├── ui/               # shadcn/ui components
  └── ...               # Custom components

db/
  ├── schema/           # Drizzle ORM schema
  └── index.ts          # Database client

public/                 # Static assets
```

## Database Schema

The portfolio uses PostgreSQL with the following tables:
- `users` - Authentication users
- `projects` - Portfolio projects
- `skills` - Technical skills
- `categories` - Project categories
- `about` - About section content
- `contact` - Contact information
- `media` - Uploaded media files

## API Endpoints

- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create a new project
- `GET /api/projects/[id]` - Get a specific project
- `PUT /api/projects/[id]` - Update a project
- `DELETE /api/projects/[id]` - Delete a project

Similar endpoints exist for skills, about, contact, and media.

## Development

### Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:dev` - Start development database
- `npm run db:push` - Push database schema
- `npm run db:studio` - Open Drizzle Studio
- `npm run docker:up` - Start all services with Docker

## Deployment

The application is containerized with Docker and can be deployed to any platform that supports Docker containers.

1. Build the Docker image:
```bash
npm run docker:build
```

2. Run with Docker Compose:
```bash
npm run docker:up
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

This project is licensed under the MIT License.
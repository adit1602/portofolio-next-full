Create a professional portfolio website for a frontend developer using Next.js 14, Tailwind CSS, shadcn/ui components, Drizzle ORM, PostgreSQL, and Docker. The website should have a modern, responsive design with interactive elements, smooth animations, and both public-facing pages and an admin dashboard for content management.

## Technical Requirements:
- Use Next.js 14 with App Router
- Implement Tailwind CSS for styling
- Use shadcn/ui components throughout
- Include Framer Motion for animations
- Set up Drizzle ORM with PostgreSQL database
- Create Docker configuration for development and production
- Implement authentication for admin dashboard
- Make the site fully responsive
- Include dark/light mode toggle

## Content Structure:

### Public Pages:
1. Header with navigation (Home, Projects, About, Contact)
2. Hero section with:
   - Professional headline
   - Short introduction
   - Call-to-action buttons
   - Developer image/avatar placeholder

3. Projects section with:
   - Filterable project grid (Web, Mobile, Design categories)
   - Project cards with:
     - Project image
     - Title and description
     - Technology tags
     - Links to live demo and code

4. Project Detail Pages with:
   - Full project description and story
   - Image gallery/slider
   - Detailed technology stack
   - Links to live demo and source code
   - Related projects section

5. Skills section organized by category:
   - Frontend Development (React, Next.js, Vue, TypeScript, JavaScript)
   - Mobile Development (React Native, Flutter, iOS, Android)
   - UI/UX Design (Figma, Adobe XD, User Research, Prototyping)

6. About section with:
   - Professional bio
   - Experience timeline
   - Education background
   - Personal interests

7. Contact section with:
   - Contact information
   - Social media links
   - Functional contact form

8. Footer with copyright and additional links

### Admin Dashboard:
1. Authentication system (login/logout)
2. Dashboard overview with statistics
3. Project management:
   - Create, read, update, delete projects
   - Upload project images
   - Manage project categories and tags
4. Skill management:
   - Add, edit, remove skills
   - Organize by categories
5. Content management for:
   - About section
   - Contact information
   - Site settings
6. Media library for image management

## Database Schema:
- Users table for authentication
- Projects table with fields for title, description, images, technologies, links, etc.
- Skills table with categories and proficiency levels
- Categories table for project classification
- Media table for uploaded images

## Design Requirements:
- Clean, modern design with proper spacing
- Professional color scheme with a primary accent color
- Smooth hover animations and transitions
- Interactive elements with subtle feedback
- Dark/light mode implementation
- Consistent design system across both public and admin interfaces

## Additional Features:
- Mobile-responsive navigation menu
- Project filtering functionality
- Smooth scrolling between sections
- Professional typography hierarchy
- Image optimization with Next.js Image component
- Form validation for contact forms and admin forms
- Toast notifications for user actions

## Docker Configuration:
- Dockerfile for Next.js application
- Docker Compose setup with PostgreSQL
- Environment variables configuration
- Development and production configurations

## API Routes:
- RESTful API endpoints for projects, skills, and other content
- Authentication API endpoints
- Image upload API endpoint

Please provide the complete code for:
1. All public pages and components
2. Admin dashboard with authentication
3. Database schema and Drizzle ORM setup
4. API routes for all functionality
5. Docker configuration files
6. Authentication middleware
7. Sample data for initial setup

Use TypeScript throughout the application and ensure all components are properly structured for a Next.js application. Include comprehensive error handling and loading states.

The application should be production-ready with proper security practices for authentication and database interactions.
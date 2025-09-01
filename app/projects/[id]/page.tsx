"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Github, 
  ExternalLink,
  Calendar,
  User,
  ArrowLeft
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Mock data for a single project
const project = {
  id: "1",
  title: "E-commerce Platform",
  description: "A full-featured online shopping platform with payment integration",
  content: `
    <p>This e-commerce platform was built with modern web technologies to provide a seamless shopping experience. The platform includes features such as product browsing, cart management, secure checkout, and order tracking.</p>
    
    <h3 className="text-xl font-semibold mt-6 mb-3">Key Features</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>User authentication and profile management</li>
      <li>Product search and filtering capabilities</li>
      <li>Shopping cart with real-time updates</li>
      <li>Secure payment processing with Stripe integration</li>
      <li>Order history and tracking system</li>
      <li>Admin dashboard for inventory management</li>
    </ul>
    
    <h3 className="text-xl font-semibold mt-6 mb-3">Technical Implementation</h3>
    <p>The frontend was built with React and Redux for state management, while the backend API was developed using Node.js and Express. MongoDB was used as the primary database for storing product and user information.</p>
    
    <p>Performance optimization techniques such as code splitting, lazy loading, and image optimization were implemented to ensure a fast and responsive user experience.</p>
  `,
  imageUrl: "/placeholder.svg",
  gallery: [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
  ],
  technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
  category: "Web",
  featured: true,
  githubUrl: "#",
  demoUrl: "#",
  date: "2023-06-15",
  client: "TechCorp Inc.",
};

export default function ProjectDetailPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-8">
        {/* Back Button */}
        <Button variant="outline" asChild className="mb-6">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
        
        {/* Project Header */}
        <div className="text-center mb-8">
          <Badge variant="secondary" className="mb-3">
            {project.category}
          </Badge>
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            {project.description}
          </p>
        </div>
        
        {/* Project Image */}
        <div className="relative h-96 rounded-lg overflow-hidden mb-8">
          <Image 
            src={project.imageUrl} 
            alt={project.title} 
            fill 
            className="object-cover"
          />
        </div>
        
        {/* Project Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2">
            <div className="prose max-w-none dark:prose-invert">
              <div dangerouslySetInnerHTML={{ __html: project.content }} />
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-muted/30 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Project Details</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Completed: {new Date(project.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span>Client: {project.client}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/30 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="outline">{tech}</Badge>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col gap-3">
              <Button asChild>
                <Link href={project.demoUrl}>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={project.githubUrl}>
                  <Github className="mr-2 h-4 w-4" />
                  View Source
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Gallery */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.gallery.map((image, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                <Image 
                  src={image} 
                  alt={`Gallery image ${index + 1}`} 
                  fill 
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Related Projects */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mock related projects */}
            <div className="border rounded-lg overflow-hidden">
              <div className="h-48 bg-muted relative">
                <Image 
                  src="/placeholder.svg" 
                  alt="Related project" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Task Management App</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Productivity app for teams to manage tasks
                </p>
                <div className="mt-3 flex gap-2">
                  <Badge variant="outline">Web</Badge>
                  <Badge variant="outline">React</Badge>
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg overflow-hidden">
              <div className="h-48 bg-muted relative">
                <Image 
                  src="/placeholder.svg" 
                  alt="Related project" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Mobile Banking App</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Secure banking application for iOS and Android
                </p>
                <div className="mt-3 flex gap-2">
                  <Badge variant="outline">Mobile</Badge>
                  <Badge variant="outline">React Native</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
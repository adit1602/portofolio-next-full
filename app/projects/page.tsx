"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Github, 
  ExternalLink,
  Filter,
  Code,
  Smartphone,
  Palette
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Mock data for projects
const allProjects = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "A full-featured online shopping platform with payment integration",
    imageUrl: "/placeholder.svg",
    technologies: ["React", "Node.js", "MongoDB"],
    category: "Web",
    featured: true,
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: "2",
    title: "Mobile Banking App",
    description: "Secure banking application for iOS and Android",
    imageUrl: "/placeholder.svg",
    technologies: ["React Native", "Firebase", "Redux"],
    category: "Mobile",
    featured: true,
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: "3",
    title: "Portfolio Website",
    description: "Modern portfolio website for designers",
    imageUrl: "/placeholder.svg",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "Web",
    featured: false,
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: "4",
    title: "Task Management App",
    description: "Productivity app for teams to manage tasks and projects",
    imageUrl: "/placeholder.svg",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    category: "Web",
    featured: false,
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: "5",
    title: "Fitness Tracker",
    description: "Mobile app for tracking workouts and nutrition",
    imageUrl: "/placeholder.svg",
    technologies: ["React Native", "GraphQL", "MongoDB"],
    category: "Mobile",
    featured: false,
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: "6",
    title: "Brand Identity Design",
    description: "Complete brand identity for a tech startup",
    imageUrl: "/placeholder.svg",
    technologies: ["Figma", "Adobe Illustrator"],
    category: "Design",
    featured: true,
    githubUrl: "#",
    demoUrl: "#",
  },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  
  const categories = ["All", "Web", "Mobile", "Design"];
  
  const filteredProjects = filter === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="container px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">My Projects</h1>
          <p className="mt-2 text-muted-foreground">
            A collection of my work and experiments
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className="flex items-center gap-2"
            >
              {category === "Web" && <Code className="h-4 w-4" />}
              {category === "Mobile" && <Smartphone className="h-4 w-4" />}
              {category === "Design" && <Palette className="h-4 w-4" />}
              {category === "All" && <Filter className="h-4 w-4" />}
              {category}
            </Button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-muted relative">
                <Image 
                  src={project.imageUrl} 
                  alt={project.title} 
                  fill 
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{project.title}</CardTitle>
                  <Badge variant="secondary">{project.category}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline">{tech}</Badge>
                  ))}
                </div>
                <div className="mt-6 flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <Link href={`/projects/${project.id}`}>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Details
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href={project.githubUrl}>
                      <Github className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { AuthButtons } from "@/components/auth-buttons";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin,
  ExternalLink,
  Download,
  Code,
  Palette,
  Smartphone
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioHome() {
  // Mock data for projects
  const projects = [
    {
      id: "1",
      title: "E-commerce Platform",
      description: "A full-featured online shopping platform with payment integration",
      imageUrl: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB"],
      category: "Web",
      featured: true,
    },
    {
      id: "2",
      title: "Mobile Banking App",
      description: "Secure banking application for iOS and Android",
      imageUrl: "/placeholder.svg",
      technologies: ["React Native", "Firebase", "Redux"],
      category: "Mobile",
      featured: true,
    },
    {
      id: "3",
      title: "Portfolio Website",
      description: "Modern portfolio website for designers",
      imageUrl: "/placeholder.svg",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      category: "Web",
      featured: false,
    },
  ];

  // Mock data for skills
  const skills = [
    { name: "React", category: "Frontend", proficiency: 90 },
    { name: "TypeScript", category: "Frontend", proficiency: 85 },
    { name: "Node.js", category: "Backend", proficiency: 80 },
    { name: "UI/UX Design", category: "Design", proficiency: 75 },
    { name: "React Native", category: "Mobile", proficiency: 70 },
    { name: "Python", category: "Backend", proficiency: 65 },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary"></div>
            <span className="text-lg font-bold">DevPortfolio</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <AuthButtons />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Hi, I&apos;m <span className="text-primary">Alex Johnson</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mt-2 text-muted-foreground">
                Frontend Developer & UI Designer
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
                I create beautiful, responsive web applications with modern technologies 
                and a focus on user experience.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="#projects">
                    View My Work
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#contact">
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </Link>
                </Button>
              </div>
              <div className="mt-8 flex gap-4">
                <Button variant="outline" size="icon">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Twitter className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="h-64 w-64 md:h-80 md:w-80 rounded-full bg-primary/10 flex items-center justify-center">
                <div className="h-56 w-56 md:h-72 md:w-72 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="h-48 w-48 md:h-64 md:w-64 rounded-full bg-primary/30 flex items-center justify-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-40 h-40 md:w-56 md:h-56" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <p className="mt-2 text-muted-foreground">
              Check out some of my recent work
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
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
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button variant="outline" size="sm">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link href="/projects">
                View All Projects
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Skills & Expertise</h2>
            <p className="mt-2 text-muted-foreground">
              Technologies I work with
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Frontend Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {skills.filter(s => s.category === "Frontend").map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.proficiency}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: `${skill.proficiency}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Smartphone className="h-5 w-5" />
                    Mobile Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {skills.filter(s => s.category === "Mobile").map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.proficiency}%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full" 
                            style={{ width: `${skill.proficiency}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="h-5 w-5" />
                    UI/UX Design
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {skills.filter(s => s.category === "Design").map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.proficiency}%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full" 
                            style={{ width: `${skill.proficiency}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">About Me</h2>
              <p className="mt-2 text-muted-foreground">
                My journey and experience
              </p>
            </div>
            
            <Card>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold">Frontend Developer</h3>
                    <p className="mt-4 text-muted-foreground">
                I&apos;m a passionate frontend developer with 5+ years of experience creating 
                modern web applications. I specialize in React, TypeScript, and building 
                responsive user interfaces.
              </p>
                    <p className="mt-4 text-muted-foreground">
                      My approach combines technical expertise with an eye for design, 
                      ensuring that the applications I build are not only functional but 
                      also visually appealing and user-friendly.
                    </p>
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold">Experience</h4>
                        <p className="text-muted-foreground">5+ Years</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Location</h4>
                        <p className="text-muted-foreground">San Francisco, CA</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Availability</h4>
                        <p className="text-muted-foreground">Freelance</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Remote</h4>
                        <p className="text-muted-foreground">Available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Get In Touch</h2>
              <p className="mt-2 text-muted-foreground">
                Let&apos;s work together on your next project
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <span>alex.johnson@example.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <span>San Francisco, California</span>
                  </div>
                  <div className="pt-4 flex gap-3">
                    <Button variant="outline" size="icon">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Twitter className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                        <input 
                          id="name" 
                          className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" 
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <input 
                          id="email" 
                          type="email" 
                          className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" 
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                      <input 
                        id="subject" 
                        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" 
                        placeholder="Subject"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="text-sm font-medium">Message</label>
                      <textarea 
                        id="message" 
                        rows={4} 
                        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" 
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    <Button className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-primary"></div>
              <span className="font-bold">DevPortfolio</span>
            </div>
            <div className="mt-4 md:mt-0 text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Alex Johnson. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Download,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Calendar,
  MapPin,
  Award,
  User
} from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="mt-2 text-muted-foreground">
            Get to know me better
          </p>
        </div>
        
        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-2xl font-bold">Frontend Developer & UI Designer</h2>
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
                    <div className="mt-6 flex gap-3">
                      <Button>
                        <Download className="mr-2 h-4 w-4" />
                        Download CV
                      </Button>
                      <Button variant="outline">
                        <Mail className="mr-2 h-4 w-4" />
                        Contact Me
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Personal Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <User className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Name</p>
                    <p className="font-medium">Alex Johnson</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">alex.johnson@example.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Date of Birth</p>
                    <p className="font-medium">January 1, 1990</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">San Francisco, CA</p>
                  </div>
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
          </div>
        </div>
        
        {/* Experience Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between">
                  <CardTitle>Senior Frontend Developer</CardTitle>
                  <Badge>Current</Badge>
                </div>
                <p className="text-muted-foreground">TechCorp Inc. • 2022 - Present</p>
              </CardHeader>
              <CardContent>
                <p>
                  Lead frontend development for multiple products, mentoring junior developers, 
                  and implementing modern React architectures.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">Tailwind CSS</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Frontend Developer</CardTitle>
                <p className="text-muted-foreground">Digital Solutions Ltd. • 2020 - 2022</p>
              </CardHeader>
              <CardContent>
                <p>
                  Developed responsive web applications for clients in various industries, 
                  focusing on performance optimization and accessibility.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="outline">Vue.js</Badge>
                  <Badge variant="outline">JavaScript</Badge>
                  <Badge variant="outline">SASS</Badge>
                  <Badge variant="outline">Webpack</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Junior Web Developer</CardTitle>
                <p className="text-muted-foreground">WebStart Agency • 2019 - 2020</p>
              </CardHeader>
              <CardContent>
                <p>
                  Built and maintained websites for small businesses, learning modern 
                  development practices and client communication.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="outline">HTML/CSS</Badge>
                  <Badge variant="outline">JavaScript</Badge>
                  <Badge variant="outline">WordPress</Badge>
                  <Badge variant="outline">PHP</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Education Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>MSc in Computer Science</CardTitle>
                <p className="text-muted-foreground">Stanford University • 2017 - 2019</p>
              </CardHeader>
              <CardContent>
                <p>
                  Specialized in Human-Computer Interaction and Web Technologies. 
                  Graduated with honors.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <Award className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">GPA: 3.8/4.0</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>BSc in Software Engineering</CardTitle>
                <p className="text-muted-foreground">MIT • 2013 - 2017</p>
              </CardHeader>
              <CardContent>
                <p>
                  Focused on web development and user experience design. 
                  Active in the Computer Science Club.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <Award className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Graduated with Distinction</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Interests Section */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">🎨</div>
                <h3 className="text-xl font-semibold">Design</h3>
                <p className="mt-2 text-muted-foreground">
                  Creating beautiful user interfaces and exploring new design trends
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">🏋️</div>
                <h3 className="text-xl font-semibold">Fitness</h3>
                <p className="mt-2 text-muted-foreground">
                  Regular gym sessions and outdoor activities to stay healthy
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">📖</div>
                <h3 className="text-xl font-semibold">Reading</h3>
                <p className="mt-2 text-muted-foreground">
                  Exploring tech books and articles to stay updated with industry trends
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
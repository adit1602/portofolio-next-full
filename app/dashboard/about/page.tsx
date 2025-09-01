import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Edit } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">About</h1>
          <p className="text-muted-foreground">
            Manage your about section
          </p>
        </div>
        <Button>
          <Edit className="mr-2 h-4 w-4" />
          Edit About
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>
              Your bio and personal details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" placeholder="Frontend Developer" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea 
                id="bio" 
                placeholder="Write a short bio about yourself..." 
                className="min-h-[120px]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="image">Profile Image URL</Label>
              <Input id="image" placeholder="https://example.com/image.jpg" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="resume">Resume URL</Label>
              <Input id="resume" placeholder="https://example.com/resume.pdf" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Experience & Education</CardTitle>
            <CardDescription>
              Your professional background
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-medium">Experience</h3>
              <div className="space-y-2 border p-4 rounded-lg">
                <Input placeholder="Job Title" />
                <Input placeholder="Company" />
                <div className="grid grid-cols-2 gap-2">
                  <Input placeholder="Start Date" />
                  <Input placeholder="End Date" />
                </div>
                <Textarea placeholder="Description" className="min-h-[80px]" />
              </div>
              <Button variant="outline" className="w-full">
                Add Experience
              </Button>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-medium">Education</h3>
              <div className="space-y-2 border p-4 rounded-lg">
                <Input placeholder="Degree" />
                <Input placeholder="Institution" />
                <div className="grid grid-cols-2 gap-2">
                  <Input placeholder="Start Date" />
                  <Input placeholder="End Date" />
                </div>
                <Textarea placeholder="Description" className="min-h-[80px]" />
              </div>
              <Button variant="outline" className="w-full">
                Add Education
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
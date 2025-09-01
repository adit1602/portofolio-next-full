import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  FolderOpen, 
  Code, 
  User, 
  Mail, 
  Image, 
  PlusCircle,
  ExternalLink
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Projects Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Projects</CardTitle>
            <FolderOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              3 featured, 9 published
            </p>
            <div className="mt-4">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/dashboard/projects">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Manage Projects
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Skills Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Skills</CardTitle>
            <Code className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              4 categories
            </p>
            <div className="mt-4">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/dashboard/skills">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Manage Skills
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* About Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">About</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Profile</div>
            <p className="text-xs text-muted-foreground">
              Personal information
            </p>
            <div className="mt-4">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/dashboard/about">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Edit About
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Contact Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Contact</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Info</div>
            <p className="text-xs text-muted-foreground">
              Contact details
            </p>
            <div className="mt-4">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/dashboard/contact">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Edit Contact
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Media Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Media</CardTitle>
            <Image className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">
              Images & files
            </p>
            <div className="mt-4">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/dashboard/media">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Manage Media
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions Card */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full" variant="outline" asChild>
              <Link href="/dashboard/projects/new">
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Project
              </Link>
            </Button>
            <Button className="w-full" variant="outline" asChild>
              <Link href="/dashboard/skills/new">
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Skill
              </Link>
            </Button>
            <Button className="w-full" variant="outline" asChild>
              <Link href="/">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Portfolio
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Projects */}
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((item) => (
            <Card key={item}>
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="bg-muted h-16 w-16 rounded-lg" />
                  <div>
                    <h3 className="font-semibold">Project {item}</h3>
                    <p className="text-sm text-muted-foreground">
                      Web Development
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/dashboard/projects/${item}`}>
                      Edit
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
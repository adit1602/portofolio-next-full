import { db } from "@/db";
import { projects } from "@/db/schema/portfolio";
import { eq, desc } from "drizzle-orm";
import { NextResponse } from "next/server";

// GET /api/projects - Get all projects
export async function GET() {
  try {
    const allProjects = await db
      .select()
      .from(projects)
      .where(eq(projects.published, true))
      .orderBy(desc(projects.createdAt));
    
    return NextResponse.json(allProjects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

// POST /api/projects - Create a new project (admin only)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const newProject = await db
      .insert(projects)
      .values({
        title: body.title,
        description: body.description,
        content: body.content,
        imageUrl: body.imageUrl,
        githubUrl: body.githubUrl,
        demoUrl: body.demoUrl,
        technologies: body.technologies,
        category: body.category,
        featured: body.featured || false,
        published: body.published || false,
        userId: body.userId,
      })
      .returning();
    
    return NextResponse.json(newProject[0]);
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 }
    );
  }
}
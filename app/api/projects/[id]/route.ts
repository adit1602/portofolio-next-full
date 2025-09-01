import { db } from "@/db";
import { projects } from "@/db/schema/portfolio";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

// GET /api/projects/[id] - Get a specific project
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const project = await db
      .select()
      .from(projects)
      .where(eq(projects.id, params.id))
      .limit(1);
    
    if (project.length === 0) {
      return NextResponse.json(
        { error: "Project not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json(project[0]);
  } catch (error) {
    console.error("Error fetching project:", error);
    return NextResponse.json(
      { error: "Failed to fetch project" },
      { status: 500 }
    );
  }
}

// PUT /api/projects/[id] - Update a project (admin only)
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    
    const updatedProject = await db
      .update(projects)
      .set({
        title: body.title,
        description: body.description,
        content: body.content,
        imageUrl: body.imageUrl,
        githubUrl: body.githubUrl,
        demoUrl: body.demoUrl,
        technologies: body.technologies,
        category: body.category,
        featured: body.featured,
        published: body.published,
        updatedAt: new Date(),
      })
      .where(eq(projects.id, params.id))
      .returning();
    
    if (updatedProject.length === 0) {
      return NextResponse.json(
        { error: "Project not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json(updatedProject[0]);
  } catch (error) {
    console.error("Error updating project:", error);
    return NextResponse.json(
      { error: "Failed to update project" },
      { status: 500 }
    );
  }
}

// DELETE /api/projects/[id] - Delete a project (admin only)
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const deletedProject = await db
      .delete(projects)
      .where(eq(projects.id, params.id))
      .returning();
    
    if (deletedProject.length === 0) {
      return NextResponse.json(
        { error: "Project not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ message: "Project deleted successfully" });
  } catch (error) {
    console.error("Error deleting project:", error);
    return NextResponse.json(
      { error: "Failed to delete project" },
      { status: 500 }
    );
  }
}
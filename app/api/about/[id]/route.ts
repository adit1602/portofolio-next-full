import { db } from "@/db";
import { about } from "@/db/schema/portfolio";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

// PUT /api/about/[id] - Update about information (admin only)
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const body = await request.json();
    
    const updatedAbout = await db
      .update(about)
      .set({
        title: body.title,
        content: body.content,
        imageUrl: body.imageUrl,
        resumeUrl: body.resumeUrl,
        experience: body.experience,
        education: body.education,
        updatedAt: new Date(),
      })
      .where(eq(about.id, id))
      .returning();
    
    if (updatedAbout.length === 0) {
      return NextResponse.json(
        { error: "About information not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json(updatedAbout[0]);
  } catch (error) {
    console.error("Error updating about info:", error);
    return NextResponse.json(
      { error: "Failed to update about information" },
      { status: 500 }
    );
  }
}

// DELETE /api/about/[id] - Delete about information (admin only)
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const deletedAbout = await db
      .delete(about)
      .where(eq(about.id, id))
      .returning();
    
    if (deletedAbout.length === 0) {
      return NextResponse.json(
        { error: "About information not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ message: "About information deleted successfully" });
  } catch (error) {
    console.error("Error deleting about info:", error);
    return NextResponse.json(
      { error: "Failed to delete about information" },
      { status: 500 }
    );
  }
}
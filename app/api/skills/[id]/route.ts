import { db } from "@/db";
import { skills } from "@/db/schema/portfolio";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

// GET /api/skills/[id] - Get a specific skill
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const skill = await db
      .select()
      .from(skills)
      .where(eq(skills.id, params.id))
      .limit(1);
    
    if (skill.length === 0) {
      return NextResponse.json(
        { error: "Skill not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json(skill[0]);
  } catch (error) {
    console.error("Error fetching skill:", error);
    return NextResponse.json(
      { error: "Failed to fetch skill" },
      { status: 500 }
    );
  }
}

// PUT /api/skills/[id] - Update a skill (admin only)
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    
    const updatedSkill = await db
      .update(skills)
      .set({
        name: body.name,
        category: body.category,
        proficiency: body.proficiency,
        icon: body.icon,
        updatedAt: new Date(),
      })
      .where(eq(skills.id, params.id))
      .returning();
    
    if (updatedSkill.length === 0) {
      return NextResponse.json(
        { error: "Skill not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json(updatedSkill[0]);
  } catch (error) {
    console.error("Error updating skill:", error);
    return NextResponse.json(
      { error: "Failed to update skill" },
      { status: 500 }
    );
  }
}

// DELETE /api/skills/[id] - Delete a skill (admin only)
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const deletedSkill = await db
      .delete(skills)
      .where(eq(skills.id, params.id))
      .returning();
    
    if (deletedSkill.length === 0) {
      return NextResponse.json(
        { error: "Skill not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ message: "Skill deleted successfully" });
  } catch (error) {
    console.error("Error deleting skill:", error);
    return NextResponse.json(
      { error: "Failed to delete skill" },
      { status: 500 }
    );
  }
}
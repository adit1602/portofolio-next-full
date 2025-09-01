import { db } from "@/db";
import { skills } from "@/db/schema/portfolio";
import { eq, desc } from "drizzle-orm";
import { NextResponse } from "next/server";

// GET /api/skills - Get all skills
export async function GET() {
  try {
    const allSkills = await db
      .select()
      .from(skills)
      .orderBy(desc(skills.createdAt));
    
    return NextResponse.json(allSkills);
  } catch (error) {
    console.error("Error fetching skills:", error);
    return NextResponse.json(
      { error: "Failed to fetch skills" },
      { status: 500 }
    );
  }
}

// POST /api/skills - Create a new skill (admin only)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const newSkill = await db
      .insert(skills)
      .values({
        name: body.name,
        category: body.category,
        proficiency: body.proficiency,
        icon: body.icon,
        userId: body.userId,
      })
      .returning();
    
    return NextResponse.json(newSkill[0]);
  } catch (error) {
    console.error("Error creating skill:", error);
    return NextResponse.json(
      { error: "Failed to create skill" },
      { status: 500 }
    );
  }
}
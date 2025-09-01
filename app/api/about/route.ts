import { db } from "@/db";
import { about } from "@/db/schema/portfolio";
import { eq, desc } from "drizzle-orm";
import { NextResponse } from "next/server";

// GET /api/about - Get about information
export async function GET() {
  try {
    const aboutInfo = await db
      .select()
      .from(about)
      .orderBy(desc(about.createdAt))
      .limit(1);
    
    if (aboutInfo.length === 0) {
      return NextResponse.json(null);
    }
    
    return NextResponse.json(aboutInfo[0]);
  } catch (error) {
    console.error("Error fetching about info:", error);
    return NextResponse.json(
      { error: "Failed to fetch about information" },
      { status: 500 }
    );
  }
}

// POST /api/about - Create about information (admin only)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const newAbout = await db
      .insert(about)
      .values({
        title: body.title,
        content: body.content,
        imageUrl: body.imageUrl,
        resumeUrl: body.resumeUrl,
        experience: body.experience,
        education: body.education,
        userId: body.userId,
      })
      .returning();
    
    return NextResponse.json(newAbout[0]);
  } catch (error) {
    console.error("Error creating about info:", error);
    return NextResponse.json(
      { error: "Failed to create about information" },
      { status: 500 }
    );
  }
}
import { db } from "@/db";
import { contact } from "@/db/schema/portfolio";
import { eq, desc } from "drizzle-orm";
import { NextResponse } from "next/server";

// GET /api/contact - Get contact information
export async function GET() {
  try {
    const contactInfo = await db
      .select()
      .from(contact)
      .orderBy(desc(contact.createdAt))
      .limit(1);
    
    if (contactInfo.length === 0) {
      return NextResponse.json(null);
    }
    
    return NextResponse.json(contactInfo[0]);
  } catch (error) {
    console.error("Error fetching contact info:", error);
    return NextResponse.json(
      { error: "Failed to fetch contact information" },
      { status: 500 }
    );
  }
}

// POST /api/contact - Create contact information (admin only)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const newContact = await db
      .insert(contact)
      .values({
        email: body.email,
        phone: body.phone,
        address: body.address,
        socialLinks: body.socialLinks,
        userId: body.userId,
      })
      .returning();
    
    return NextResponse.json(newContact[0]);
  } catch (error) {
    console.error("Error creating contact info:", error);
    return NextResponse.json(
      { error: "Failed to create contact information" },
      { status: 500 }
    );
  }
}
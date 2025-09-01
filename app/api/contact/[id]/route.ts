import { db } from "@/db";
import { contact } from "@/db/schema/portfolio";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

// PUT /api/contact/[id] - Update contact information (admin only)
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const body = await request.json();
    
    const updatedContact = await db
      .update(contact)
      .set({
        email: body.email,
        phone: body.phone,
        address: body.address,
        socialLinks: body.socialLinks,
        updatedAt: new Date(),
      })
      .where(eq(contact.id, id))
      .returning();
    
    if (updatedContact.length === 0) {
      return NextResponse.json(
        { error: "Contact information not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json(updatedContact[0]);
  } catch (error) {
    console.error("Error updating contact info:", error);
    return NextResponse.json(
      { error: "Failed to update contact information" },
      { status: 500 }
    );
  }
}

// DELETE /api/contact/[id] - Delete contact information (admin only)
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const deletedContact = await db
      .delete(contact)
      .where(eq(contact.id, id))
      .returning();
    
    if (deletedContact.length === 0) {
      return NextResponse.json(
        { error: "Contact information not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ message: "Contact information deleted successfully" });
  } catch (error) {
    console.error("Error deleting contact info:", error);
    return NextResponse.json(
      { error: "Failed to delete contact information" },
      { status: 500 }
    );
  }
}
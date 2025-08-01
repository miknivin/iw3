import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface ContactData {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  timestamp: string;
}

export async function GET() {
  try {
    const dbPath = path.join(process.cwd(), 'data', 'contacts.json');
    
    if (!fs.existsSync(dbPath)) {
      return NextResponse.json({ contacts: [] });
    }
    
    const fileContent = fs.readFileSync(dbPath, 'utf-8');
    const contacts: ContactData[] = JSON.parse(fileContent);
    
    // Sort by timestamp (newest first)
    contacts.sort((a: ContactData, b: ContactData) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    
    return NextResponse.json({ contacts });
  } catch (error) {
    console.error('Error reading contacts:', error);
    return NextResponse.json(
      { error: 'Failed to read contacts' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { error: 'Contact ID is required' },
        { status: 400 }
      );
    }
    
    const dbPath = path.join(process.cwd(), 'data', 'contacts.json');
    
    if (!fs.existsSync(dbPath)) {
      return NextResponse.json(
        { error: 'No contacts found' },
        { status: 404 }
      );
    }
    
    const fileContent = fs.readFileSync(dbPath, 'utf-8');
    const contacts: ContactData[] = JSON.parse(fileContent);
    
    const filteredContacts = contacts.filter((contact: ContactData) => contact.id !== id);
    
    fs.writeFileSync(dbPath, JSON.stringify(filteredContacts, null, 2));
    
    return NextResponse.json({ message: 'Contact deleted successfully' });
  } catch (error) {
    console.error('Error deleting contact:', error);
    return NextResponse.json(
      { error: 'Failed to delete contact' },
      { status: 500 }
    );
  }
}

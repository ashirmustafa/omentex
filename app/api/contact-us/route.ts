// pages/api/route.ts
import { NextRequest, NextResponse } from 'next/server';
import User from '@/app/model/user';
import dbConnect from '@/lib/dbConnect';

export async function POST(req: Request) {
  try {
    await dbConnect();

    const body = await req.json();
    const { firstName, lastName, email, companyName, message} = body;

    // Create a new user document
    const newUser = new User({
      firstName,
      lastName,
      email,
      companyName,
      message
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    return NextResponse.json({ message: 'User saved successfully', user: savedUser }, { status: 201 });
  } catch (error) {
    console.error('Error saving user:', error);
    return NextResponse.json({ message: 'Error saving user', error }, { status: 500 });
  }
}

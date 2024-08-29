
// import { Resend } from 'resend';
// import { EmailTemplate } from '@/components/email-template';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST() {
//   try {
//     const { data, error } = await resend.emails.send({
//       from: "omentexofficial@gmail.com" ,
//       to: "faizali9928@gmail.com",
//       subject: 'Hello world',
//       react: EmailTemplate({ firstName: 'John' }),
//     });

//     if (error) {
//       return Response.json({ error }, { status: 500 });
//     }

//     return Response.json(data);
//   } catch (error) {
//     return Response.json({ error }, { status: 500 });
//   }
// }










import { EmailTemplate } from '@/components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req:Request) {
    const body = await req.json();
    const {email , firstName} = body;
    console.log(body);
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ["omentexofficial@gmail.com"],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: "firstName" }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
  NextResponse.json({
    status: "OK"
  });
}


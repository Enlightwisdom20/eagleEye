"use server";

import { Resend } from "resend";
import { z } from "zod";

const ContactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().length(10, "Number should be exactly 10"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendContactEmail(formData: FormData) {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    phone: formData.get("phone"),
  };

  const result = ContactFormSchema.safeParse(raw);
  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;
    return { success: false, errors };
  }

  const { name, email, phone, message } = result.data;
  try {
    const { data } = await resend.emails.send({
      from: process.env.RESEND_EMAIL!,
      to: process.env.RESEND_EMAIL!,
      subject: `Contact form Submission by ${name}`,
      html: `${name} just submitted the contact form.<br>
Phone number: ${phone}<br>
Email: ${email}<br>
Message: ${message}<br>
`,
    });
    return { success: true, data };
  } catch (error) {
    console.error("Resend error:", error);
    return { success: false, errors: { server: ["Failed to send email."] } };
  }
}

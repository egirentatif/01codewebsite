"use server"

import { headers } from "next/headers"

export async function submitContactForm(formData: FormData) {
  // Set no-cache headers for this server action
  const headersList = headers()

  const name = formData.get("name")?.toString() || ""
  const email = formData.get("email")?.toString() || ""
  const message = formData.get("message")?.toString() || ""
  const subject = formData.get("subject")?.toString() || "Contact Form Submission"

  // Validate form data
  if (!name || !email || !message) {
    return {
      success: false,
      error: "All fields are required"
    }
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      error: "Please enter a valid email address"
    }
  }

  // Log form submission
  console.log("Contact form submission:", { name, email, subject, message })

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Return success response
  return {
    success: true,
    timestamp: new Date().toISOString()
  }

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Here you would typically send an email or save to a database
  // Example: await sendEmail({ to: 'admin@01code.com', subject: 'New Contact Form Submission', body: `Name: ${name}\nEmail: ${email}\nMessage: ${message}` })

  return {
    success: true,
    timestamp: new Date().toISOString(), // Add timestamp to ensure fresh responses
  }
}

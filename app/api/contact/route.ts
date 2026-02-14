import { NextResponse } from "next/server"

interface ContactPayload {
    name: string
    email: string
    subject: string
    message: string
}

function validateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function sanitize(str: string): string {
    return str.replace(/<[^>]*>/g, "").trim()
}

export async function POST(request: Request) {
    try {
        const body: ContactPayload = await request.json()

        const { name, email, subject, message } = body

        // Validate required fields
        const errors: string[] = []

        if (!name || sanitize(name).length < 2) {
            errors.push("Name must be at least 2 characters long.")
        }
        if (!email || !validateEmail(email)) {
            errors.push("Please provide a valid email address.")
        }
        if (!subject || sanitize(subject).length < 3) {
            errors.push("Subject must be at least 3 characters long.")
        }
        if (!message || sanitize(message).length < 10) {
            errors.push("Message must be at least 10 characters long.")
        }

        if (errors.length > 0) {
            return NextResponse.json(
                { success: false, errors },
                { status: 400 }
            )
        }

        // Sanitize all inputs
        const sanitizedData = {
            name: sanitize(name),
            email: sanitize(email),
            subject: sanitize(subject),
            message: sanitize(message),
            timestamp: new Date().toISOString(),
        }

        // Log the contact submission (in production, you would save to a database or send an email)
        console.log("Contact form submission received:", sanitizedData)

        return NextResponse.json(
            {
                success: true,
                message: "Thank you for your message! I will get back to you soon.",
            },
            { status: 200 }
        )
    } catch {
        return NextResponse.json(
            { success: false, errors: ["Something went wrong. Please try again."] },
            { status: 500 }
        )
    }
}

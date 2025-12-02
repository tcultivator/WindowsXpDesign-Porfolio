import { NextRequest, NextResponse } from "next/server";
import { sendMail } from "@/lib/sendGrid";
export async function POST(req: NextRequest) {
    const body = await req.json()
    console.log(body)
    try {
        await sendMail({
            to: body.messageFrom,
            sub: body.subject,
            message: `<div style="font-family: Arial, Helvetica, sans-serif; background-color: #f4f4f4; padding: 40px 20px;">
                        <p>From Email : <span>${body.messageFrom}</span></p>
                        <p>Message : <span>${body.message}</span></p>
                    </div>
            `
        })
        return NextResponse.json({ status: 200 })
    } catch (err) {
        console.error(err)
        return NextResponse.json({ status: 500 })
    }
}
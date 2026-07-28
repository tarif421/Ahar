import { connect } from "@/app/lib/db.Connect";
import { revalidatePath } from "next/cache";

const feedbackCollection = await connect("feedbacks");
export async function GET(request) {
  const result = await feedbackCollection.find().toArray();
  return Response.json(result);
}

export async function POST(request) {
  const { message } = await request.json();

  if (!message || typeof message !== "string") {
    return Response.json({ message: "please send a message" }, { status: 400 });
  }

  const newFeedback = {
    message,
    data: new Date().toISOString(),
  };

  const result = await feedbackCollection.insertOne(newFeedback);
  revalidatePath("/feedbacks");

  return Response.json(result);
}

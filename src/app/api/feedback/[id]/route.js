import { connect } from "@/app/lib/db.Connect";
import { ObjectId } from "mongodb";

// GET Handler
export async function GET(request, { params }) {
  const { id } = await params;

  if (id.length !== 24) {
    return Response.json(
      { status: 400, message: "send correct _id" },
      { status: 400 }
    );
  }

  const feedbackCollection = await connect("feedbacks");
  const query = { _id: new ObjectId(id) };
  const result = await feedbackCollection.findOne(query);

  if (!result) {
    return Response.json(
      { status: 404, message: "Feedback not found" },
      { status: 404 }
    );
  }

  return Response.json({ result });
}

// DELETE Handler
export async function DELETE(request, { params }) {
  const { id } = await params;

  if (id.length !== 24) {
    return Response.json(
      { status: 400, message: "send correct _id" },
      { status: 400 }
    );
  }

  const feedbackCollection = await connect("feedbacks");
  const query = { _id: new ObjectId(id) };
  const result = await feedbackCollection.deleteOne(query);

  return Response.json({ result });
}

// PATCH Handler
export async function PATCH(request, { params }) {
  const { id } = await params;

  if (id.length !== 24) {
    return Response.json(
      { status: 400, message: "send correct _id" },
      { status: 400 }
    );
  }

  // ১. প্যারামিটারের নাম 'request' রাখা হয়েছে এবং 'request.json()' দিয়ে পড়া হয়েছে
  const { message } = await request.json();

  if (!message || typeof message !== "string") {
    return Response.json(
      { message: "please send a valid message" },
      { status: 400 }
    );
  }

  const feedbackCollection = await connect("feedbacks");
  const query = { _id: new ObjectId(id) };
  const newData = {
    $set: {
      message,
    },
  };

  const result = await feedbackCollection.updateOne(query, newData);

  return Response.json({ result });
}
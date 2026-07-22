 export const feedback = [
  {
    id: 1,
    message: "Your food tests good",
  },
  {
    id: 2,
    message: "Your food id so YEAMMY",
  },
];
export async function GET(request) {
  return Response.json({
    status: 200,
    message: "Ahar Api is here",
  });
}

import db from "../../../lib/db";

export async function GET() {
  try {
    const result = await db.query("SELECT * FROM pages");
    return new Response(JSON.stringify(result.rows), {
      status: 200,
    });
  } catch (error) {
    console.error("Database query failed:", error);
    return new Response(JSON.stringify({ error: "Database query failed" }), {
      status: 500,
    });
  }
}

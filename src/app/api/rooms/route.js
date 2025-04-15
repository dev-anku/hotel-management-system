import prisma from "@/lib/prisma";

export async function GET() {
	try {
		// Fetch rooms from the database
		const rooms = await prisma.room.findMany();
		return new Response(JSON.stringify(rooms), { status: 200 });
	} catch (error) {
		return new Response("Error retrieving rooms", { status: 500 });
	}
}

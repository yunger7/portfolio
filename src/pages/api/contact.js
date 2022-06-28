import { Client } from "@notionhq/client";
import { contactSchema } from "@/utils";

const notion = new Client({ auth: process.env["NOTION_API_KEY"] });
const MESSAGES_DATABASE_ID = process.env["NOTION_MESSAGES_DATABASE_ID"];

export default async function handler(request, response) {
	if (request.method !== "POST") {
		response.setHeader("Allow", ["POST"]);

		return response
			.status(400)
			.json({ message: `Method ${request.method} not allowed` });
	}

	try {
		const parsedBody = contactSchema.parse(request.body);
		await sendMessage(parsedBody);

		return response.status(200).json({ message: "Message sent successfully" });
	} catch (error) {
		console.log(error);
		return response.status(500).json({ message: "Failed to send message" });
	}
}

async function sendMessage(data) {
	const { name, email, message } = data;

	try {
		await notion.pages.create({
			parent: {
				database_id: MESSAGES_DATABASE_ID,
			},
			properties: {
				Subject: {
					type: "title",
					title: [
						{
							type: "text",
							text: { content: `${name} made contact at luisgalete.com.br` },
						},
					],
				},
				Name: {
					rich_text: [
						{
							type: "text",
							text: { content: name },
						},
					],
				},
				Email: {
					email: email,
				},
			},
			children: [
				{
					type: "paragraph",
					paragraph: {
						rich_text: [
							{
								type: "text",
								text: { content: message },
							},
						],
					},
				},
			],
		});
	} catch (error) {
		throw new Error("Failed to communicate with Notion API");
	}
}

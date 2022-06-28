import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env["NOTION_API_KEY"] });
const messageDatabaseId = process.env["NOTION_MESSAGES_DATABASE_ID"];

export default async function contact(request, response) {
	console.log("[NEW REQUEST]: Send message");

	if (request.method !== "POST") {
		const message = `Method ${request.method} not allowed`;
		console.log(`[FAILED]: ${message}`);

		response.setHeader("Allow", ["POST"]);

		return response
			.status(400)
			.json({ message, success: false, code: "invalid_method", status: 400 });
	}

	try {
		await verifyBody(request.body);
		await sendMessage(request.body);

		const message = "Message send successfully";
		console.log(`[SUCCESS]: ${message}`);

		return response
			.status(200)
			.json({ message, success: true, code: "success", status: 200 });
	} catch (error) {
		console.log(`[FAILED]: ${error.message}`);
		return response.status(error.status).json(error);
	}
}

async function verifyBody(body) {
	const { name, email, message } = body;

	if (!name) {
		throw {
			message: "Missing 'name' value in body",
			success: false,
			code: "invalid_request",
			status: 400,
		};
	}

	if (!email) {
		throw {
			message: "Missing 'email' value in body",
			success: false,
			code: "invalid_request",
			status: 400,
		};
	}

	const emailRegEx =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (!emailRegEx.test(email)) {
		throw {
			message: "Invalid email",
			success: false,
			code: "invalid_request",
			status: 400,
		};
	}

	if (!message) {
		throw {
			message: "Missing 'message' value in body",
			success: false,
			code: "invalid_request",
			status: 400,
		};
	}

	if (message.length > 2000) {
		throw {
			message: "Message must be less or equal to 2000 characters",
			success: false,
			code: "invalid_request",
			status: 400,
		};
	}
}

async function sendMessage(body) {
	const { name, email, message } = body;

	try {
		const response = await notion.pages.create({
			parent: {
				database_id: messageDatabaseId,
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
						text: [
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
		throw {
			message: "Failed to send message",
			success: false,
			code: "internal_server_error",
			status: 500,
		};
	}
}

import NextImage from "next/image";

import { Group, ActionIcon, Text } from "@mantine/core";
import { NextLink } from "@mantine/next";

import { username } from "website.config";
import LogoImage from "public/logo.png";

export function Logo({ priority }) {
	return (
		<Group spacing="xs">
			<ActionIcon
				variant="transparent"
				component={NextLink}
				href="/"
				size="lg"
				aria-label="Home"
			>
				<NextImage
					priority={priority}
					src={LogoImage}
					alt=""
					width={32}
					height={32}
					quality={100}
				/>
			</ActionIcon>
			<Text
				component="span"
				size="lg"
				variant="gradient"
				weight={700}
				gradient={{ from: "blue", to: "cyan" }}
			>
				{username}
			</Text>
		</Group>
	);
}

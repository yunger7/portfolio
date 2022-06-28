import { ActionIcon, Badge } from "@mantine/core";

export function IconBadge({ children, icon, ActionIconProps, ...props }) {
	const Icon = (
		<ActionIcon
			component="span"
			variant="transparent"
			size="xs"
			radius="xl"
			sx={{ cursor: "default" }}
			{...ActionIconProps}
		>
			{icon}
		</ActionIcon>
	);

	return (
		<Badge leftSection={Icon} {...props}>
			{children}
		</Badge>
	);
}

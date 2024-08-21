import { Carousel } from "@mantine/carousel";

import { Image, ActionIcon, Center, UnstyledButton } from "@mantine/core";
import {
	CaretLeft as LeftIcon,
	CaretRight as RightIcon,
} from "tabler-icons-react";

export function ImageShowcase({ images }) {
	if (!images) return;

	return (
        <Carousel
            withIndicators
            loop
            controlSize={32}
        >
            {images.map(src => (
                <Carousel.Slide key={src}>
                    <Image
                        radius="sm"
                        src={src}
                        alt=""
                        width="100%"
                        height="100%"
                    />
                </Carousel.Slide>
			))}
        </Carousel>
	);
}

function ArrowButton({ clickHandler, hasNext, label, direction }) {
	const icons = {
		right: <RightIcon />,
		left: <LeftIcon />,
	};

	return (
		<Center
			sx={[
				{
					width: "5%",
					height: "100%",
					position: "absolute",
					top: 0,
					bottom: 0,
				},
				direction == "right" && { right: 10 },
				direction == "left" && { left: 10 },
			]}
		>
			<ActionIcon
				size="lg"
				radius="xl"
				variant="outline"
				disabled={!hasNext}
				aria-label={label}
				onClick={clickHandler}
				sx={{ zIndex: 1, opacity: 0.75 }}
			>
				{icons[direction]}
			</ActionIcon>
		</Center>
	);
}

function Indicator({ clickHandler, isSelected, index, label }) {
	return (
		<UnstyledButton
			aria-label={label}
			onClick={clickHandler}
			sx={theme => [
				{
					width: 10,
					height: 10,
					margin: "0 4px",
					borderRadius: "50%",
					backgroundColor: theme.colors.gray["6"],
					border: `1px solid ${theme.colors.gray["6"]}`,
				},
				isSelected && {
					backgroundColor: theme.white,
					boxShadow: theme.shadows.md,
				},
			]}
		/>
	);
}

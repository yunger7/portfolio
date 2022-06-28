import NextImage from "next/image";
import { useState, useCallback } from "react";

import { createStyles } from "@mantine/core";

const useStyles = createStyles({
	root: {
		transition: "all 600ms ease",
		zIndex: 2,
	},

	loading: {
		opacity: 0,
		transform: "translateY(5px)",
	},

	loaded: {
		opacity: 1,
		transform: "translateY(0)",
	},
});

export function SmoothImage(props) {
	const [loaded, setLoaded] = useState(false);
	const { classes, cx } = useStyles();

	const handleImageLoad = useCallback(() => {
		setLoaded(true);
	}, []);

	return (
		<NextImage
			{...props}
			className={cx(classes.root, {
				[classes.loading]: !loaded,
				[classes.loaded]: loaded,
			})}
			onLoadingComplete={handleImageLoad}
		/>
	);
}

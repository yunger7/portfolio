import { motion } from "framer-motion";

export function SmallSize({ color, delay }) {
	return (
		<svg
			viewBox="0 0 500 500"
			width="500"
			height="500"
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
		>
			<motion.g
				transform="translate(249.32284240123872 261.5945941295426)"
				animate={{
					transform: [
						null,
						"translate(250.27077476913178 249.20102698768963)",
						"translate(247.0374706780977 252.75054514161954)",
					],
				}}
				transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
			>
				<motion.path
					fill={color}
					d="M170 -101.5C203.2 -40.7 201.2 37.2 167 93.4C132.8 149.6 66.4 184.2 1.3 183.4C-63.8 182.7 -127.6 146.6 -162.5 90C-197.5 33.3 -203.5 -43.8 -171.6 -103.9C-139.7 -164 -69.9 -207 -0.7 -206.6C68.4 -206.2 136.8 -162.3 170 -101.5"
					animate={{
						d: [
							null,
							"M168 -99.3C202.1 -38 203.2 40 169.7 100.7C136.3 161.3 68.1 204.7 -1.9 205.8C-71.9 206.8 -143.8 165.7 -175.3 106.1C-206.9 46.5 -198.2 -31.4 -162.2 -93.8C-126.3 -156.3 -63.2 -203.1 1.9 -204.2C67 -205.3 133.9 -160.7 168 -99.3",
							"M170 -95.8C206.1 -35.7 211.3 44.7 177.8 102.2C144.3 159.7 72.2 194.3 4.5 191.7C-63.2 189.1 -126.3 149.3 -162.1 90.4C-197.9 31.6 -206.3 -46.2 -174.8 -103.8C-143.2 -161.3 -71.6 -198.7 -2.3 -197.3C67 -196 133.9 -156 170 -95.8",
						],
					}}
					transition={{
						delay,
						duration: 5,
						repeat: Infinity,
						repeatType: "reverse",
					}}
				></motion.path>
			</motion.g>
		</svg>
	);
}

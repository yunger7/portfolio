import { useState, useEffect } from "react";
import anime from "animejs";
import { v4 as uuidv4 } from "uuid";
import { NoSsr } from "@mui/material";

export function MediumSize({ color }) {
	const [blobId] = useState(uuidv4());

	useEffect(() => {
		anime({
			targets: `#blob-${blobId} path`,
			d: [
				{
					value:
						"M200.3 -110.2C243.6 -40.7 251.7 54.7 212.5 125.5C173.2 196.3 86.6 242.7 5.4 239.5C-75.8 236.4 -151.6 183.8 -189.7 113.7C-227.8 43.5 -228.2 -44.2 -190.3 -110.6C-152.4 -177 -76.2 -222 1.2 -222.7C78.5 -223.3 157 -179.7 200.3 -110.2",
				},
				{
					value:
						"M200.1 -117.7C240.8 -45 242.5 48 202.6 119.3C162.8 190.7 81.4 240.3 -2.6 241.8C-86.6 243.3 -173.2 196.7 -211.1 126.5C-249 56.2 -238.2 -37.5 -194.9 -111.7C-151.6 -185.8 -75.8 -240.4 1.9 -241.5C79.7 -242.7 159.3 -190.3 200.1 -117.7",
				},
				{
					value:
						"M194.4 -107.3C237.3 -38 247.3 55.2 209.4 124.1C171.5 193 85.7 237.5 -0.4 237.8C-86.6 238 -173.2 194 -215.1 122.8C-256.9 51.7 -254 -46.7 -210.7 -116.2C-167.4 -185.7 -83.7 -226.3 -4 -224C75.8 -221.8 151.6 -176.5 194.4 -107.3",
				},
			],
			easing: "easeInOutCubic",
			autoplay: true,
			direction: "alternate",
			duration: 15000,
			loop: true,
		});

		anime({
			targets: `#blob-${blobId} g`,
			transform: [
				{
					value: "translate(290.34911431878703 291.5252095786466)",
				},
				{
					value: "translate(301.34353888226735 299.84250987700284)",
				},
				{
					value: "translate(305.97639548929993 293.14603752652914)",
				},
			],
			easing: "easeInOutCubic",
			autoplay: true,
			direction: "alternate",
			duration: 15000,
			loop: true,
		});
	}, [blobId]);

	return (
		<NoSsr>
			<svg
				id={`blob-${blobId}`}
				viewBox="0 0 600 600"
				width="600"
				height="600"
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
			>
				<g transform="translate(290.34911431878703 291.5252095786466)">
					<path
						d="M200.3 -110.2C243.6 -40.7 251.7 54.7 212.5 125.5C173.2 196.3 86.6 242.7 5.4 239.5C-75.8 236.4 -151.6 183.8 -189.7 113.7C-227.8 43.5 -228.2 -44.2 -190.3 -110.6C-152.4 -177 -76.2 -222 1.2 -222.7C78.5 -223.3 157 -179.7 200.3 -110.2"
						fill={color}
					></path>
				</g>
			</svg>
		</NoSsr>
	);
}

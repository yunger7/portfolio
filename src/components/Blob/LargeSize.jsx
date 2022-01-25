import { useState, useEffect } from "react";
import anime from "animejs";
import { v4 as uuidv4 } from "uuid";
import { NoSsr } from "@mui/material";

import { palette } from "../../styles/theme";

export function LargeSize({ color }) {
	const [blobId] = useState(uuidv4());

	useEffect(() => {
		anime({
			targets: `#blob-${blobId} path`,
			d: [
				{
					value:
						"M224.3 -180.4C277.6 -112.1 298.7 -19.5 283.1 70.9C267.4 161.3 215.1 249.6 137.7 287.4C60.3 325.2 -42.1 312.6 -123 268.6C-203.9 224.6 -263.3 149.1 -287.2 60.9C-311 -27.4 -299.4 -128.4 -245.6 -196.9C-191.8 -265.3 -95.9 -301.1 -5.2 -297C85.5 -292.9 171 -248.7 224.3 -180.4",
				},
				{
					value:
						"M252.5 -200.2C312.1 -126.6 335 -22.5 313.4 71.4C291.9 165.3 226 248.9 142.6 284.5C59.3 320.2 -41.5 307.9 -129.2 266.4C-216.8 224.9 -291.2 154.2 -313.2 68.4C-335.2 -17.3 -304.8 -118.1 -243.9 -192C-182.9 -265.9 -91.5 -312.9 2.5 -314.9C96.4 -316.9 192.9 -273.8 252.5 -200.2",
				},
				{
					value:
						"M246.6 -201.3C303 -126 320.7 -24.4 296.8 62.8C273 150 207.7 222.8 125.2 264.2C42.7 305.5 -57 315.4 -135.1 278.5C-213.3 241.7 -269.9 158.1 -286.7 69.7C-303.5 -18.7 -280.3 -111.9 -225.9 -186.8C-171.5 -261.8 -85.7 -318.4 4.7 -322.1C95.1 -325.9 190.2 -276.7 246.6 -201.3",
				},
			],
			easing: "easeInOutCubic",
			autoplay: true,
			direction: "alternate",
			duration: 15000,
			loop: true,
		});

		anime({
			targets: `$blob-${blobId} g`,
			transform: [
				{
					value: "translate(380.41846545055114 368.76411598696245)",
				},
				{
					value: "translate(374.4830605282042 379.73086011044427)",
				},
				{
					value: "translate(367.4542029293084 385.46773526781146)",
				},
			],
			easing: "easeInOutCubic",
			autoplay: true,
			direction: "alternate",
			duration: 15000,
			loop: true,
		});
	}, []);

	return (
		<NoSsr>
			<svg
				id={`blob-${blobId}`}
				viewBox="0 0 750 750"
				width="750"
				height="750"
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
			>
				<g transform="translate(380.41846545055114 368.76411598696245)">
					<path
						d="M224.3 -180.4C277.6 -112.1 298.7 -19.5 283.1 70.9C267.4 161.3 215.1 249.6 137.7 287.4C60.3 325.2 -42.1 312.6 -123 268.6C-203.9 224.6 -263.3 149.1 -287.2 60.9C-311 -27.4 -299.4 -128.4 -245.6 -196.9C-191.8 -265.3 -95.9 -301.1 -5.2 -297C85.5 -292.9 171 -248.7 224.3 -180.4"
						fill={color}
					></path>
				</g>
			</svg>
		</NoSsr>
	);
}

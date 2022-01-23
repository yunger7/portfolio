import Head from "next/head";
import Image from "next/image";
import { Typography, Container, Box, useTheme } from "@mui/material";

import { WaveDivider } from "../components";
import { palette } from "../styles/theme";

import BackgroundImage from "../../public/background.jpg";

export default function Home() {
	const theme = useTheme();

	return (
		<Box>
			<Head>
				<title>Luís Galete | Home</title>
			</Head>
			<Box
				sx={{
					position: "relative",
					width: "100vw",
					maxWidth: "100%",
					height: "100vh",
					maxHeight: "100%",
					overflow: "hidden",
					zIndex: -1,

					"& img": {
						zIndex: -1,
						userSelect: "none",
					},

					"& > span": {
						backgroundColor: "rgba(0, 0, 0, 0.1) !important",
					},
				}}
			>
				<Image
					priority
					src={BackgroundImage}
					layout="fill"
					objectFit="cover"
					quality={100}
					placeholder="blur"
				/>
				<Box
					sx={{
						position: "absolute",
						left: "10%",
						top: "35%",
						color: palette.nord6,
					}}
				>
					<Typography
						variant="h1"
						sx={{ fontSize: "4rem !important", lineHeight: 1.1 }}
					>
						Luís Galete
					</Typography>
					<Typography component="p" variant="h2" sx={{ pl: 0.5 }}>
						Is building{" "}
						<Box component="span" sx={{ color: "primary.main" }}>
							cool
						</Box>{" "}
						things
					</Typography>
				</Box>
				<WaveDivider
					invert
					position="bottom"
					height={150}
					width={125}
					color={theme.palette.background.default}
				/>
			</Box>
			<Container component="main" maxWidth="lg" sx={{ pb: 10 }}>
				<Typography variant="h2">I have the CONTENT</Typography>
				<Typography variant="body1">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
					debitis vel expedita nam nesciunt sit voluptas? Dignissimos
					consectetur suscipit nam, quam ratione hic doloremque. Ullam tempora
					sunt velit voluptatibus numquam. Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Asperiores vero odit repellendus maiores
					quibusdam expedita ipsam atque neque provident recusandae, laboriosam,
					molestiae perspiciatis repudiandae, explicabo iusto? Explicabo at ex
					dolorem?
				</Typography>
			</Container>
		</Box>
	);
}

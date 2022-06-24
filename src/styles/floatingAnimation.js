import { keyframes } from "@mantine/core";

const variant1 = keyframes({
	"0%": {
		transform: "translate(0%, 0%) rotate(360deg)",
	},

	"25%": {
		transform: "translate(5%, 15%) rotate(360deg)",
	},

	"50%": {
		transform: "translate(10%, 5%) rotate(360deg)",
	},

	"75%": {
		transform: "translate(0%, 15%) rotate(360deg)",
	},

	"100%": {
		transform: "translate(0%, 0%) rotate(360deg)",
	},
});

const variant2 = keyframes({
	"0%": {
		transform: "translate(0%, 0%) rotate(360deg)",
	},

	"25%": {
		transform: "translate(0%, 10%) rotate(360deg)",
	},

	"50%": {
		transform: "translate(10%, 0%) rotate(360deg)",
	},

	"75%": {
		transform: "translate(5%, 5%) rotate(360deg)",
	},

	"100%": {
		transform: "translate(0%, 0%) rotate(360deg)",
	},
});

const variant3 = keyframes({
	"0%": {
		transform: "translate(0%, 0%) rotate(360deg)",
	},

	"25%": {
		transform: "translate(15%, 5%) rotate(360deg)",
	},

	"50%": {
		transform: "translate(5%, 10%) rotate(360deg)",
	},

	"75%": {
		transform: "translate(15%, 0%) rotate(360deg)",
	},

	"100%": {
		transform: "translate(0%, 0%) rotate(360deg)",
	},
});

export const floatingAnimation = {
	1: variant1,
	2: variant2,
	3: variant3,
};

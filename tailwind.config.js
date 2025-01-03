/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{ts,tsx,js,jsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#AB8ECD",
					dark: "#6C578A",
				},

				background: {
					DEFAULT: "#FAF7FC",
					dark: "#1A202C",
				},
			},
		},
	},
	plugins: [],
};

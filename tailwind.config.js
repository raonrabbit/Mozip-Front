/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"], // 다크 모드 설정
	content: ["./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
		extend: {
			colors: {
				// 공통 색상 변수
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: {
					DEFAULT: "hsl(var(--background))",
					foreground: "hsl(var(--foreground))",
					light: "#FAF7FC",
					dark: "#1A202C",
				},
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
					light: "#AB8ECD",
					dark: "#6C578A",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				header: {
					DEFAULT: "#FAF8FB",
					dark: "#1A1C2C",
				},
				shadow: {
					DEFAULT: "rgba(62, 48, 130, 0.15)",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"), // 애니메이션 플러그인
	],
};

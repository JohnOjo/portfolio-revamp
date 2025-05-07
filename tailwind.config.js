module.exports = {
content: ["./src/**/*.{js,ts,jsx,tsx}"], // adjust for your setup
    theme: {
        extend: {
        keyframes: {
            fadeFrames: {
            "0%": { opacity: "1" },
            "50%": { opacity: "0.7" },
            "100%": { opacity: "1" },
            },
            scaleFrames: {
            "0%": { transform: "scale3d(0.4, 0.4, 1)" },
            "50%": { transform: "scale3d(2.2, 2.2, 1)" },
            "100%": { transform: "scale3d(0.4, 0.4, 1)" },
            },
        },
        animation: {
            fade: "fadeFrames 200ms infinite",
            scale: "scaleFrames 2s infinite",
        },
        },
    },
    plugins: [],
};

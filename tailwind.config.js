module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                'sm': '440px',
            },
            gridTemplateColumns: {
                'auto': 'repeat(auto-fill, minmax(320px, 1fr))',
                'auto-170': 'repeat(auto-fill, minmax(170px, 1fr))',
                'sm': 'repeat(auto-fill, minmax(280px, 1fr))',
            },
            colors: {
                'primary-black': '#353535',
                'primary-gray': '#7B809A',
                'secondary-gray': '#D9D9D9',
                'primary-purple': '#7E41FF',
                'dark-purple': '#B6A2E1',
                'light-purple': '#FAF8FF',
            },
            backgroundImage: {
                'banner': "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/assets/images/png/rectangle2558.png')",
            },
            fontFamily: {
                customPrimary: ['IngiriArial', 'sans-serif'],
                customBold: ['BPG Nino Mtavruli', 'sans-serif'],
            },
            boxShadow: {
                custom: '0px 10px 20px 0px #0000001A',
            },

        },
    },
    plugins: [],
};

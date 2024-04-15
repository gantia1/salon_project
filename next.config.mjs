/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: [
        "antd",
        "@ant-design/plots",
        "@ant-design/icons",
        "@ant-design/icons-svg",
        "@ant-design/pro-components",
        "@ant-design/pro-layout",
        "@ant-design/pro-list",
        "@ant-design/pro-descriptions",
        "@ant-design/pro-form",
        "@ant-design/pro-skeleton",
        "@ant-design/pro-field",
        "@ant-design/pro-utils",
        "@ant-design/pro-provider",
        "@ant-design/pro-card",
        "@ant-design/pro-table",
        "rc-pagination",
        "rc-picker",
        "rc-util",
        "rc-tree",
        "rc-tooltip"
    ],
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
    i18n: {
        locales: ['ka', 'en'],
        defaultLocale: 'ka',
        localeDetection: false,
    }

};

export default nextConfig;

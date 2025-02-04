import { babel } from "@rollup/plugin-babel";

const config = {
    input: "src/index.js",
    output: {
        file: "dist/index.esm.js",
        format: "es",
    },
    external: [/@babel\/runtime/, "react"],
    plugins: [
        babel({
            babelHelpers: "runtime",
            plugins: ["@babel/plugin-transform-runtime"],
        }),
    ],
};

export default config;

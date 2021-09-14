import extensions from "rollup-plugin-extensions";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import command from "rollup-plugin-command";

const config = [
  {
    input: "./mod.ts",
    output: {
      dir: "dist",
      format: "cjs",
    },
    plugins: [
      extensions({
        extensions: [".ts", ".js"],
      }),
      typescript(),
      commonjs(),
      resolve(),
      command("./scripts/deno_to_node.sh"),
    ],
  },
];

export default config;

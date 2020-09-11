import path from "path";

export default {
  test: /\.(png|svg|jpg|gif)$/,
  include: path.resolve(__dirname, "../../src"),
  use: ["file-loader"],
};

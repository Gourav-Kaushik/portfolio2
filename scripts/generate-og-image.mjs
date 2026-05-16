import sharp from "sharp";
import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const svgPath = resolve(__dirname, "..", "public", "og-image.svg");
const pngPath = resolve(__dirname, "..", "public", "og-image.png");

const svgBuffer = readFileSync(svgPath);

sharp(svgBuffer)
  .resize(1200, 630)
  .png()
  .toFile(pngPath)
  .then(() => console.log("✅ og-image.png created"))
  .catch((err) => console.error("❌", err));

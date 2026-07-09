import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const logo = path.join(
  root,
  "public/images/brand/straight-line-fencing-logo.jpg"
);

const targets = [
  { out: path.join(root, "src/app/icon.png"), size: 512 },
  { out: path.join(root, "src/app/apple-icon.png"), size: 180 },
  { out: path.join(root, "public/icon-512.png"), size: 512 },
  { out: path.join(root, "public/icon-192.png"), size: 192 },
];

for (const target of targets) {
  await sharp(logo)
    .resize(target.size, target.size, { fit: "cover" })
    .png()
    .toFile(target.out);
  console.log(`Generated ${target.out}`);
}

console.log("Favicon generation complete.");

import fs from "fs";
import path from "path";
import https from "https";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "public", "images");
const blursPath = path.join(root, "src", "data", "imageBlurs.ts");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const DIRECTOR_SOURCE = path.join(
  root,
  "..",
  "..",
  "Users",
  "deepa",
  ".cursor",
  "projects",
  "c-AKHILESH-NVRR-FINAL",
  "assets",
  "c__Users_deepa_AppData_Roaming_Cursor_User_workspaceStorage_86b65161d43a7e85ea51d2f8121c54e1_images_director-10af8de9-e318-4b16-a06a-30ae1fecc0e4.png"
);

const REMOTE_IMAGES = [
  { file: "hero.webp", url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=85", width: 1920 },
  { file: "about.webp", url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=85", width: 1200 },
  { file: "about-building.webp", url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85", width: 1200 },
  { file: "chairman-hero.webp", url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=85", width: 1920 },
  { file: "investor-hero.webp", url: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&q=85", width: 1920 },
  { file: "land-bank-hero.webp", url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=85", width: 1920 },
  { file: "future-developments-hero.webp", url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=85", width: 1920 },
  { file: "csr-hero.webp", url: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1920&q=85", width: 1920 },
  { file: "amenities-hero.webp", url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85", width: 1920 },
  { file: "gallery-01.webp", url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=85", width: 800 },
  { file: "gallery-02.webp", url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85", width: 800 },
  { file: "gallery-03.webp", url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=85", width: 800 },
  { file: "gallery-04.webp", url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=85", width: 800 },
  { file: "gallery-05.webp", url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85", width: 800 },
  { file: "gallery-06.webp", url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=85", width: 800 },
  { file: "gallery-07.webp", url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=85", width: 800 },
  { file: "gallery-08.webp", url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=85", width: 800 },
  { file: "gallery-09.webp", url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=85", width: 800 },
  { file: "gallery-10.webp", url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=85", width: 800 },
  { file: "gallery-11.webp", url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=85", width: 800 },
  { file: "gallery-12.webp", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=85", width: 800 },
  { file: "testimonial-01.webp", url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=85", width: 200 },
  { file: "testimonial-02.webp", url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=85", width: 200 },
  { file: "testimonial-03.webp", url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=85", width: 200 },
];

function download(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          download(res.headers.location).then(resolve).catch(reject);
          return;
        }
        const chunks = [];
        res.on("data", (chunk) => chunks.push(chunk));
        res.on("end", () => resolve(Buffer.concat(chunks)));
        res.on("error", reject);
      })
      .on("error", reject);
  });
}

async function toWebp(input, output, width) {
  let pipeline = sharp(input).rotate();
  if (width) {
    pipeline = pipeline.resize({ width, withoutEnlargement: true });
  }
  await pipeline.webp({ quality: 82, effort: 4 }).toFile(output);
}

async function blurDataUrl(filePath) {
  const buffer = await sharp(filePath)
    .resize(10, 10, { fit: "inside" })
    .webp({ quality: 20 })
    .toBuffer();
  return `data:image/webp;base64,${buffer.toString("base64")}`;
}

async function main() {
  fs.mkdirSync(outDir, { recursive: true });
  const blurs = {};

  // Director image
  const directorOut = path.join(outDir, "director.webp");
  if (fs.existsSync(DIRECTOR_SOURCE)) {
    await toWebp(DIRECTOR_SOURCE, directorOut, 900);
    blurs["director.webp"] = await blurDataUrl(directorOut);
    console.log("✓ director.webp");
  } else {
    console.error("Director source image not found:", DIRECTOR_SOURCE);
    process.exit(1);
  }

  for (const item of REMOTE_IMAGES) {
    const output = path.join(outDir, item.file);
    try {
      const buffer = await download(item.url);
      const tempPath = output.replace(".webp", ".tmp");
      fs.writeFileSync(tempPath, buffer);
      await toWebp(tempPath, output, item.width);
      fs.unlinkSync(tempPath);
      blurs[item.file] = await blurDataUrl(output);
      console.log(`✓ ${item.file}`);
    } catch (err) {
      console.error(`✗ ${item.file}:`, err.message);
    }
  }

  const blurEntries = Object.entries(blurs)
    .map(([key, value]) => `  "${key}": "${value}",`)
    .join("\n");

  fs.writeFileSync(
    blursPath,
    `// Auto-generated by scripts/optimize-images.mjs\nexport const imageBlurs: Record<string, string> = {\n${blurEntries}\n};\n\nexport function getImageBlur(src: string): string | undefined {\n  const key = src.split("/").pop();\n  return key ? imageBlurs[key] : undefined;\n}\n`
  );

  console.log("\nGenerated imageBlurs.ts");
}

main();

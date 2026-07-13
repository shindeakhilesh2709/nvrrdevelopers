import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, "..", "public", "images");
const MIN_KB = 40;

async function compressFile(filePath) {
  const stat = fs.statSync(filePath);
  if (stat.size < MIN_KB * 1024) return null;

  const ext = path.extname(filePath).toLowerCase();
  const before = stat.size;
  const tempPath = `${filePath}.tmp`;

  let pipeline = sharp(filePath).rotate();
  if (ext === ".webp") {
    pipeline = pipeline.webp({ quality: 82, effort: 4 });
  } else if (ext === ".png") {
    pipeline = pipeline.png({ compressionLevel: 9, palette: true });
  } else {
    return null;
  }

  await pipeline.toFile(tempPath);
  const after = fs.statSync(tempPath).size;
  if (after < before) {
    const optimized = fs.readFileSync(tempPath);
    fs.writeFileSync(filePath, optimized);
    fs.unlinkSync(tempPath);
    return { file: path.basename(filePath), before, after };
  }

  fs.unlinkSync(tempPath);
  return null;
}

async function main() {
  const files = fs
    .readdirSync(imagesDir)
    .filter((f) => /\.(webp|png)$/i.test(f))
    .map((f) => path.join(imagesDir, f));

  const results = [];
  const skipped = [];
  for (const file of files) {
    try {
      const result = await compressFile(file);
      if (result) results.push(result);
    } catch (error) {
      const tempPath = `${file}.tmp`;
      if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
      skipped.push({
        file: path.basename(file),
        reason: error.code ?? error.message,
      });
    }
  }

  results.sort((a, b) => b.before - a.before);
  for (const r of results) {
    console.log(
      `${r.file}: ${Math.round(r.before / 1024)}KB -> ${Math.round(r.after / 1024)}KB`
    );
  }
  console.log(`\nCompressed ${results.length} files`);
  if (skipped.length) {
    console.warn(`Skipped ${skipped.length} locked files:`);
    for (const item of skipped) {
      console.warn(`- ${item.file} (${item.reason})`);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

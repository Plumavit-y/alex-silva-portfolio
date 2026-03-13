import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const imagesDir = join(__dirname, '../public/images');

async function convertToWebP(inputPath, outputPath, quality = 80) {
    try {
        const info = await sharp(inputPath)
            .webp({ quality })
            .toFile(outputPath);

        console.log(`✅ Converted: ${outputPath}`);
        console.log(`   Size: ${(info.size / 1024).toFixed(2)} KB`);
        return info;
    } catch (error) {
        console.error(`❌ Error converting ${inputPath}:`, error.message);
    }
}

async function processDirectory(dir) {
    try {
        const entries = await readdir(dir, { withFileTypes: true });

        for (const entry of entries) {
            const fullPath = join(dir, entry.name);

            if (entry.isDirectory()) {
                await processDirectory(fullPath);
            } else if (entry.name.endsWith('.png') || entry.name.endsWith('.jpg') || entry.name.endsWith('.jpeg')) {
                const outputPath = fullPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');

                // Adjust quality based on file type
                let quality = 80;
                if (entry.name.includes('profile')) {
                    quality = 85; // Higher quality for profile photos
                } else if (entry.name.includes('project')) {
                    quality = 75; // Lower quality for project screenshots (they're usually larger)
                }

                await convertToWebP(fullPath, outputPath, quality);
            }
        }
    } catch (error) {
        console.error(`❌ Error processing directory ${dir}:`, error.message);
    }
}

console.log('🔄 Starting PNG to WebP conversion...\n');
await processDirectory(imagesDir);
console.log('\n✨ Conversion complete!');

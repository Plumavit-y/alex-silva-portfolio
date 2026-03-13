const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// A simple way to get image dimensions using 'identify' if available, 
// but since I don't know if ImageMagick is installed, I'll try to find another way.
// Actually, I can use a small node script with a library or just read the PNG header if it's consistent.

function getPngDimensions(filePath) {
    const buffer = fs.readFileSync(filePath);
    if (buffer.toString('ascii', 1, 4) !== 'PNG') {
        throw new Error('Not a PNG file');
    }
    const width = buffer.readInt32BE(16);
    const height = buffer.readInt32BE(20);
    return { width, height };
}

const artDir = path.join('c:', 'Manquilef', 'Webs', 'Alex Silva Portafolio', 'public', 'images', 'art');
const files = ['2.png', '3.png', '4.png', '5.png', '6.png'];

files.forEach(file => {
    try {
        const dims = getPngDimensions(path.join(artDir, file));
        console.log(`${file}: ${dims.width}x${dims.height}`);
    } catch (e) {
        console.log(`${file}: Error - ${e.message}`);
    }
});

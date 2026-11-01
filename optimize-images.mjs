import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join } from 'path';

const assetsDir = './src/assets';
const publicDir = './public';

async function optimizeImages() {
  const files = await readdir(assetsDir);
  const imageFiles = files.filter(file => /\.(png|jpg|jpeg)$/i.test(file));
  
  for (const file of imageFiles) {
    const inputPath = join(assetsDir, file);
    const outputName = file.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    const outputPath = join(publicDir, outputName);
    
    console.log(`Optimizando ${file}...`);
    
    await sharp(inputPath)
      .resize(1200, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality: 85 })
      .toFile(outputPath);
    
    console.log(`✓ ${outputName} creado`);
  }
  
  console.log('\n✓ Todas las imágenes optimizadas!');
}

optimizeImages().catch(console.error);

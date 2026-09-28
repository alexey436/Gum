import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 1. Standalone Favicon SVG (Crisp vector for browser tabs)
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E1B18" />
      <stop offset="100%" stop-color="#0B0A09" />
    </linearGradient>
    <linearGradient id="brandGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFB326" />
      <stop offset="60%" stop-color="#FFA303" />
      <stop offset="100%" stop-color="#FF7A00" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="16" flood-color="#FFA303" flood-opacity="0.35" />
    </filter>
  </defs>

  <!-- Dark Rounded App Badge -->
  <rect x="24" y="24" width="464" height="464" rx="104" fill="url(#bgGrad)" stroke="#FFA303" stroke-opacity="0.25" stroke-width="8" />

  <!-- 3:16 Iconic Radiating Starburst Mark centered and scaled -->
  <g transform="translate(146, 96) scale(7.5)" filter="url(#glow)">
    <!-- Right vertical spine -->
    <rect x="20" y="2" width="5.5" height="38" rx="2.75" fill="url(#brandGold)" />
    <!-- Top-left diagonal ray -->
    <line x1="20" y1="21" x2="5" y2="9" stroke="url(#brandGold)" stroke-width="5.5" stroke-linecap="round" />
    <!-- Center horizontal left ray -->
    <line x1="20" y1="21" x2="3" y2="21" stroke="url(#brandGold)" stroke-width="5.5" stroke-linecap="round" />
    <!-- Bottom-left diagonal ray -->
    <line x1="20" y1="21" x2="5" y2="33" stroke="url(#brandGold)" stroke-width="5.5" stroke-linecap="round" />
  </g>
</svg>`;

// 2. Full Brand Logo SVG (Square format for Google Search Knowledge Graph & Schema.org)
const logoSquareSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
  <defs>
    <linearGradient id="logoBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1A1815" />
      <stop offset="100%" stop-color="#090807" />
    </linearGradient>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFB326" />
      <stop offset="50%" stop-color="#FFA303" />
      <stop offset="100%" stop-color="#FF7A00" />
    </linearGradient>
  </defs>

  <rect width="512" height="512" rx="64" fill="url(#logoBg)" />
  <rect x="8" y="8" width="496" height="496" rx="56" fill="none" stroke="#FFA303" stroke-opacity="0.2" stroke-width="4" />

  <!-- Center Emblem -->
  <g transform="translate(100, 100) scale(5.8)">
    <rect x="20" y="2" width="5.5" height="38" rx="2.75" fill="url(#gold)" />
    <line x1="20" y1="21" x2="5" y2="9" stroke="url(#gold)" stroke-width="5.5" stroke-linecap="round" />
    <line x1="20" y1="21" x2="3" y2="21" stroke="url(#gold)" stroke-width="5.5" stroke-linecap="round" />
    <line x1="20" y1="21" x2="5" y2="33" stroke="url(#gold)" stroke-width="5.5" stroke-linecap="round" />
  </g>

  <!-- Typography 3:16 GYM -->
  <g transform="translate(256, 395)" text-anchor="middle">
    <text font-family="Montserrat, Manrope, system-ui, sans-serif" font-weight="900" font-size="60" fill="#FFFFFF" letter-spacing="2">3:16</text>
    <text y="50" font-family="Montserrat, Manrope, system-ui, sans-serif" font-weight="900" font-size="34" fill="#FFA303" letter-spacing="10">GYM</text>
  </g>
</svg>`;

// 3. OpenGraph / Twitter Social Card SVG (1200 x 630)
const ogImageSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" fill="none">
  <defs>
    <radialGradient id="ogGlow" cx="25%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#FFA303" stop-opacity="0.18" />
      <stop offset="60%" stop-color="#FFA303" stop-opacity="0.02" />
      <stop offset="100%" stop-color="#0B0A09" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="goldLinear" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFB326" />
      <stop offset="50%" stop-color="#FFA303" />
      <stop offset="100%" stop-color="#FF7A00" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="#0C0B0A" />
  <rect width="1200" height="630" fill="url(#ogGlow)" />

  <!-- Subtle Grid lines -->
  <line x1="0" y1="530" x2="1200" y2="530" stroke="#FFFFFF" stroke-opacity="0.07" stroke-width="1" />
  <line x1="0" y1="100" x2="1200" y2="100" stroke="#FFFFFF" stroke-opacity="0.07" stroke-width="1" />

  <!-- Left Side: Large 3:16 Symbol Badge -->
  <g transform="translate(120, 165)">
    <!-- Dark rounded container -->
    <rect width="280" height="280" rx="48" fill="#171513" stroke="#FFA303" stroke-opacity="0.3" stroke-width="3" />
    <!-- Emblem -->
    <g transform="translate(68, 48) scale(5.2)">
      <rect x="20" y="2" width="5.5" height="38" rx="2.75" fill="url(#goldLinear)" />
      <line x1="20" y1="21" x2="5" y2="9" stroke="url(#goldLinear)" stroke-width="5.5" stroke-linecap="round" />
      <line x1="20" y1="21" x2="3" y2="21" stroke="url(#goldLinear)" stroke-width="5.5" stroke-linecap="round" />
      <line x1="20" y1="21" x2="5" y2="33" stroke="url(#goldLinear)" stroke-width="5.5" stroke-linecap="round" />
    </g>
  </g>

  <!-- Right Side: Content -->
  <g transform="translate(460, 175)">
    <!-- Small Category Pill -->
    <rect width="250" height="34" rx="8" fill="#FFA303" fill-opacity="0.12" stroke="#FFA303" stroke-opacity="0.4" stroke-width="1.5" />
    <text x="14" y="22" font-family="Manrope, system-ui, sans-serif" font-weight="800" font-size="13" fill="#FFA303" letter-spacing="2">МЕРЕЖА СПОРТИВНИХ КЛУБІВ</text>

    <!-- Main Title -->
    <text x="0" y="90" font-family="Montserrat, Manrope, system-ui, sans-serif" font-weight="900" font-size="64" fill="#FFFFFF" letter-spacing="1">3:16 GYM</text>

    <!-- Subtitle -->
    <text x="0" y="145" font-family="Manrope, system-ui, sans-serif" font-weight="700" font-size="24" fill="#D4D4D8">
      СМІЛА &amp; ЗОЛОТОНОША
    </text>

    <text x="0" y="185" font-family="Manrope, system-ui, sans-serif" font-weight="500" font-size="18" fill="#A1A1AA">
      Сучасні тренажери • Персональні тренери • Безліміт
    </text>

    <!-- Action Badge -->
    <g transform="translate(0, 220)">
      <rect width="320" height="48" rx="12" fill="#FFA303" />
      <text x="160" y="30" font-family="Manrope, system-ui, sans-serif" font-weight="800" font-size="14" fill="#000000" text-anchor="middle" letter-spacing="1.5">ПЕРШЕ ТРЕНУВАННЯ 0 ГРН</text>
    </g>
  </g>

  <!-- Footer Branding -->
  <text x="120" y="580" font-family="Manrope, system-ui, sans-serif" font-weight="700" font-size="15" fill="#71717A">
    @3.16gym (Сміла) · @3.16zolo (Золотоноша)
  </text>
  <text x="1080" y="580" font-family="Manrope, system-ui, sans-serif" font-weight="700" font-size="15" fill="#FFA303" text-anchor="end">
    316gym.ua
  </text>
</svg>`;

async function buildAssets() {
  console.log('Generating image assets in public/...');

  // Save SVG sources
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), faviconSvg, 'utf-8');
  fs.writeFileSync(path.join(publicDir, 'logo.svg'), logoSquareSvg, 'utf-8');

  // Render PNGs via Sharp
  const faviconBuffer = Buffer.from(faviconSvg);
  const logoBuffer = Buffer.from(logoSquareSvg);
  const ogBuffer = Buffer.from(ogImageSvg);

  // 1. Standard 32x32 Favicon PNG
  await sharp(faviconBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'favicon-32x32.png'));

  // 2. 16x16 Favicon PNG
  await sharp(faviconBuffer)
    .resize(16, 16)
    .png()
    .toFile(path.join(publicDir, 'favicon-16x16.png'));

  // 3. Apple Touch Icon (180x180)
  await sharp(faviconBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));

  // 4. Android / PWA 192x192
  await sharp(faviconBuffer)
    .resize(192, 192)
    .png()
    .toFile(path.join(publicDir, 'icon-192.png'));

  // 5. Android / PWA 512x512
  await sharp(faviconBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'icon-512.png'));

  // 6. Google Search & Schema.org Organization Logo (512x512 PNG)
  await sharp(logoBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'logo.png'));

  // 7. OpenGraph / Twitter Social Share Card (1200x630 PNG)
  await sharp(ogBuffer)
    .resize(1200, 630)
    .png()
    .toFile(path.join(publicDir, 'og-image.png'));

  console.log('All icons and SEO images successfully generated in public/!');
}

buildAssets().catch((err) => {
  console.error('Error generating assets:', err);
  process.exit(1);
});

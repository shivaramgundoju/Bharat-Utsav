#!/usr/bin/env node

import { execSync } from 'child_process';

console.log('🚀 Starting simple deployment...\n');

// Step 1: Clean
console.log('🧹 Cleaning...');
try {
  execSync('npm run clean', { stdio: 'inherit' });
  console.log('✅ Clean completed\n');
} catch (error) {
  console.log('⚠️  Clean failed, continuing...\n');
}

// Step 2: Build
console.log('⚡ Building...');
const startTime = Date.now();
try {
  execSync('npm run build', { stdio: 'inherit' });
  const buildTime = (Date.now() - startTime) / 1000;
  console.log(`✅ Build completed in ${buildTime.toFixed(2)}s\n`);
} catch (error) {
  console.error('❌ Build failed');
  process.exit(1);
}

console.log('🎉 Deployment completed successfully!');
console.log('\n📈 Your web app is ready for deployment!'); 
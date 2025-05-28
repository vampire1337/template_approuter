#!/usr/bin/env node
import { execSync } from 'node:child_process';
import { existsSync, copyFileSync } from 'node:fs';

console.log('📦  Installing packages...');
execSync('npm install', { stdio: 'inherit' });

console.log('🐶  Setting up Husky hooks...');
execSync('npx husky install', { stdio: 'inherit' });

if (!existsSync('.env.local') && existsSync('.env.example')) {
  copyFileSync('.env.example', '.env.local');
  console.log('🔑  .env.local created from .env.example');
}

console.log('✅  Bootstrap complete. Run `npm run dev` to start.');

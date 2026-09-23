import {defineConfig,devices} from '@playwright/test';

export default defineConfig({

  testDir : './tests',
  timeout:30*1000,
  fullyParallel:true,

  use:{

    browserName:'chromium',
    headless:false,
  }
});
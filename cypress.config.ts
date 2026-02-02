import { clerkSetup } from '@clerk/testing/cypress';
import { defineConfig } from 'cypress';
import {
  cleanupTestDocumentTypes,
  cleanupAllTestData,
  getTestCompanyId,
  closePool,
} from './cypress/support/db';

// Owner user ID from seed.ts
const OWNER_USER_ID = 'user_38XttXTm0XNDYKYMkyCUCgSnNjI';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    async setupNodeEvents(on, config) {
      // Database cleanup tasks
      on('task', {
        async cleanupTestDocumentTypes() {
          const companyId = await getTestCompanyId(OWNER_USER_ID);
          if (!companyId) return { deleted: 0, error: 'No company found' };
          const deleted = await cleanupTestDocumentTypes(companyId);
          return { deleted };
        },

        async cleanupAllTestData() {
          const companyId = await getTestCompanyId(OWNER_USER_ID);
          if (!companyId) return { error: 'No company found' };
          const result = await cleanupAllTestData(companyId);
          return result;
        },

        async getTestCompanyId() {
          const companyId = await getTestCompanyId(OWNER_USER_ID);
          return companyId;
        },
      });

      // Close pool on exit
      on('after:run', async () => {
        await closePool();
      });

      return clerkSetup({ config });
    },
    // Timeouts
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,
    // Viewport
    viewportWidth: 1920,
    viewportHeight: 1080,
    // Videos and screenshots
    video: false,
    screenshotOnRunFailure: true,
    // Retries
    // retries: {
    //   runMode: 2,
    //   openMode: 0,
    // },
  },
  env: {
    // These will be overridden by cypress.env.json or CLI
    test_user: 'yordanpz+clerk_test@hotmail.com',
    test_password: 'Caminandoando23.',
  },
});

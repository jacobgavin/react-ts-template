// jest.config.ts
import type { Config } from '@jest/types';
import { defaults } from 'jest-config';

// Sync object
const config: Config.InitialOptions = {
	verbose: true,
	moduleDirectories: ['node_modules'],
	moduleFileExtensions: [...defaults.moduleFileExtensions, 'js', 'ts', 'tsx'],
	setupFilesAfterEnv: ['./src/setupTests.ts'],
	
};
export default config;

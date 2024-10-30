import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	preset: 'ts-jest',
	testEnvironment: 'jest-environment-jsdom',
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	moduleNameMapper: {
		'\\.(css|scss)$': 'identity-obj-proxy',
		'\\.(gif|ttf|eot|svg|png|jpg|jpeg)$':
			'<rootDir>/src/test/__mocks__/fileMock.js',
		'^@/(.*)$': '<rootDir>/src/$1',
	},
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};

export default config;

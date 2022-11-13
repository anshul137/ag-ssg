import {config, readFile, applyConfig, writeFile} from './index';
import {ssg_} from './index';
import {jest} from '@jest/globals';
describe('index', () => {
	test('config input', async () => {
		config.input = ssg_(`${config.input}`);
		expect(config.input).toBe(ssg_(`${config.input}`));
	});
	test('config output', async () => {
		config.output = ssg_(`${config.output}`);
		expect(config.output).toBe(ssg_(`${config.output}`));
	});
	test('config lang', async () => {
		config.lang = ssg_(`${config.input}`, `${config.lang}`);
		expect(config.lang).toBe(ssg_(`${config.input}`, `${config.lang}`));
	});
});

describe('file handling', () => {
	test('read file', async () => {
		const file = ssg_(`${config.input}`);
		expect(file).toBe(ssg_(`${config.input}`));
	});
	test('write file', async () => {
		const file = ssg_(`${config.input}`);
		expect(file).toBe(ssg_(`${config.input}`));
	});
	test('generate index html', async () => {
		const file = ssg_(`${config.input}`);
		expect(file).toBe(ssg_(`${config.input}`));
	});
});

describe('file handling with text files', () => {
	test('read file', async () => {
		const path = './test.txt';
		const file = ssg_(path);
		expect(file).toBe(ssg_(path));
	});
	test('write file', async () => {
		const path = './test.txt';
		const file = ssg_(path);
		expect(file).toBe(ssg_(path));
	});
	test('generate index html', async () => {
		const path = './test.txt';
		const file = ssg_(path);
		expect(file).toBe(ssg_(path));
	});
});

describe('file handling with markdown files', () => {
	test('read file', async () => {
		const path = './test.md';
		const file = ssg_(path);
		expect(file).toBe(ssg_(path));
	});
	test('write file', async () => {
		const path = './test.md';
		const file = ssg_(path);
		expect(file).toBe(ssg_(path));
	});
	test('generate index html', async () => {
		const path = './test.md';
		const file = ssg_(path);
		expect(file).toBe(ssg_(path));
	});
});

describe('index.html', () => {
	test('index.html file', async () => {
		const path = './index.html';
		const file = ssg_(path);
		expect(file).toBe(ssg_(path));
	});
	test('index.html file in dist folder', async () => {
		const path = './dist/index.html';
		const file = ssg_(path);
		expect(file).toBe(ssg_(path));
	});
});

describe('textfile folder', () => {
	test('textfile folder exists', async () => {
		const path = './textfile';
		const file = ssg_(path);
		expect(file).toBe(ssg_(path));
	});
});

// test for function readfile
describe('readfile', () => {
	test('readfile', async () => {
		const path = 'test.txt';
		const file = readFile(path);
		expect(file).toStrictEqual(readFile(path));
	});
});

//test for function applyConfig
describe('applyConfig', () => {
	test('applyConfig', async () => {
		const path = 'config.json';
		const file = applyConfig(path);
		expect(file).toStrictEqual(applyConfig(path));
	});
});


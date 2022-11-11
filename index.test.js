import {config} from './index';
import {ssg_} from './index';

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

// file handling tests
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
// test file handling with text files
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
// test file handling with markdown files
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

// test to check if the index.html file is generated
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

//testing the if textfile folder contains the .txt files
describe('textfile folder', () => {
	test('textfile folder exists', async () => {
		const path = './textfile';
		const file = ssg_(path);
		expect(file).toBe(ssg_(path));
	});
});

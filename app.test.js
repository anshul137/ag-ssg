import {program} from './app';
import {ssg_} from './index';

describe('app', () => {
	test('version', async () => {
		program.version = '0.1.0';
		await expect(program.version).toBe('0.1.0');
	});
	test('input', async () => {
		program.input = ssg_(`${program.opts().input}`);
		await expect(program.input).toBe(ssg_(`${program.opts().input}`));
	});
	test('help', async () => {
		program.help = 'help';
		await expect(program.help).toBe('help');
	});
	test('lang', async () => {
		program.lang = ssg_(
			`${program.opts().input}`,
			`${program.opts().lang}`
		);
		await expect(program.lang).toBe(
			ssg_(`${program.opts().input}`, `${program.opts().lang}`)
		);
	});
	test('output', async () => {
		program.output = ssg_(`${program.opts().output}`);
		await expect(program.output).toBe(ssg_(`${program.opts().output}`));
	});
});

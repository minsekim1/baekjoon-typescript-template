class IO {
	private static fileName: string = '/dev/stdin';

	private static stdin: string;

	private static stdout: string = '';

	private static pointer: number = 0;

	private static read(): string {
		if (IO.stdin === undefined) {
			IO.stdin = require('fs').readFileSync(IO.fileName).toString();
		}

		let result: string = '';

		while (true) {
			if (IO.pointer >= IO.stdin.length) {
				break;
			}

			if (IO.stdin[IO.pointer] === ' ') {
				IO.pointer += 1;
				break;
			}

			if (IO.stdin[IO.pointer] === '\n') {
				IO.pointer += 1;
				break;
			}

			result += IO.stdin[IO.pointer];
			IO.pointer++;
		}

		return result;
	}

	public static readNumber(): number {
		return Number(IO.read());
	}

	public static readString(): string {
		return IO.read();
	}

	public static write(text: string): void {
		process.stdout.write(text);
		IO.stdout += text;
	}

	public static writeln(text: string): void {
		process.stdout.write(text + '\n');
		IO.stdout += text + '\n';
	}

	public static setDebugMode(): void {
		IO.fileName = 'data/input.txt';

		process.on('exit', (_code) => {
			const colors = require('colors');
			const output = require('fs').readFileSync('data/output.txt').toString();

			if (output === IO.stdout) {
				console.info('\n' + colors.green('TEST SUCCESS'));
			} else {
				console.error('\n' + colors.red('TEST FAILED'));
			}
		});
	}
}
class IO {
    static read() {
        if (IO.stdin === undefined) {
            IO.stdin = require('fs').readFileSync(IO.fileName).toString();
        }
        let result = '';
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
    static readNumber() {
        return Number(IO.read());
    }
    static readString() {
        return IO.read();
    }
    static write(text) {
        process.stdout.write(text);
        IO.stdout += text;
    }
    static writeln(text) {
        process.stdout.write(text + '\n');
        IO.stdout += text + '\n';
    }
    static setDebugMode() {
        IO.fileName = 'data/input.txt';
        process.on('exit', (_code) => {
            const colors = require('colors');
            const output = require('fs').readFileSync('data/output.txt').toString();
            if (output === IO.stdout) {
                console.info('\n' + colors.green('TEST SUCCESS'));
            }
            else {
                console.error('\n' + colors.red('TEST FAILED'));
            }
        });
    }
}
IO.fileName = '/dev/stdin';
IO.stdout = '';
IO.pointer = 0;

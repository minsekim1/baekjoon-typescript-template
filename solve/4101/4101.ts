// /// <reference path="../lib/index.ts" />

// IO.setDebugMode();

// let isFirst: boolean = false;

// while (true) {
// 	const firstValue = IO.readNumber();
// 	const secondValue = IO.readNumber();

// 	if (firstValue === 0 && secondValue === 0) {
// 		break;
// 	} else {
// 		if (isFirst === true) {
// 			IO.writeln('');
// 		}
// 		isFirst = true;
// 	}

// 	if (firstValue > secondValue) {
// 		IO.write('Yes');
// 	} else {
// 		IO.write('No');
// 	}
// }
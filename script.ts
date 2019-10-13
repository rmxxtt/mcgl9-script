import './mcgl9'; // обязательный импорт
import {setInterval} from './mcgl9/timers';
import console from './mcgl9/console';

// TODO: заменить на любой нужный вам код:

let text: Operation;

mcgl9.onInit(() => {
	console.log('Initialized');
	display.size(1, 1);
	text = display.print('');
});

mcgl9.onUpdate(() => {
	if (key.press(KeyCode.F)) {
		text.text = 'Respects paid';
	}
});

let curTime = Date.now();

function to() {
	console.log(`Executed after ${Date.now() - curTime}ms`);
	curTime = Date.now();
}

setInterval(to, 1000);
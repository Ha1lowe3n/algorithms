/* 
	TODO: Асимтотический анализ

	-----------------------------------------------
	! Во время Асимтотического анализа мы рассматриваем 2 величины:
	! 1 - ВРЕМЯ выполения (сложность алгоритма), 2 - ПАМЯТЬ

	Будем расматривать только расчет времени, 
	т.к. расчет памяти эквивалентен расчету времени

	! 3 основных случая, которые рассматриваются во время этих анализов:
	! 1 - worst case (худший случай)
	На практике практически всегда используется только этот случай,
	он показывает насколько долго будет работать алгоритм,
	если на вход получаем самый худший тест (самый долгий)

	* 2 и 3 случай вычисляются очень редко
	! 2 - best case (лучший случай)
	На вход получаем самый лучший тест

	! 3 - average case (средний случай)
	Несколько тестов, вычисляется среднее время
	-----------------------------------------------

	-----------------------------------------------
	! Абривиатуры:
	с - const
	O() - О-большое описивает скорость работы алгоритма
		n - n-ное кол-во времени
		1 - конкреное кол-во времени, не зависящее от входых параметров
*/

//	O(n)
//	время выполения алгоритма зависит от длины массива
//	n - это i, то есть i будет плюсоваться в зависимости от размера array
function search(array: number[], x: number) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === x) {
			return i
		}
	}
	return -1;
}

//	O(1)
/* 
	время выполнения алгоритма всегда одно и тоже,
	в данном случае всегда 3 шага - константное кол-во действий (с)
	с здесь никак не зависит от входных параметров
*/
let a = 5, b = 3;
function swap() {
	let temp = a
	a = b;
	b = temp;
}

//	O(1)
function cycle() {
	const c = 4
	for (let i = 0; i < c; i++) {
		console.log(i);
		
	}
	return -1;
}

//	O(n + m)
// 	мы не знаем, какая переменная будет больше, поэтому пишем так
function cycle_1(n: number, m: number) {
	for (let i = 0; i < n; i++) {
		console.log(i);
	}
	for (let i = 0; i < m; i++) {
		console.log(i);
	}
}	

//	O(n * m)
function cycle_2(n: number, m: number) {
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			console.log(i + j);
		}
	}
}

//	O(n^2)
function cycle_3(n: number) {
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			console.log(i + j);
		}
	}
}

//	O(n^3)
function cycle_4(n: number) {
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			for (let k = 0; k < n; k++) {
				console.log(i + j + k);
			}
		}
	}
}

//	O(n^3)
/* 
	при каждом прохождении родительского цикла
	j будет уменьшаться на 1 (n - 1)
	
	сумма чисел от 1 до n рассчитывается по формуле n * (n + 1) / 2
	n + (n-1) + (n-2) + ... + 1 = n * (n + 1) / 2
	n * (n + 1) / 2 = 1/2 * (n^2 + n) = O(n^2)
*/
function cycle_5(n: number) {
	for (let i = 0; i < n; i++) {
		for (let j = i; j < n; j++) { // n + (n-1) + (n-2)
			console.log(i);
			
		}
	}
}

//	O(n^3)
//	выбираем самый худший вариант
function cycle_6(n: number) {
	//	O(n)
	for (let i = 0; i < n; i++) { 
		console.log(i );
	}

	//	O(n^2)
	for (let i = 0; i < n; i++) { 
		for (let j = 0; j < n; j++) {
			console.log(i + j );
		}
	}

	//	O(n^3)
	for (let i = 0; i < n; i++) { 
		for (let j = 0; j < n; j++) {
			for (let k = 0; k < n; k++) {
				console.log(i + j + k);
			}
		}
	}
}

//	O(a + b^2 + c^3)
function cycle_7(a: number, b: number, c: number) {
	//	O(a)
	for (let i = 0; i < a; i++) { 
		console.log(i );
	}

	//	O(b^2)
	for (let i = 0; i < b; i++) { 
		for (let j = 0; j < b; j++) {
			console.log(i + j );
		}
	}

	//	O(c^3)
	for (let i = 0; i < c; i++) { 
		for (let j = 0; j < c; j++) {
			for (let k = 0; k < c; k++) {
				console.log(i + j + k);
			}
		}
	}
}

// 	O(log(a))
//	найти длину числа можно по формуле log10(a)
function findLengthNumber (a: number) {
	let result = 0;
	while (a !== 0) {
		a = (a - (a % 10)) / 10
		result += 1
	}
	return result
}

//	O(sqrt(n))
function cycleSqrt(n: number) {
	//	sqrt довольно медленна
	for (let i = 0; i < Math.sqrt(n); i++) {
		console.log(i);
	}

	//	более быстрый вариант 
	for (let i = 0; i * i < n; i++) {
		console.log(i);
	}
}


// 1- misol

// let arr = [55, 3, 2, 11, 3, 4, 6, 7, 12];
// console.log(arr.sort((a, b) => a - b));

// 2-misol

// 3-misol

// let arrOne = [2, 4, 5, 6, 6, 3, 2, 1];
// let arrTwo = [];

// arrOne.forEach((number) => {
// 	if (!arrTwo.includes(number)) {
// 		arrTwo.push(number);
// 	}
// });
// console.log(arrTwo.sort());

// 4-misol
// let arr = [2, 4, 5, 6, 6, 3, 2, 1];
// let result = arr[0];
// arr.filter((item) => {
// 	if (result < item) {
// 		result = item;
// 	}
// });
// console.log(result);

// 5-misol
// let arr = [1, 5, 8, 9, 10];
// arr.find((value, index) => {
// 	if (index == 0) {
// 		arr.push(value);
// 		arr.shift();
// 	}
// });

// console.log(arr);

// 6- misol
// let arr = [1, 5, 8, 9, 10];
// console.log(arr.reverse());

// 7-misol
// let arr = [5, 4, 36, 7, 8, 3, 2, 9, 6, 1];

// arr.forEach((item, index) => {
// 	if (index % 2 != 0) {
// 		console.log(item);
// 	}
// });

// 8 - misol
// let arr = [5, 4, 36, 7, 8, 3, 2, 9, 6, 1];

// let arrOdd = arr.filter((item, index) => index % 2 != 0);
// console.log(arrOdd);

// 9 - misol
// let arr = [5, 4, 36, 7, 8, 3, 2, 9, 6, 1];

// let arrOdd = arr.filter((item, index) => index % 2 != 0);
// console.log(Math.max(...arrOdd));

// 10 - misol
// let arr = [2, 1, 3, 8, 4];
// let a = arr.indexOf(Math.max(...arr));
// let b = arr.indexOf(Math.min(...arr));
// arr.map((item, index) => console.log(arr.splice(b, a)));

// 11- misol
// function oddNUmbers() {
// 	let arr = [5, 4, 35, 7, 8, 3, 2, 9, 6, 1];
// 	let oddNUmber = arr.filter((item) => item % 2 != 0);
// 	return console.log(oddNUmber);
// }
// oddNUmbers();

// 13 - misol
// let arrOne = [2, 4, 5, 6, 6, 3, 2, 1];
// let arrTwo = [];

// arrOne.forEach((number) => {
// 	if (!arrTwo.includes(number)) {
// 		arrTwo.push(number);
// 	}
// });
// console.log(arrTwo);

// 14 - misol
// function evenNumber() {
// 	let arr = [5, 4, 36, 7, 8, 3, 2, 9, 6, 1];
// 	let result = arr[0];
// 	arr.filter((item, index) => {
// 		if (index % 2 == 0 && result > item) {
// 			result = item;
// 		}
// 	});
// 	return console.log(result);
// }
// evenNumber();

// var x = ['apple','Orange','grapes'];
// let y = x[Symbol.iterator]();

// y.next();

// let num = [100,200,300,400,500,600];

// let iter = num[Symbol.iterator]();

// console.log(iter.next().value);

// result = iter.next();

// while(!result.done){
// 	console.log(result.value);
// 	result = iter.next();
// }

// let str = "sunil khinchi";	
// let iter = str[Symbol.iterator]();


// let result = iter.next();

// for(let a of str){
// 	console.log(a);
// }

// while(!result.done){
// 	console.log(result.value);
//     result = iter.next();
// }




// while(!result.done){
// 	console.log(result.value);
// 	result = iter.next();

// }
// console.log(typeof namber[Symbol.iterator]);
// for(var i = 0; i < namber.length; i++){
// 	document.write(namber[i] + "<br>");
// }
// console.log(namber);





function numberinterator(arr){
	var nextNum = 0;
	return {
		nextbs(){
			if(nextNum < arr.length){
            	return {
					value : arr[nextNum++],
					done : false
				}
			}else{
				return {
					
					done : true
				}
			}

		
		}
	}
}

let numbers = [200,300,400,500];
let num = numberinterator(numbers);
console.log(num.nextbs().value);
console.log(num.nextbs().value);
console.log(num.nextbs().value);
console.log(num.nextbs().value);
console.log(num.nextbs().value);
console.log(num.nextbs().value);
console.log(num.nextbs().value);
console.log(num.nextbs().value);
console.log(num.nextbs().value);
console.log(num.nextbs().value);
console.log(num.nextbs().value);


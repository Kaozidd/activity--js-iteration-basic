//------------------------------------------------------------------
// TASK : hasQ()
//   Write a function called hasQ that accepts a string and returns true/false
//   for whether that string has the word 'q' in it.

//   NOTE: You must build the function so that it can detect capital letters
//------------------------------------------------------------------

// function hasQ(string) {
// 	let bool = false;
// 	for (let i=0; i<string.length; i++) {
// 		if (string[i] === 'q' || string[i] === 'Q') {
// 			bool = true;
// 		}
// 	}
// 	return bool;
// }




// function hasQ(string) {
// 	let bool = false;
// 	for (let i=0; i<string.length; i++) {
// 		if (string[i].toUpperCase() === 'Q') {
// 			bool = true;
// 		}
// 	}
// 	return bool;
// }



function hasQ(string) {
	let bool = false;
	for (let i=0; i<string.length; i++) {
		if (string[i].toLowerCase() === 'q') {
			bool = true;
		}
	}
	return bool;
}

var output1 = hasQ("my mother enjoys quilting.")
var output2 = hasQ("i'm not wearing any socks.")
var output3 = hasQ("I went to a quarry to pick up some stone slabs.")
var output4 = hasQ("My brain is made of cheese and my knees are jelly")
var output5 = hasQ("Quit yelling in my ear.")
var output6 = hasQ("My best friend's name is Quincy.")

console.assert(output1 === true )
console.assert(output2 === false )
console.assert(output3 === true)
console.assert(output4 === false)
console.assert(output5 === true)
console.assert(output6 === true)

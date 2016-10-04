
export const isNumberEven = (i) => {
  // i will be an integer.
  // Return true if it's even, and false if it isn't.
	return i%2==0;
};

export const getFileExtension = (str) => {
  // str will be a string, but it may not have a file extension.
  // Return the file extension (with no period) if it has one, otherwise false

	let s = str.split('.');
		
	if(s.length == 1) {
		return false;
	}
	else {

		return s[s.length-1];
	}
};

export const longestString = (arr) => {
  // arr will be an array.
  // Return the longest string in the array
	//let a = arr.join('-').split('-');
	let long = "";
	for (let v of arr) {
		if(typeof(v) == "string")
			if(v.length > long.length)
				long = v;
		
	}
	
	return long;
	
};

export const reverseString = (str) => {
  // str will be an string
  // Return a new string who's characters are in the opposite order to str's.
	let arr = str.split("")
	arr.reverse();
	return arr.join("");
};

export const isPalindrome = (str) => {
  // str will be an string
  // Return true if it is a palindrome and false otherwise.
  // It should be case insensitive and not consider space or punctuation
	
	str = str.toLowerCase();
	let arr = str.split("");
	arr.reverse();
	let str2 = arr.join("");
	if(str === str2)
		return true;
	else
		return false;
	
};

export const nestedSum = (arr) => {
  // arr will be an array, containing integers, strings and/or arrays like itself
  // Return the sum all the numbers you find, anywhere in the nest of arrays.

	let long = 0;
	
	for (let v of arr) {
		if(typeof(v) == "number")
			long += v;
		
		else if(Array.isArray(v))
			long += nestedSum(v)
	}
	
	return long;
};

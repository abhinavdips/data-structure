//remove duplicate from array

let arr = [1,2,2,3,3,4,4,5,6,8,8,8,8,8]
let len = arr.length;
let j=0;

for(var i=0; i<len; i++){
	if(arr[i] !== arr[i+1]){
		arr[j] = arr[i]
		j= j+1;
	}
}

console.log(arr.slice(0,j));





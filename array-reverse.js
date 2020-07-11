// reverse an array

let arr = [1,2,3,4,5,6,7,8]            
let e=arr.length-1
let s;
let tmp;

for(s=0; s<e; s++,e--){
	tmp = arr[s]
	arr[s] = arr[e]
	arr[e] = tmp
}
console.log(arr)
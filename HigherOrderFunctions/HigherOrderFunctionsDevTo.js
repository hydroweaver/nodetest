function high(i, fun){
	var x = fun(10);
	return i + x;
}

function called(n){
	return n*10;
}

var s = high(10, called);
console.log(s);


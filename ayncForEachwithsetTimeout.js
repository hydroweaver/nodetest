function asyncForEach(array, callback){
	array.forEach((item)=>{
		setTimeout(function() {callback(item);}, 1000);
	});
}

asyncForEach([1, 2, 3, 4], function(item) {
		console.log(item);
	});
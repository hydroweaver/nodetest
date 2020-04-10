//Code from https://dev.to/nas5w/what-is-a-higher-order-function-5gk9

userInfo = {
	name: "karan",
	age: 32,
	password: "xyz123456"
};

validation_tests = [

function checkUserPasswordLength(userInfo){
	return userInfo.password.length > 4;
},

function checkUserAge(userInfo){
	return userInfo.age >= 18;
}

];

function checkUserPasswordLength(userInfo){
	return userInfo.password.length > 4;
}

function checkUserAge(userInfo){
	return userInfo.age >= 18;
}

//Implementation1 - Validation Functions not passed in Arguments
function HigherOrderFunc(userInfo){
	for(var i = 0; i < validation_tests.length; i++){
		console.log('Testing ', validation_tests[i], '...');
		if(validation_tests[i](userInfo) == false){
			console.log("\x1b[31m",'One Test Failed', "\x1b[0m");
			return false;
		}
	}
	console.log("\x1b[32m", "All Tests Passed", "\x1b[0m");
	return true;
};

//Implementation2 - Validation Functions passed in Arguments
function HigherOrderFuncWithArgs(userInfo, ...tests){
	for(var i = 0; i < tests.length; i++){
		if(tests[i](userInfo) == false){
			console.log("\x1b[31m",'One Test Failed', "\x1b[0m");
			return false;
		}
	}
	console.log("\x1b[32m", "All Tests Passed", "\x1b[0m");
	return true;
}


HigherOrderFunc(userInfo);
HigherOrderFuncWithArgs(userInfo, checkUserPasswordLength, checkUserAge);

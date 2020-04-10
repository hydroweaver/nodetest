//Code from https://dev.to/nas5w/what-is-a-higher-order-function-5gk9

userInfo1 = {
	name: "karan",
	age: 32,
	password: "xyz123456"
};

userInfo2 = {
	name: "karan",
	age: 17,
	password: "abcd"
};

function checkUserPasswordLength(userInfo){
	return userInfo.password.length > 4;
}

function checkUserAge(userInfo){
	return userInfo.age >= 18;
}

//This implementation removes the need for writing HigherOrderFuncwithArgs(userInfo, test1, test2...)
	
function createValidatorOnAssignation(...tests){
	return function(userInfo){
		for(var i = 0; i < tests.length; i++){
			if(tests[i](userInfo) == false){
				console.log("\x1b[31m",'Validation Failed', "\x1b[0m");
				return false;
			}
		}
		console.log("\x1b[32m", "Validation Passed", "\x1b[0m");
		return true;
	}
}

var validator = createValidatorOnAssignation(checkUserPasswordLength, checkUserAge);

validator(userInfo1);
validator(userInfo2);

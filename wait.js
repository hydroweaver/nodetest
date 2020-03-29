[1, 2, 3, 4].forEach((item, index)=>{
	setTimeout(()=>{console.log('waiting')}, index*2000);
});
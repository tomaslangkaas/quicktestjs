	/* example:
		Quicktest(
			'Some tests',[
			4+2, 6,	//test 1, expected result
			5+3, 7	//test 2, expected result
		]);	
		
		Console output:
		
		Some tests
		==========

		Fail (test 2): Expected 7, but got 8

		Of 2 tests, 1 passed and 1 failed.
	*/


function Quicktest(title, tests, outputFunction){
	var total, pass, fail, i, result = title+'\n'+
		(new Array(title.length+1)).join('=')+'\n';
	for(i = total = pass = fail = 0; i < tests.length; i+=2){
		total++;
		if(tests[i] === tests[i+1]){//pass
			pass++;
		}else{
			fail++;
			result += '\n- Fail (test '+total+'): Expected '+tests[i+1]+', but got '+tests[i];
		}
	}
	result += '\nOf '+total+' tests, '+pass+' passed and '+fail+' failed.';
	if(outputFunction){outputFunction(result);}
	else if(console && console.log){console.log(result);}
	return pass == total;
}

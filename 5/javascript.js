function countVowel(x) {
	var str = document.getElementById(x).value;
	console.log(str);
	let a = 0;
	const vowels = ["a", "e", "i", "o", "u"];
	for (let letter of str.toLowerCase()){
    	if (vowels.includes(letter)) {
       		a++;
    	}
	}
	if(a==0){
		document.getElementById("result").innerHTML = "No vowels found in the text.";
	}
	else if(a==1){
		document.getElementById("result").innerHTML ="One vowel found in the text.";
	}
	else{
		document.getElementById("result").innerHTML = "Number of vowels in the text are "+a+".";
	}
	console.log(a);
}
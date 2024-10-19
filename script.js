const byteSize = (str) => {
  // write your code here
	let size = 0;
		for(let i = 0; i < str.length; i++){
			let charCode = str.charCodeAt(i);

			if(charCode <= 0x7F){
				size += 1;
			}else if(charCode <= 0x7FF){
				size += 2;
			}else{
				size += 3;
			}
		}
	return size;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));

export function format(f){
	let d = new Date();
	
	let year = d.getFullYear();
	let month = d.getMonth() + 1;
	let day = d.getDate();
	
	let h = d.getHours();
	let m = d.getMinutes();
	let s = d.getSeconds()
	
	let nowDay = year + '-' + month + '-' + day;
	
	let nowDate = year + '-' + month + '-' + day + ' ' + h + ':' + m + ':' + s;
	
	if(f == 0){
		day = day - 1;
		nowDay = year + '-' + month + '-' + day;
	}
	
	formatTime(h)
	formatTime(m)
	formatTime(s)
	
	
	return nowDay
	
}

function formatTime(num){
	if(num < 10){
		num = "0" + num;
	} 
		return num;
	
}

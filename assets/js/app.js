console.log('hellooooooooo');

var cl=console.log;

const digitalclock=document.getElementById("digitalclock");


	function createDigitalClock(){
		let d = new Date();
		let hr = d.getHours();
		let min = d.getMinutes();
		let sec = d.getSeconds();
		let session = "AM"
		if(hr>=12){
			session="PM"
		}
		if(hr>12){
			hr=hr-12
		}
		
		if(hr <10){
			hr="0"+hr
		}
		if(min<10){
			min="0"+min
		}
		if(sec<10){
			sec="0"+sec
		}
		
		cl(hr,min,sec,session);
		
		let result = `${hr}:${min}:${sec}:${session}`;
	
		digitalclock.innerHTML=result;
		
		setTimeout(createDigitalClock, 1000);
	
	}
	createDigitalClock();
	
	
	
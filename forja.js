var input = 'Bua-Mua-Gua-Bua-Mua-Bua-Bua-Mua-Gua-Bua'
,
forjaApp = (function(input,undefined){
	
	var	that = {
		getSleepHoursString: getSleepHoursString,
		attendBaby: attendBaby,
		sleepMinutes: 480,
		previousInput: '',
		prevPrevInput: '',
		calculateLostFollowers: calculateLostFollowers,
		//initialize: initialize
		parseInput: parseInput
	},
	actions ='';
	function attendBaby(input){
		var action,		
			cases = {
			Bua: function() { 
				action = 'Alimentar';

				if (that.previousInput==='Mua'){
					that.sleepMinutes = that.sleepMinutes - 45;	
					console.log('Mua-Bua');
				}
				else {				
					that.sleepMinutes = that.sleepMinutes - 60;
				}
			},
			Mua: function(){
				action = 'Pañal';
				that.sleepMinutes = that.sleepMinutes - 30;
			},
			Gua: function(){
				action = 'Chupete';

				if (that.previousInput==='Bua'&&that.prevPrevInput==='Mua'){
					console.log('-Mua-Bua-Gua');
					return;
				}
				if (that.previousInput==='Bua'){
					console.log('Bua-Gua');
					that.sleepMinutes = that.sleepMinutes - 5					
				}else{
					that.sleepMinutes = that.sleepMinutes - 10;						
				}
			},
			_default: function() { console.log(input,'input'); }
		};
		
		cases[ input ] ? cases[ input ]() : cases._default();

		that.prevPrevInput = that.previousInput;
		that.previousInput = input;
		return action;				
	}
	function getSleepHoursString(){
		return ((that.sleepMinutes - (that.sleepMinutes % 60)) / 60).toString() +' horas, '+ ((that.sleepMinutes % 60)) +' minutos' ;	
	}
	function calculateLostFollowers(){
		
		if(that.sleepMinutes>=240){ 
			//hours >=4
			return 0;	
		}
		else{
			var minutes = that.sleepMinutes, lostFollowers = 0;
				
			if(that.sleepMinutes>=120&&that.sleepMinutes<240){
				//hours >= 2 and hours < 4
				while(minutes<240){
					minutes += 30;
					lostFollowers +=100;
				}
				
			}
			if(that.sleepMinutes>=0&&that.sleepMinutes<120){
				//hours >= 0 and hours < 2
				lostFollowers = 400;
				while(minutes<120){
					minutes += 30;
					lostFollowers +=200;
				}				
			}
			return lostFollowers;			
		}
	}

	function parseInput(){
		that.sleepMinutes = 480;
		var input = window.input.split('-');
		for (var i = 0; i < input.length; i++) {
			actions += ' -' + attendBaby(input[i]);			
		};
		console.log('calculateLostFollowers', that.calculateLostFollowers(), ',sleepMinutes:',that.sleepMinutes, ',getSleepHoursString', that.getSleepHoursString(),',actions:', actions,',that.sleepMinutes/60', that.sleepMinutes/60);
	}

	parseInput(window.input);
	
	return that;

})(input);
var input = ['Bua'],
forjaApp = (function(input,undefined){
	
	function attendBaby(input){
		var action;		
		var cases = {
			Bua: function() { 
				action = 'feed';

				if (that.previousInput==='Mua'){
					that.sleepMinutes = that.sleepMinutes - 45;	
				}
				else {				
					that.sleepMinutes = that.sleepMinutes - 60;
				}
			},
			Mua: function(){
				action = 'change';
				that.sleepMinutes = that.sleepMinutes - 30;
			},
			Gua: function(){
				action = 'pacifier';

				if (that.previousInput==='Bua'&&that.prevPrevInput==='Mua'){
					return;
				}
				if (that.previousInput==='Bua'){
					that.sleepMinutes = that.sleepMinutes - 5					
				}else{
					that.sleepMinutes = that.sleepMinutes - 10;						
				}
			},
			_default: function() { console.log(input); }
		};
		
		cases[ input ] ? cases[ input ]() : cases._default();

		that.prevPrevInput = that.previousInput;
		that.previousInput = input;
		return action;				
	}
	function getSleepHours(){
		return sleepMinutes / 60;	
	}
	// function parseInput(){
	// 	for (var i = 0; i < input.length; i++) {
	// 		attendBaby(input[i]);
	// 	};
	// }

	// parseInput(input);
	// function initialize(spec){
	// 	var spec
	// }
	that = {
		getSleepHours: getSleepHours,
		attendBaby: attendBaby,
		sleepMinutes: 480,
		previousInput: '',
		prevPrevInput: ''
		//initialize: initialize
		//parseInput: parseInput
	};
	return that;

})(input);
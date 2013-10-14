var input = ['Bua'],
forjaApp = (function(input,undefined){
	//var sleepHours = 8;
	function attendBaby(input){
		if (input==='Bua'){
			that.sleepHours--;// = sleepHours -1;
			console.log('input === Bua', that.sleepHours);
			return 'feed';
		}
	}
	// function getSleepHours(){
	// 	return sleepHours;	
	// }
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
		sleepHours: 8,
		attendBaby: attendBaby,
		//initialize: initialize
		//parseInput: parseInput
	}
	return that;

})(input);
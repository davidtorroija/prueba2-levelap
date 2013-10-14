//hago un mixin es decir injecto las propiedades de mi aplicacion en window para
//que funcionen los tests sin tener que agregarle el obj.nombreDelaPropiedad
//es una mala practica pero solo lo hara en los tests, 
//jasmine inyecta el expect, describe, it, etc en el window no veo porq no puedo hacer esto
// for (var vars in forjaApp) {
// 	window[vars] = forjaApp[vars];
// 	console.log(vars); 
// };
//me adelanto y hago el imput propuesto en los tests o hago un input pequenio y 
//despues lo voy agrandando
(function (window){
	describe('Test App',function(){
		var input;
		beforeEach(function(){
			forjaApp.sleepHours = 8;
			//input = ['Bua'];//['Bua','Bua','Gua','Mua','Gua','Bua'];
		});		
		// describe('input === "Bua"',function(){
		// 	//var input = 'Bua';
			it('should attendBaby return "feed"',function(){			
				expect(forjaApp.attendBaby('Bua')).toBe('feed');
			});
			it('should attendBaby substract 1 hour of sleep ',function(){			
				forjaApp.attendBaby('Bua');		
				console.log(forjaApp.sleepHours);		
				expect(forjaApp.sleepHours).toBe(7);
			});

		// });	
	});
}
)(window)
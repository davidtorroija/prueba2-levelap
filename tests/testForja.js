(function (window){
	describe('Baby care App',function(){
		var input;
		beforeEach(function(){
			forjaApp.sleepMinutes = 0;			
		});		

		describe('Baby Care Part',function(){
			describe('input === "Bua"',function(){			
				it('should attendBaby return "feed"',function(){			
					expect(forjaApp.attendBaby('Bua')).toBe('feed');
				});
				it('should attendBaby substract 60 minutes of sleep ',function(){			
					forjaApp.attendBaby('Bua');		
					console.log(forjaApp.sleepMinutes);		
					expect(forjaApp.sleepMinutes).toBe(-60);
				});
			});

			describe('input === "Mua"',function(){			
				it('should attendBaby return "change"',function(){			
					expect(forjaApp.attendBaby('Mua')).toBe('change');
				});
				it('should attendBaby substract 30 minutes of sleep ',function(){			
					forjaApp.attendBaby('Mua');		
					console.log(forjaApp.sleepMinutes);		
					expect(forjaApp.sleepMinutes).toBe(-30);
				});			
			});		
			
			describe('input === "Gua"',function(){			
				it('should attendBaby return "pacifier"',function(){			
					expect(forjaApp.attendBaby('Gua')).toBe('pacifier');
				});
				it('should attendBaby substract 10 minutes of sleep ',function(){			
					forjaApp.attendBaby('Gua');		
					console.log(forjaApp.sleepMinutes);		
					expect(forjaApp.sleepMinutes).toBe(-10);
				});			
			});	

			describe('We need a property to store the previous input state',function(){
				it('should previousInput to be "Mua" when we call attendBaby with "Mua" Input',function(){			
					expect(forjaApp.attendBaby('Mua')).toBe('change');
					expect(forjaApp.previousInput).toBe('Mua');				
				});
			});

			describe('input === "Mua" and then input === "Bua"',function(){						
				it('should attendBaby called twice with this two inputs substract 75 minutes of sleep ',function(){			
					forjaApp.attendBaby('Mua');	
					forjaApp.attendBaby('Bua');		
					console.log(forjaApp.sleepMinutes);		
					expect(forjaApp.sleepMinutes).toBe(-75);
				});
				
			});	

			describe('input === "Bua" and then input === "Gua"',function(){			
				it('should attendBaby called twice with this two inputs substract 65 minutes of sleep ',function(){			
					forjaApp.attendBaby('Bua');	
					forjaApp.attendBaby('Gua');		
					console.log(forjaApp.sleepMinutes);		
					expect(forjaApp.sleepMinutes).toBe(-65);
				});
			});	

			describe('input === "Bua" and then input === "Gua"',function(){			
				it('should attendBaby called twice with this two inputs substract 65 minutes of sleep ',function(){			
					forjaApp.attendBaby('Bua');	
					forjaApp.attendBaby('Gua');		
					console.log(forjaApp.sleepMinutes);		
					expect(forjaApp.sleepMinutes).toBe(-65);
				});
			});	

			describe('input === "Bua" and then input === "Gua"',function(){			
				it('should attendBaby called twice with this two inputs substract 65 minutes of sleep ',function(){			
					forjaApp.attendBaby('Bua');	
					forjaApp.attendBaby('Gua');		
					console.log(forjaApp.sleepMinutes);		
					expect(forjaApp.sleepMinutes).toBe(-65);
				});
			});	

			describe('We need a property to store the previous of the previous input state',function(){
				it('should previousInput to be "Mua" and the prevPrevInput to be',function(){			
					forjaApp.attendBaby('Mua');
					forjaApp.attendBaby('Gua');				
					expect(forjaApp.prevPrevInput).toBe('Mua');
									
				});
			});

			describe('input === "Mua" and then input === "Bua" and then input === "Gua"',function(){
				it('should attendBaby called with this three different inputs substract -75 minutes of sleep ',function(){			
					forjaApp.attendBaby('Mua');	
					forjaApp.attendBaby('Bua');	
					forjaApp.attendBaby('Gua');	
					console.log(forjaApp.sleepMinutes);		
					expect(forjaApp.sleepMinutes).toBe(-75);
				});
			});	
		});		

		describe('Followers Part',function(){
			
		});
	});
}
)(window);
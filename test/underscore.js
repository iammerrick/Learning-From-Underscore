var _ = require('../lib/underscore');

describe('Collection', function(){
	describe('#each()', function(){
		var races = ['Zerg', 'Protoss', 'Terran'];
		var protoss = {
			'name' : 'Protoss',
			'air' : 'Phoenix'
		};
		
		it('should iterate an array careless of index', function(){
			var lowercase = [];
			
			_.each(races, function(race){
				lowercase.push(race.toLowerCase());
			});
			
			lowercase.should.eql(['zerg', 'protoss', 'terran']);
		});
		
		it('should iterate an array and use index', function(){
			var numbered = [];
			
			_.each(races, function(race, index){
				numbered.push(index+'. '+race);
			});
			
			numbered.should.eql(['0. Zerg', '1. Protoss', '2. Terran']);
		});
		
		it('should iterate an object careless of key', function(){
			var string = '';
			
			_.each(protoss, function(value, key){
				string += value+' ';
			});
			
			string.should.equal('Protoss Phoenix ')
		});
		
		it('should iterate an object and use key', function(){
			var string = '';
			
			_.each(protoss, function(value, key){
				string += key + ': '+value+' ';
			});
			
			string.should.equal('name: Protoss air: Phoenix ')
		});
		
		it('should iterate an array and change context', function(){
			var context = {
				push: function(item){
					this.items.push(item);
				},
				
				items: []
			};
			
			_.each(races, function(race){
				this.push(race.toLowerCase());
			}, context);
			
			
			context.items.should.eql(['zerg', 'protoss', 'terran']);
			
		});
		
		it('should iterate over an array-like object', function(){
			var arrayLike = {
				0 : 'One',
				1 : 'Two',
				2 : 'Three',
				length: 3
			}, compare = '';
			
			_.each(arrayLike, function(value, key){
				compare += value+',';
			});
			
			compare.should.equal('One,Two,Three,');
			
		});		
	});
	
	describe('#map()', function(){
		it('should map over an array and square the numbers', function(){
			var numbers = [2, 4, 6], squared;
		
			squared = _.map(numbers, function(n){
				return n * n;
			});
			
			squared.should.eql([4, 16, 36]);
		});
		
		it('should map over an object and square the numbers', function(){
			var numbers = { one: 2, two: 4, three: 6 }, squared;
		
			squared = _.map(numbers, function(n){
				return n * n;
			});
			
			squared.should.eql([4, 16, 36]);
		});
		
	})
});
var _ = {};

_.each = function(list, iterator, context){
	var i, length;
	
	// Arrays
	if(list instanceof Array){
		for(i = 0, length = list.length; i < length; i++){
			iterator.apply(context || this, [list[i], i, list]);
		}
	}

	// Objects
	if( ! list.length) {
		for(i in list){
			if(list.hasOwnProperty(i)) {
				iterator.apply(context || this, [list[i], i, list]);
			}
		}
	}
};

module.exports = _;

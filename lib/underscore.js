var _ = {};

_.each = function(list, iterator, context){
	var i, length;
	
	if(list.length === +list.length){
		for(i = 0, length = list.length; i < length; i++){
			iterator.apply(context || this, [list[i], i, list]);
		}
	} else {
		for(i in list){
			if(list.hasOwnProperty(i)) {
				iterator.apply(context || this, [list[i], i, list]);
			}
		}
	}
};

_.map = function(list, iterator, context){
	var values = [];
	
	_.each(list, function(value, key){
		values.push(iterator(value, key, list));
	}, context);
	
	return values;
}

module.exports = _;

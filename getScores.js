
var getScores = function(wordsFlat){

	// -----------------------------------
	//  YOUR CODE
	//  Count the word frequency
	//  Return object with word counts
	// -----------------------------------	
var scores = wordsFlat.reduce(function(previous,current){
	if(current in previous){
		previous[current]+=1;
	}
	else{previous[current]=1;}
	return previous;
},{});
	return scores;

}


module.exports = getScores;
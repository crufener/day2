let wordList:string[] = [
	"computer",
	"winter",
	"microwave",
	"bottle",
	"almonds"
]
function rand(min: number, max: number){
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomWord(arr) {
	return wordList[rand(0,5)];
}

function splitWordToLetters(word) {
	return getRandomWord(wordList).split("");
}

console.log(getRandomWord(wordList));

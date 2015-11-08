var notes = {

	"piano": [
		"a",
		"bb",
		"b",
		"c",
		"cs",
		"d",
		"eb",
		"e",
		"f",
		"fs",
		"g",
		"gs"
	],
	"guitar": [
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"10",
		"11",
		"12",
		"13",
		"14",
		"15",
		"16",
		"17",
		"18",
		"19",
		"20",
		"21"
	],
	"chord": [
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"10",
		"11",
		"12",
		"13",
		"14",
		"15",
		"16",
		"17",
		"18",
		"19",
		"20",
		"21",
		"22",
		"23",
		"24",
		"25",
		"26",
		"27",
		"28",
		"29",
		"30",
		"31",
		"32",
		"33",
		"34",
		"35",
		"36",
		"37",
		"38",
		"39",
		"40",
		"41",
		"42"
	]
}

$(document).ready(function() {

	$("#submit-button").click(function() {
		var text = $('textarea#text-area').val();
		var textArray = text.split(" ");
		var wordCounts = {};

		for (var i = 0; i < textArray.length; i++) {
			var word = textArray[i];
			if (wordCounts[word]) {
				wordCounts[word] += 1;
			} else {
				wordCounts[word] = 1;
			}
		}

		var sortable = [];
		for (var word in wordCounts)
			sortable.push([word, wordCounts[word]])
		sortable.sort(function(a, b) {
			return b[1] - a[1]
		});
		var time = $('form#timeInterval').val();
		var inst = $('select#instrument').val();
		var words = sortable.map(function(item) {
			return item[0];
		}).splice(0, notes[inst].length - 1)

		var i = 0;
		setInterval(function() {
			for (; i < textArray.length; i++) {
				var word = textArray[i];
				var index = words.indexOf(word);
				if (index >= 0) {

					var note = new Audio('audio/' + inst + '-' + notes[inst][index] + '.wav');
					note.play();
					i += 1;
					return;
				}
			}
		},time)

		//		var cNote = new Audio('audio/piano-c.wav');
		//		cNote.play();

		console.log(wordCounts);
	});

	// piano-:note.wav
})
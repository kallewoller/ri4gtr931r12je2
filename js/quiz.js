var quiz = [["Spørgsmål 1", "Svar 1.1", "Svar 1.2", "Svar 1.3", 0],
["Spørgsmål 2", "Svar 2.1", "Svar 2.2", "Svar 2.3", 1],
["Spørgsmål 3", "Svar 3.1", "Svar 3.2", "Svar 3.3", 2],
["Spørgsmål 4", "Svar 4.1", "Svar 4.2", "Svar 4.3", 0]];

var x = 0;

var point = 0;

function setText() {

	for (i=0;i<4;i++) {
		document.getElementById("quiz"+i).innerHTML = quiz[x][i];
	}
}

setText();

function press(value) {

	if (parseInt(value) == quiz[x][4]) {
		point += 1;
	}

	x += 1;

	if (x >= quiz.length) {

		var table = document.getElementById("quiz");
		table.parentNode.removeChild(table);

		document.getElementById("text0").innerHTML = "Du fik " + point + " ud af " + quiz.length + " rigtige!";
		document.getElementById("font0").color = "green";

	} else {
		setText();
	}

}

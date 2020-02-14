function rabndomWord(massiv) {
	let random = massiv[Math.floor(Math.random()*massiv.length)];
	return random;
}	

function setWord(){
	const words = ["волк","петя","самолёт","компутер","путин","погода","тэг","помидор","бабушка","лунтик","пеппа","окай","хайль","история","всё","привет","оно","уроки","атака","слон","карандаш","самовар","поезд","компьютер","игра","собака","корова","певец","луна","програмист","мост","кот","вокзал","том","головоломка","опера","платформа","капитан","машинист","пилот","доктор","превысокомногорассмотрительствующий"];
	let word = rabndomWord(words);
	return word;
}

function game() {
	let name = prompt("Скажи своё имя...");
	if(name == null || name == "") {
		name = "Чел без имени";
	}

	let play = confirm(name + ", сейчас компутер загадает слово которые ты должен(-а) отгадать... Начать игру?" );
	if (play == true ) {
		const  slovo = setWord();
		let word = [];
		// заполняем масив подчёкиваниями. Кол-во подчёркиваний равно длине загадонного слова!;
		for (let i = 0; i < slovo.length ; i++) {
			word[i] = "_";
		}
		
		let pytka = slovo.length - 1;
		let ostalos = slovo.length;
		while(pytka != 0 && ostalos != 0) {
			let ugadal = false;
			let string = word.join(" ")

			let letter = prompt(name + ", у тебя осталось " + ostalos + " букв. Ваше слово "  + string + " Hp = " + pytka + ". Введи букву");
			if(letter.length == 1) {
				for(let i = 0; i < slovo.length; i++){
					if(letter == slovo[i]){
						if (word[i] == "_"){
							ostalos--;
						}
						word[i] = letter;
						ugadal = true;
						
					}	
				}
			}
			else {
				alert("Введи одну букву!");
		
			}
			if (ugadal == false){
				pytka--;
			}
		}



		if (pytka == 0){
			alert("-Крики- Вешайте его! Вешайте! Две минуты спустя ты весишь на верёвке...");
		}
		
		if (ostalos == 0) {
			var tvoe = prompt("Молодец ты отгодал слово! Эмм напомни какое слово у тебя было?");
			alert(tvoe + ". О всегда любил это слово!");
		}
		
		

	}
	else {
		alert("Удачи и пока, " + name +". заходи ещё" );
		
	}
	
}











Искал пасхалку но тут их нет небыло и не будет
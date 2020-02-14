let data = [
	{quest: "Главный злодей фильма -Mad Max-", ans: "пальцерез"},
	{quest: "Что случилось с островом где обитали динозавры в -Jurassic World 2-", ans: "сгорел"},	
	{quest: "Кто играл главного героя в фильме -Titanic-", ans: "дикаприо"},	
	{quest: "Когда вышел первый фильм франшизы -Star Wars-", ans: "1977"},	
	{quest: "Про , что был снят фильм -Chernobil-", ans: "чернобыльская авария"},
	{quest: "Сколько было сезонов в сериале -Папины дочки-", ans: "20"},
	{quest: "Кто снял сериал -Game of Thrones", ans: "дэвид и уайсс"},
	{quest: "В каком фильме была сцена -Ты не пройдёшь-", ans: "властелин колец"}	
];

let score = 0;
let name = "";
const length = data.length;


function question(){
	$('#div').append('<h1>' + data[0].quest +'</h1>');
	$('#div').append('<input type="text" id= "answer" autofocus="true"><input type="submit" onclick="check()">');
}


function check() {
	// проверяем ответ
	let answer = $('#answer').val().toLowerCase();
	if(answer == data[0].ans) {
		score++ 
	}

	//удаляем использованый вопрос
	data.shift();

	//удаляем вопрос и поле
	$('#div').empty();

	if(data.length != 0){
		//выводим новый вопрос
		question()
	}
	else theEnd();
}
function theEnd(){
	$('#div').append('<h1>' + name +', ты набрал'+ score + '/' +  length + ' очков!' );
	if (score == 0) {
		$('#div').append(name + " ты серьёзно?:/");
	}
	if (score == 1) {
		$('#div').append(name + " плохо");
	}
	if (score == 2) {
		$('#div').append(name + " два очка это круто");
	}
	if (score == 3) {
		$('#div').append(name + " троешник");
	}
	if (score == 4) {
		$('#div').append(name + " совсем чуть чуть");
	}
	if (score == 5) {
		$('#div').append(name + " молодец!");
	}
	if (score == 6) {
		$('#div').append(name + " ты знаток фильмов");
	}
	if (score ==8 ) {
		$('#div').append(name + " ты человек который прошёл мой тест красава!");
	}
	if (score >= 9) {
		score = 0;
		$('#div').append(name + "читер!");
		score = 0;
	}
	
	
	if(name == "undertale" || name == "андертэйл") {
		name =  "Чара";
	}	
	
}

function start() {
	//получаем и устанавливаем имя
	name = $('#name').val();
	if (name == '') name = 'безымянный';

	// удалить всё со страницы 
	$('#div').empty();

	//запускаем функцию с вопросами

	question();
}
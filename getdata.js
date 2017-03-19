// Создаём объект запроса
var request = new XMLHttpRequest();
var response;
var k = 0;
var id;
 // Указываем тип запроса (GET) и адрес, к которому будет выполнятся запрос
var url = "http://api.myapifilms.com/imdb/top?start=1&end=20&token=a4475dc4-7fc2-4222-bb47-8d660c489039&format=json&data=1";
request.open("GET", url);

// Отсылаем запрос
request.send();

// Задаём функцию, которая будет вызываться при изменении состояния готовности запроса
request.onreadystatechange = function () { 
	// Проверяем состояние готовности и статус запроса
	if (request.readyState === 4 && request.status === 200) { 
		// Десериализуем полученную JSON строку в объект JavaScript
		response = JSON.parse(request.responseText); 
		console.log(response);
		for (var i = 0; i < 20; i++) {
			var urlPoster = document.getElementById('urlPoster' + i);
			var title = document.getElementById('title' + i);
			var year = document.getElementById('year' + i);
			var rating = document.getElementById('rating' + i);
			var genres = document.getElementById('genres' + i);
			var countries = document.getElementById('countries' + i);
			var directors = document.getElementById('directors' + i);
			var img = document.createElement('img');
			var a = document.createElement('a');
			img.src = response.data.movies[i].urlPoster;
			a.href = 'http://www.imdb.com/name/' + response.data.movies[i].directors[0].id;
			a.innerHTML = response.data.movies[i].directors[0].name;
			urlPoster.appendChild(img);
			directors.appendChild(a);
			title.innerHTML = response.data.movies[i].title;
			year.innerHTML = response.data.movies[i].year;
			rating.innerHTML = response.data.movies[i].rating;
			genres.innerHTML = response.data.movies[i].genres[0];
			countries.innerHTML = response.data.movies[i].countries[0];
		}
		

	}
		
}

function myClick(id) { 
					localStorage.setItem(id, id);
					console.log(id); 
		}


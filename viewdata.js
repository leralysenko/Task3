var request = new XMLHttpRequest();
var response;
var k = 0;
var id;
var div;
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
	}
		
}


/*function showAll() {
	console.log(response);
	
}*/

function showAll () { 
				div = document.getElementById('newtab');
				var table = document.createElement('table');
				table.innerHTML = "<tr ><th></th><th>Name</th><th>Year</th><th>Rating</th><th>Genre</th><th>Country</th><th>Director</th></tr>";
			for (var j=0; j<20; j++) {
				if (localStorage.getItem(j)) {
						var urlPoster = document.createElement('td');
						var title = document.createElement('td');
						var year = document.createElement('td');
						var rating = document.createElement('td');
						var genres = document.createElement('td');
						var countries = document.createElement('td');
						var directors = document.createElement('td');
						var img = document.createElement('img');
						var a = document.createElement('a');
						var treiler = document.createElement('td');
						var a1 = document.createElement('a');
						var tr = document.createElement('tr');
						img.src = response.data.movies[j].urlPoster;
						a.href = 'http://www.imdb.com/name/' + response.data.movies[j].directors[0].id;
						a.innerHTML = response.data.movies[j].directors[0].name;
						urlPoster.appendChild(img);
						directors.appendChild(a);
						title.innerHTML = response.data.movies[j].title;
						year.innerHTML = response.data.movies[j].year;
						rating.innerHTML = response.data.movies[j].rating;
						genres.innerHTML = response.data.movies[j].genres[0];
						countries.innerHTML = response.data.movies[j].countries[0];

						/*a1.href = '#';
						a1.className = 'button' + (j + 1);
						a1.innerHTML = 'Трейлер';
						treiler.appendChild(a1);*/

						tr.appendChild(urlPoster);
						tr.appendChild(title);
						tr.appendChild(year);
						tr.appendChild(rating);
						tr.appendChild(genres);
						tr.appendChild(countries);
						tr.appendChild(directors);
						//tr.appendChild(treiler);
						table.appendChild(tr);
				}
			}
			if(j > 1) {
				div.appendChild(table);
			}
			document.body.appendChild(div);
		}

function removeAll() {
	div.parentNode.removeChild(div);
	localStorage.clear();
}

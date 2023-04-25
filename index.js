$(document).ready(function(){
	cards();
	select();
});
function select(){
	
	fetch('https://rickandmortyapi.com/api/character')
			.then(response => response.json())
			.then(data => {
				// console.log(data);
				for (let i = 0; i < 18; i++) {
					const personaje = data.results[i];
					const select = document.getElementById('filter-select');									
					select.innerHTML+= `<option value="${personaje.id}">${personaje.name}</option>`;					
				}
			
			})
			.catch(error => console.log(error));
}
function cards(){
	fetch('https://rickandmortyapi.com/api/character')
	.then(response => response.json())
	.then(data => {
		for (let i = 0; i < 18; i++) {
			const personaje = data.results[i];
			const container = document.getElementById('cards-container');
			container.innerHTML += `
				<div class="col-lg-4 col-md-6 mb-4">
					<div class="card h-100">
						<img src="${personaje.image}" class="card-img-top" alt="${personaje.name}">
						<div class="card-body">
							<h5 class="card-title">${personaje.name}</h5>
							<p class="card-text">Especie: ${personaje.species}</p>
							<p class="card-text">Genero: ${personaje.gender}</p>
							<p class="card-text">¿Alive o Dead?: ${personaje.status}</p>
						</div>
					</div>
				</div>
			`;
		}
	})
	.catch(error => console.log(error));
}
function cambio(id){
	console.log(id);
	fetch('https://rickandmortyapi.com/api/character')
	.then(response => response.json())
	.then(data => {
		const container = document.getElementById('cards-container');
		container.innerHTML = '';
		for (let i = 0; i < 18; i++) {
			const personaje = data.results[i];
			console.log("ID: "+id+" Personaje: "+personaje.id);
			if(id !== '' && personaje.id === parseInt(id)){
				console.log("1..");
				container.innerHTML += `
					<div class="col-lg-4 col-md-6 mb-4">
						<div class="card h-100">
							<img src="${personaje.image}" class="card-img-top" alt="${personaje.name}">
							<div class="card-body">
								<h5 class="card-title">${personaje.name}</h5>
								<p class="card-text">Especie: ${personaje.species}</p>
								<p class="card-text">Genero: ${personaje.gender}</p>
								<p class="card-text">¿Alive o Dead?: ${personaje.status}</p>
							</div>
						</div>
					</div>
				`;
			} else if (id === '') {
				console.log("2..");
				container.innerHTML += `
					<div class="col-lg-4 col-md-6 mb-4">
						<div class="card h-100">
							<img src="${personaje.image}" class="card-img-top" alt="${personaje.name}">
							<div class="card-body">
								<h5 class="card-title">${personaje.name}</h5>
								<p class="card-text">Especie: ${personaje.species}</p>
								<p class="card-text">Genero: ${personaje.gender}</p>
								<p class="card-text">¿Alive o Dead?: ${personaje.status}</p>
							</div>
						</div>
					</div>
				`;
			}
		}
	})
	.catch(error => console.log(error));	
}


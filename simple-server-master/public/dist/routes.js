//routers.js
$(document).ready(function(){
	page('/', index);
	page('/about', favs);
	page();

	fetch("https://www.food2fork.com/api/search?key=fdc35a21fc16b84dbcbf447b5bce02c3&sort=s")
	.then (response => response.json())
	.then (data => showAll(data.recipes));

	function showAll(data){
		var recipes = data;
		for (recipe of recipes){
			var title = recipe.title;
			var photo = recipe.image_url;
			var id = recipe.recipe_id;
			var link = recipe.f2f_url;
			index(photo, title, link, id);
		} 
	} 

	function index(photos,title, link,id){
		$('main').append(`
			<div class="card m-2" style="width: 18rem;">
				<img class="card-img-top" src="${photos}" alt="Card image cap">
				<div class="card-body">
		    		<h5 class="card-title">${title}</h5>
		    		<a href="${link}"class="card-text text-success" target="_blank">Access the Recipe</a>
		 		</div>
			</div>
		`);
	}

	function favs(){
		$('main').html(renderFavs());
	}

});
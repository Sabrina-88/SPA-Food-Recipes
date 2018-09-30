//app.js
function renderFavs(){
	return '<div class="row col-xs-10 col-sm-10 col-md-10 col-lg-10 d-flex justify-content-center"><h3>Welcome. I am so glad you are here. I love eating and I am proud to cook and share recipes with you.</h3><p>ATENÇÃO: Essa API apresentou algumas instabilidades durante a execução das últimas versões do projeto. Esse erro apresenta no card-deck das imagens uma função que não faz parte do projeto. Conversando com a mentora Juliana chegamos a conclusão que essa função estaria antes da posição 0 do array da API, sendo assim não foi possivel acessa-la.</p><p>Se você tiver alguma dúvida ou sugestão por favor, entre em contato comigo: <a href="mailto:sabrina.andrade.leite@gmail.com">sabrina.andrade.leite@gmail.com</a></p><p>This API presented some instabilities during the execution of the last versions of the project. This error displays on the card-deck of the images a function that is not part of the project. Talking with the mentor Juliana we came to the conclusion that this function would be before position 0 of the API array, so it was not possible to access it.</p><p> If you have any questions or suggestions please contact me: <a href="mailto:sabrina.andrade.leite@gmail.com">sabrina.andrade.leite@gmail.com</a></p></div>';
}
 //event handling
    function changeText(id) {
    id.innerHTML = "Go to the market to buy the ingredients and make the recipes soon!";
}
 


var db = [
	
			{name:'Sultan Alafifi',email:'al-afefi@hotmail.com',age:32},
			{name:'Ahmad Alafifi',email:'ahmad@hotmail.com',age:9},
			{name:'Nader Alafifi',email:'nader@hotmail.com',age:6}		
];


(function Avatars(db){

	this.init=function(){
	this.generateList();
	this.enterUser();
};
	this.generateList = function(){

		var parent= document.querySelector('#parent-avatars');
		var template= '';

		for(var i=0 ; i  < db.length ; i++){

		template+= '<div class="col-sm-4">';
		template+= 	'<div class="card">';
		template+= 		'<div class="card-delete" data-card="">x</div>';
		template+= 			'<div class="card-block">';
		template+= 				'<h3 class="card-title">'+ db[i].name+'</h3>';
		template+= 					'<p class="card-text"><strong>Email: </strong>'+ db[i].email+'</p>';
		template+=					 '<p class="card-text"><strong>Age:</strong>'+ db[i].age+'</p>';
		template+= 				'</div>';
		template+= 			'</div>';
		template+= 	'</div>';

		}

		parent.innerHTML=''
		parent.insertAdjacentHTML('afterbegin',template)
};

	this.enterUser = function(){
		document.querySelector('#myForm').addEventListener('submit', function(e){
			e.preventDefault();
		});
	};






	this.init();
})(db);
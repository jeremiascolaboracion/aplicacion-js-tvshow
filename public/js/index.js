 let formMedia = document.getElementById("form-media");
	formMedia.addEventListener("click", (e)=>{
		e.preventDefault();
	}, false)



// request to tvmaze.com
let container = document.getElementById("container");
let btnSend = document.getElementById("btn-send-js");
let findMedia = document.getElementById("find-media");
let titlePage = document.getElementById("title-page-js");
let loaders = document.getElementById("loaders");

// setTimeout(()=>{
// 	loaders.remove()
// }, 1000)
	btnSend.addEventListener("click", ()=>{
			 btnSend.classList.toggle("scale");
		 
		


		if(findMedia.value != ""){
				loaders.classList.add("lds-ellipsis");
		// container.textContent = "actualizando.."
		// container.innerHTML = ""
		let url = 'http://api.tvmaze.com/singlesearch/shows?q='+ findMedia.value; 
		var xhr = new XMLHttpRequest();	
		findMedia.value = ""

 	
 	 
 		 

	xhr.open("GET", url, true);

 	xhr.send();
	setTimeout(()=>{
 	
 	loaders.classList.remove("lds-ellipsis");

 	}, 500)
 	 
	// container.textContent = ""
 
    
	xhr.addEventListener("load", (e)=>{

		let text = JSON.parse(e.target.responseText)
		 	 
		 
		 
 			let nameMedia = document.getElementById("item-name");
 			
 				nameMedia.innerHTML = ""
 				nameMedia.innerHTML = text.name;

		 	let titleMedia = document.getElementById("title-media-js");
		 		titleMedia.innerHTML = ""
		 		titleMedia.textContent = text.name

			let imageMedia = document.getElementById("image-media");
				imageMedia.src = text.image.medium;

			let language = document.getElementById("item-language");
				
				if(text.language != undefined){
					language.innerHTML = ""
					language.innerHTML = text.language
				}
				else{
					language.innerHTML = ""
					language.innerHTML = "english"
				}
			

		 	let description = document.getElementById("description-media-js");
		 		description.innerHTML = text.summary;




		 let genres = document.getElementById("item-genres");
 				


 			// console.log(text)
 			if(text.genres[1] == undefined){
 				genres.innerHTML = ""
 				titlePage.innerHTML = text.name;
 				
 			}
 			else{
 				titlePage.innerHTML = ""
 				titlePage.innerHTML = text.name + " - " + text.genres[0];
 				genres.innerHTML = ""
 				genres.innerHTML += text.genres[0] + " "
 				genres.innerHTML += text.genres[1] + " "
 			 
 			}
 			let premier = document.getElementById("item-premiered");
 				premier.innerHTML = ""
 				premier.innerHTML = text.premiered

 				let titleDocument = document.getElementById("title-document");
 					titleDocument.innerHTML = ""
 					titleDocument.innerHTML = text.name
 	
		
	}, false);

		}
}, false);

let mainHeader = document.getElementById("main__header-js");

let scrollingTop = function(scrolling){

	scrolling.addEventListener("click", ()=> {

		if(window.scrollY >= 1){
			window.scrollTo(0, 0);
		}

	}, false);

}
scrollingTop(mainHeader);

 
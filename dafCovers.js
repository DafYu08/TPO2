function openStyle (evt, styleName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(styleName).style.display = "block";
	evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen");

//FORMULARIO
var inputs = document.getElementsByClassName('formulario_input');
for (var i=0; i<inputs.length; i++){
	inputs[i].addEventListener('keyup', function () {
		if (this.value.length>=1){
			this.nextElementSibling.classList.add('fijar');
		}else{
			this.nextElementSibling.classList.remove('fijar');
		}
	});
}
//Hasta acá anda todo joya!!

const nombres = document.getElementById("nombre")
const mail = document.getElementById("correo")
const telefono = document.getElementById("telefono")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=> {
	e.preventDefault()
	let warnings = ""
	let entrar = false
	let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
	parrafo.innerHTML = ''
	if(nombres.value.lenght<6){
		warnings += `El nombre no es valido<br>`
		entrar = true
	}
	console.log(regexEmail.test(mail.value))
	if(!regexEmail.test(mail.value)){
		warnings += `El email no es valido<br>`
		entrar = true
	}
	//NO SÉ CÓMO HACER LA VALIDACIÓN NUMÉRICA!!. Es decir, que el telefono solo pueda ser de tipo int.
	if (entrar){
		parrafo.innerHTML = warnings
	}else{
		parrafo.innerHTML = "Enviado"
	}

})
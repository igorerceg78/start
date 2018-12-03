//var imageSF = document.querySelector('.trip-image');
var imageSF = document.querySelectorAll('.trip-image');
var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');

function openModal() {
    backdrop.style.display = 'block';
    modal.style.display = 'block';
}

function closeModal() {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
}

//imageSF[1].addEventListener('click', openModal);

//openModal();
//imageSF.onclick = openModal;
//imageSF.setAttribute( "onclick", "javascript:show('modal')" );
//modal.onclick = closeModal;
//backdrop.onclick = closeModal;

//console.log(imageSF[0]);
//imageSF[0].onclick = openModal;
//imageSF[1].addEventListener('click', openModal);

for (var i = 0; i < imageSF.length; i++) {
    imageSF[i].addEventListener('click', openModal);
}

backdrop.addEventListener('click', closeModal);

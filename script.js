const elements = document.getElementsByClassName('fit');
//console.log(words);

//const words = document.querySelector(".words");
window.addEventListener('resize', function () {
  if (window.matchMedia('(max-width: 767px)').matches) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].innerHTML = elements[i].innerHTML.replace('<br/>', ' ');
    }
  } else if (window.matchMedia('(min-width: 768px)').matches) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].innerHTML = elements[i].innerHTML.replace(/(?:\r\n|\r|\n)/g, '<br/>');
    }
  }
});

//   elements[i].innerHTML = elements[i].innerText
//     .split('')
//     .map((e) => (!e.trim() ? '<div>&nbsp</div>' : `<div>${e}</div>`))
//     .join('');

// words.forEach((e) => {
//   words.innerHTML = words.innerText
//     .split('')
//     .map((e) => (!e.trim() ? '<div>&nbsp</div>' : `<div>${e}</div>`))
//     .join('');
// });

// function resize() {
//   let text = document.getElementsByClassName('text');
//   for (let i = 0; i < text.length; i++) {
//     let string = text[i].innerHTML; // Получаем текст строки
//     string = string.replace(/<[^>]+>/g, ''); // Удаляем из нее все теги
//     text[i].style.fontSize = ((text[i].offsetWidth / string.length) * 1.4).toFixed() + 'px'; // Устанавливаем размер шрифта, в зависимости от ширины строки и кол-ва букв
//     text[i].innerHTML = string.replace(
//       /(.)/g,
//       '<span style="min-width: ' +
//         (text[i].offsetWidth / string.length / 1.4).toFixed() +
//         'px">$1</span>',
//     ); // Добавляем к буквам тег span для выравнивания
//   }
// }
// window.addEventListener('resize', resize);
// resize();



var save_open = null;

function open_button(button_element) {

  var p_element = button_element.children[0];


  if (save_open){
    if (p_element.isEqualNode(save_open)) {
      // если пользователь нажал на ТУЖЕ кнопку второй раз
      // просто скрывается доп инфа и ВСЕ
      close_elm(save_open);
      return;
    }
    else {
      // если user нажал на другую кнопку
      // то скрывается доп инфа и функция продолжается(открывакется новая доп инфа)
      close_elm(save_open);
    }
  }

  p_element.style.height = button_element.children[0].scrollHeight + 'px';
  p_element.classList.add("show");
  p_element.classList.remove("hidden");


  setTimeout(() => window.scrollTo(0, 10000), 200);


  save_open = p_element;
}

function close_elm(p_element) {

  p_element.style.height = 0;
  p_element.classList.add("hidden");
  p_element.classList.remove("show");

  save_open = null;
}

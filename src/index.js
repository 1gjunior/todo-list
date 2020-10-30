const inputElement = document.querySelector('input');
const buttonElement = document.querySelector('form button');
const ulElement = document.querySelector('ul');

buttonElement.onclick = (event) => {
  event.preventDefault();

  if (inputElement.value) {
    const liTextElement = document.createElement('span');
    liTextElement.innerHTML = inputElement.value;

    const removeButtonElement = document.createElement('button');
    removeButtonElement.innerHTML = 'Remover';

    const liElement = document.createElement('li');
    liElement.appendChild(liTextElement);
    liElement.appendChild(removeButtonElement);

    removeButtonElement.onclick = () => {
      ulElement.removeChild(liElement);
    };
    ulElement.appendChild(liElement);
    inputElement.value = '';
  }
};

class Form {
  element = document.createElement('form');
  heading = document.createElement('h2');
  closeButton = document.createElement('button');

  constructor(type, title, content) {
    this.title = title;
    this.element.appendChild(this.heading);
    this.element.appendChild(content);
    this.element.appendChild(this.closeButton);
    this.element.setAttribute('type', type);
    this.heading.textContent = title;
    this.closeButton.setAttribute('type', 'submit');
    this.closeButton.textContent = 'Close';
  }
}


class Modal {
  openButton = document.createElement('button');
  dialog = document.createElement('dialog');

  constructor(name, parentElement, contentElement) {
    // Set up the instance object
    this.#setupForm();
    console.error('Modal constructor not implemented');
  }

  #setupForm() {
    const article = document.createElement('article');
    const form = new Form('dialog', this.name, this.content);
    article.appendChild(form.element);
    this.dialog.appendChild(article);
  }

  render() {
    // Adiciona os elementos ao DOM
    console.error('render method not implemented')
  }
}


const parent = document.querySelector('nav');
const content = document.getElementById('dark-mode');
const darkModal = new Modal('Settings', parent, content);
darkModal.render();
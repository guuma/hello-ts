// autobind decorator
function autobind(_target: any, _methodName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      // only get value
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  mandayInputElement: HTMLInputElement;

  constructor() {
    this.templateElement = <HTMLTemplateElement>document.getElementById('project-input')!;
    this.hostElement = <HTMLDivElement>document.getElementById('app')!;

    const importedNode = document.importNode(this.templateElement.content, true);
    this.element = <HTMLFormElement>importedNode.firstElementChild;
    this.element.id = 'user-input';

    this.titleInputElement = <HTMLInputElement>this.element.querySelector('#title');
    this.descriptionInputElement = <HTMLInputElement>this.element.querySelector('#description');
    this.mandayInputElement = <HTMLInputElement>this.element.querySelector('#manday');

    this.configure();
    this.attach();
  }

  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredMandy = this.mandayInputElement.value;
    if (
      enteredTitle.trim().length === 0 ||
      enteredDescription.trim().length === 0 ||
      enteredMandy.trim().length === 0
    ) {
      alert('Input value is not correct');
      return;
    } else {
      return [enteredTitle, enteredDescription, +enteredMandy];
    }
  }

  @autobind
  private submitHandler(event: Event) {
    event.preventDefault;
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, desc, mandy] = userInput;
      console.log(title, desc, mandy);
    }
  }

  private configure() {
    this.element.addEventListener('submit', this.submitHandler.bind(this));
  }

  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }
}

const prjInput = new ProjectInput();

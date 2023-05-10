const insert = () => {
    let type = document.querySelector('#type').value
    let label = document.querySelector('#label').value

    switch(type) {
        case 'text': appendText(label)
            break
        case 'button': appendButton(label)
            break
        case 'radio' : appendRadio(label)
            break
        case 'checkbox' : appendCheckbox(label)
            break
    }
}
function createInput(type, className, label) {
    const input = document.createElement('input');
    input.type = type;
    input.className = className;
    input.placeholder = label || 'No label';
    return input;
  }
  
  function createButton(type, className, label) {
    const button = document.createElement('button');
    button.type = type;
    button.className = className;
    button.textContent = label || 'No label';
    return button;
  }
  
  function createLabel(className, textContent, forInput) {
    const label = document.createElement('label');
    label.className = className;
    label.textContent = textContent;
    label.htmlFor = forInput;
    return label;
  }
  
  function createContainer(className, ...children) {
    const container = document.createElement('div');
    container.className = className;
    children.forEach((child) => container.append(child));
    return container;
  }
  
  function removeInsertedElement() {
    const insertedElement = document.querySelector('#display > *:last-child');
    if (insertedElement) {
      insertedElement.remove();
    }
  }
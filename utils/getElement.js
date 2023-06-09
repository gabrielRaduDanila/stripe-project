function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw Error(`you did not select element ${selection}`);
  }
}

export default getElement;

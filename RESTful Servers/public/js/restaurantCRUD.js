function createInput() {
  const inputName = document.createElement("input");
  input.type = "text";
  input.name = "menuName";
//   const inputPrice = document.createElement("input");
//   input.type = "text";
//   input.name = "menuName";
  return inputName;
}

const menuItemForm = document.getElementById("menuItemsContainer");
document.getElementById("addMenuItem").addEventListener("click", function () {
    const inputName = document.createElement("input");
    const inputPrice = document.createElement("input");
    const space = document.createElement("br");
    inputName.type = "text";
    inputPrice.type = "text";
    menuItemForm.appendChild(inputName);
    menuItemForm.appendChild(inputPrice);
    menuItemForm.appendChild(space);
  console.log("hellpo");
});

//console.log(document.querySelector('addMenuItem'))

// HOW TO ADD MENU ITEM TO SPECIFIC MENU ????
'use strict';
// Create recipe instance
const recipeManager = new RecipeManager();
recipeManager.load();
recipeManager.render();

const formElement = document.getElementById('formData');

formElement.addEventListener('submit', function (e) {
  e.preventDefault();
  const dataArr = [...new FormData(formElement)];
  const data = Object.fromEntries(dataArr);

  // console.log(dataArr);
  // console.log(data);
  $('.btn-closemodal').trigger('click');
  recipeManager.addRecipe(data);
  recipeManager.save();
  recipeManager.render();
});

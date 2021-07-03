'use strict';
// Create recipe instance
const recipeManager = new RecipeManager();
recipeManager.load();
recipeManager.renderPreview();

const recipeList = document.getElementById('recipe-preview');
const formElement = document.getElementById('formData');
// const previewLink = document.getElementsByClassName('recipe-list');

formElement.addEventListener('submit', function (e) {
  e.preventDefault();
  const dataArr = [...new FormData(formElement)];
  const data = Object.fromEntries(dataArr);

  // console.log(dataArr);
  // console.log(data);
  $('.btn-closemodal').trigger('click');
  recipeManager.addRecipe(data);
  recipeManager.save();
  recipeManager.renderPreview();
});

recipeList.addEventListener('click', event => {
  if (event.target.classList.contains('preview-link')) {
    const parentEl = event.target.closest('.preview-container');
    let recipeId = Number(parentEl.dataset.recipeId);
    const recipe = recipeManager.getRecipeById(recipeId);
    console.log(recipe);
    recipeManager.renderRecipeview(recipe);
  }

  if (event.target.classList.contains('delete-button')) {
    const parentEl = event.target.closest('.preview-container');
    console.log(parentEl);
    let recipeId = Number(parentEl.dataset.recipeId);
    recipeManager.deleteRecipe(recipeId);
    recipeManager.save();
    recipeManager.renderPreview();
    recipeManager.renderRecipeview();
  }
});

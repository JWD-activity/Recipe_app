'use strict';
import preview from './view/preview.js';
import recipeView from './view/recipeView.js';

preview.load();
preview.renderPreview();

const recipeList = document.getElementById('recipe-preview');
const formElement = document.getElementById('formData');
// // const previewLink = document.getElementsByClassName('recipe-list');

formElement.addEventListener('submit', function (e) {
  e.preventDefault();
  const dataArr = [...new FormData(formElement)];
  const data = Object.fromEntries(dataArr);

  $('.btn-closemodal').trigger('click');
  preview.addRecipe(data);
  preview.save();
  preview.renderPreview();
});

recipeList.addEventListener('click', event => {
  if (event.target.classList.contains('preview-link')) {
    const parentEl = event.target.closest('.preview-container');
    let recipeId = Number(parentEl.dataset.recipeId);
    const recipe = preview.getRecipeById(recipeId);
    recipeView.renderRecipeview(recipe);
  }

  if (event.target.classList.contains('delete-button')) {
    const parentEl = event.target.closest('.preview-container');
    // console.log(parentEl);
    let recipeId = Number(parentEl.dataset.recipeId);
    preview.deleteRecipe(recipeId);
    const recipe = preview.getRecipeById(recipeId);
    preview.save();
    preview.renderPreview();
    recipeView.renderRecipeview(recipe);
  }
});

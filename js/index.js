'use strict';
import preview from './view/preview.js';
import recipeView from './view/recipeView.js';

// Selectors
const recipeList = document.getElementById('recipe-preview');
const formElement = document.getElementById('formData');

// Load recipes form local storage
preview.load();
// Render recipe list on the screen
preview.renderPreview();

// Sumbit event handler
formElement.addEventListener('submit', function (e) {
  e.preventDefault();
  const dataArr = [...new FormData(formElement)];
  const data = Object.fromEntries(dataArr);

  $('.btn-closemodal').trigger('click');
  preview.addRecipe(data);
  preview.save();
  preview.renderPreview();
});

// Click event handler of recipe list
recipeList.addEventListener('click', event => {
  const listItem = event.target.classList.contains('preview-link');
  const deleteBtn = event.target.classList.contains('delete-button');
  const parentEl = event.target.closest('.preview-container');

  // When list item is clicked
  if (listItem) {
    const recipe = preview.getRecipeById(Number(parentEl.dataset.recipeId));
    recipeView.renderRecipeview(recipe);
  }

  // When delete btton is clicked
  if (deleteBtn) {
    let recipeId = Number(parentEl.dataset.recipeId);
    preview.deleteRecipe(recipeId);
    const recipe = preview.getRecipeById(recipeId);
    // Remove delete item and save to local storage
    preview.save();
    // Re-render preview list and recipe info view
    preview.renderPreview();
    recipeView.renderRecipeview(recipe);
  }
});

'use strict';
import preview from './view/preview.js';
import recipeView from './view/recipeView.js';

// Selectors
const recipeList = document.getElementById('recipe-preview');
const formElement = document.getElementById('formData');
const message_title = document.getElementById('message-title');
const message_num = document.getElementById('message-num');

// Function to clear the forms in modal
const clearForm = () => {
  const formElements = document.getElementsByClassName('form-control');
  [...formElements].forEach(input => (input.value = ''));
  message_title.textContent = message_num.textContent = '';
};

// Function for valid text
const isValidText = input => {
  if (!input.trim()) {
    message_title.textContent = 'Please enter the recipe title';
    return false;
  } else {
    message_title.textContent = '';
    return true;
  }
};

// Function for valid number
const isValidNumber = input => {
  if (!Number(input) || Number(input) < 1) {
    message_num.textContent =
      'Please enter valid number( for Prep time and servings)';
    return false;
  } else {
    message_num.textContent = '';
    return true;
  }
};

// Load recipes form local storage
preview.load();
// Render recipe list on the screen
preview.renderPreview();

// Sumbit event handler
formElement.addEventListener('submit', function (e) {
  e.preventDefault();
  // https://developer.mozilla.org/en-US/docs/Web/API/FormData
  // Set of key/value pairs representing form fields and their values
  const dataArr = [...new FormData(formElement)];
  console.log(dataArr);
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
  const data = Object.fromEntries(dataArr);
  // console.log(data);

  if (
    isValidText(data.title) &&
    isValidNumber(data.prepTime) &&
    isValidNumber(data.servings)
  ) {
    $('.btn-closemodal').trigger('click');
    preview.addRecipe(data);
    preview.save();
    preview.renderPreview(data.id);
    recipeView.renderRecipeview(data);
    clearForm();
  }
});

// Click event handler of recipe list
recipeList.addEventListener('click', event => {
  const listItem = event.target.classList.contains('preview-link');
  const deleteBtn = event.target.classList.contains('delete-button');
  const parentEl = event.target.closest('.preview-container');
  console.log(listItem);
  // When recipe preview(recipe list) is clicked
  if (listItem) {
    const recipe = preview.getRecipeById(Number(parentEl.dataset.recipeId));
    // Display the selected recipe as active
    preview.renderPreview(recipe.id);
    // Display the information of selected recipe
    recipeView.renderRecipeview(recipe);
  }

  // When delete btton is clicked
  if (deleteBtn) {
    let recipeId = Number(parentEl.dataset.recipeId);
    // Remove delete item and save to local storage
    preview.deleteRecipe(recipeId);
    preview.save();
    // Re-render preview list
    preview.renderPreview();
    // Re-render recipe info view
    const recipe = preview.getRecipeById(recipeId);
    recipeView.renderRecipeview(recipe);
  }
});

'use strict';
// Create recipe instance
const recipeManager = new RecipeManager();
// Check local storge
recipeManager.load();
// Render display on page
recipeManager.render();
// Element seletors

const btnAdd = document.getElementById('addRecipe');
const formData = document.getElementById('formData');
const formElements = document.getElementsByClassName('form-control');

const parentElement = document.querySelector('.recipe-add');

formData.addEventListener('submit', function (e) {
  e.preventDefault();
  const dataArr = [...new FormData(this)];
  const data = Object.fromEntries(dataArr);

  console.log(dataArr);
  console.log(data);
});

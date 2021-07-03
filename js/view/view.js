export default class View {
  constructor(currentId = 0) {
    this.recipes = [];
    this.currentId = currentId;
  }

  // Function to add a new recipe
  addRecipe(inputData) {
    // Increment id
    let id = this.currentId++;
    inputData['id'] = id;
    // Push to recipes array
    this.recipes.push(inputData);
  }

  // Function to render a prevew list
  renderPreview() {
    let previewHtmlList = [];
    this.recipes.forEach(recipe => {
      let previewHtml = this.createPreviewHtml(recipe.id, recipe.title);
      // Push recipe into array
      previewHtmlList.push(previewHtml);
    });
    // Join list and insert them into div tag
    let previewHtml = previewHtmlList.join('\n');
    document.getElementById('recipe-preview').innerHTML = previewHtml;
  }

  // Function to render a preview list
  renderRecipeview(recipe) {
    if (!recipe) {
      document.getElementById('recipe-view').innerHTML = '';
      return;
    }

    let recipeHtml = this.createRecipeViewHtml(
      recipe.id,
      recipe.title,
      recipe.prepTime,
      recipe.servings,
      recipe.ingredient1,
      recipe.ingredient2,
      recipe.ingredient3,
      recipe.ingredient4,
      recipe.ingredient5,
      recipe.ingredient6
    );
    document.getElementById('recipe-view').innerHTML = recipeHtml;
  }

  // Function to load the recipes from local storage
  load() {
    const storage = localStorage.getItem('recipes');
    const currentId = localStorage.getItem('currentId');
    // Check if any recipes are saved or exists in localStorage
    if (storage !== null) {
      const recipesJson = localStorage.getItem('recipes');
      // Convert the recipesJson string to an array and store it
      this.recipes = JSON.parse(recipesJson);
    }
    // Check if the currentId is saved in localStorage
    if (currentId !== null) {
      const currentId = localStorage.getItem('currentId');
      //Convert the currentId to a number before storing in this.currentId
      this.currentId = parseInt(currentId);
    }
  }

  // Function to save the recipes to local storage
  save() {
    // Create a string for all recipes
    let recipesJson = JSON.stringify(this.recipes);
    // Store the string variable in local storage under key 'recipes'
    localStorage.setItem('recipes', recipesJson);
    // convert currentId to stirng
    let currentId = JSON.stringify(this.currentId);
    // Store the string variable in local storage under key 'currentId'
    localStorage.setItem('currentId', currentId);
  }

  // Function to get recipe ID
  getRecipeById(recipeId) {
    let foundRecipe;
    this.recipes.find(recipe => {
      if (recipe.id === recipeId) {
        foundRecipe = recipe;
      }
    });
    return foundRecipe;
  }

  // Delete recipe by ID
  deleteRecipe(recipeId) {
    let newRecipes = [];
    this.recipes.forEach(recipe => {
      if (recipe.id !== recipeId) {
        newRecipes.push(recipe);
      }
    });
    this.recipes = newRecipes;
  }
}

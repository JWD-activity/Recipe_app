export default class View {
  constructor(currentId = 0) {
    this.recipes = [];
    this.currentId = currentId;
  }

  addRecipe(inputData) {
    // increment id
    let id = this.currentId++;
    inputData['id'] = id;
    // push to recipes array
    this.recipes.push(inputData);
    console.log(this.recipes);
  }

  renderPreview() {
    // declare status arrays to categorise each task
    let previewHtmlList = [];

    this.recipes.forEach(recipe => {
      let previewHtml = this.createPreviewHtml(recipe.id, recipe.title);

      // Push recipe into array
      previewHtmlList.push(previewHtml);
    });
    // Join list and insert them into the approriate div tag
    let previewHtml = previewHtmlList.join('\n');
    document.getElementById('recipe-preview').innerHTML = previewHtml;
  }

  // Render Method
  renderRecipeview(recipe) {
    // console.log(recipe);
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

    console.log(recipeHtml);
    document.getElementById('recipe-view').innerHTML = recipeHtml;
  }

  load() {
    const storage = localStorage.getItem('recipes');
    const currentId = localStorage.getItem('currentId');
    // check if any tasks are saved or exists in localStorage, error will produce if its empty
    if (storage !== null) {
      const recipesJson = localStorage.getItem('recipes');
      // Convert the tasksJson string to an array and store it in this.tasks
      this.recipes = JSON.parse(recipesJson);
    }
    // check if the currentId is saved in localStorage
    if (currentId !== null) {
      const currentId = localStorage.getItem('currentId');
      //Convert the currentId to a number before storing in this.currentId
      this.currentId = parseInt(currentId);
    }
  }

  // Save Method
  save() {
    // Create a string for all tasks
    let recipesJson = JSON.stringify(this.recipes);
    // Store the string variable in local storage under key 'tasks'
    localStorage.setItem('recipes', recipesJson);
    // convert currentId to stirng
    let currentId = JSON.stringify(this.currentId);
    // Store the string variable in local storage under key 'currentId'
    localStorage.setItem('currentId', currentId);
  }

  // Get recipe by the id
  getRecipeById(recipeId) {
    let foundRecipe;
    this.recipes.find(recipe => {
      if (recipe.id === recipeId) {
        foundRecipe = recipe;
      }
    });
    return foundRecipe;
  }

  // Delete task by id
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

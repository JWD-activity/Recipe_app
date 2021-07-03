const createPreviewHtml = (
  id,
  title,
  prepTime,
  servings,
  ing1,
  ing2,
  ing3,
  ing4,
  ing5,
  ing6
) => {
  const html = `
  <li class="preview" data-recipe-id="${id}">
    <a class="preview-link d-flex" href="#">
      <i class="bi bi-star-fill"></i>
      <div class="preview-data">
        <h5 class="preview-title">${title}</h5>
      </div>
    </a>
  </li> 
  `;
  return html;
};

const createRecipeViewHtml = (
  id,
  title,
  prepTime,
  servings,
  ing1,
  ing2,
  ing3,
  ing4,
  ing5,
  ing6
) => {
  const html = `
  <div>
    <h5>Title: ${title}</h5>
      <p>Servings: ${servings}</p>
      <p>Prep time: ${prepTime} min</p>
      <p>Ingredient: ${ing1}</p>
  </div>
  `;
  return html;
};

class RecipeManager {
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

  // Render Method
  render() {
    // declare status arrays to categorise each task
    let recipeHtmlList = [];

    this.recipes.forEach(recipe => {
      let recipeHtml = createPreviewHtml(
        recipe.id,
        recipe.title,
        recipe.prepTime,
        recipe.servings,
        recipe.ing1,
        recipe.ing2,
        recipe.ing3,
        recipe.ing4,
        recipe.ing5,
        recipe.ing6
      );

      // Push recipe into array
      recipeHtmlList.push(recipeHtml);
    });
    // Join list and insert them into the approriate div tag
    let recipeHtml = recipeHtmlList.join('\n');
    document.getElementById('recipe-preview').innerHTML = recipeHtml;
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

  // Load Method
  load() {
    // check if any tasks are saved or exists in localStorage, error will produce if its empty
    if (localStorage.getItem('recipes') !== null) {
      const recipesJson = localStorage.getItem('recipes');
      // Convert the tasksJson string to an array and store it in this.tasks
      this.recipes = JSON.parse(recipesJson);
    }
    // check if the currentId is saved in localStorage
    if (localStorage.getItem('currentId') !== null) {
      const currentId = localStorage.getItem('currentId');
      //Convert the currentId to a number before storing in this.currentId
      this.currentId = parseInt(currentId);
    }
  }
}

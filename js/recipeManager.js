const createRecipeHtml = (
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
        <h5 class="preview-title">pasta with Tomato Cream ...</h5>
      </div>
    </a>
  </li> 
  `;
  return html;
};

class Recipe {
  // Properties
  constructor(currentId = 0) {
    this.recipes = [];
    this.currentId = currentId;
  }

  // Methods
  // Add recipe method
  addRecipe(title, prepTime, servings, ing1, ing2, ing3, ing4, ing5, ing6) {
    // increment id
    let id = this.currentId++;

    // push to recipes array
    this.recipe.push({
      id,
      title,
      prepTime,
      servings,
      ing1,
      ing2,
      ing3,
      ing4,
      ing5,
      ing6,
    });
  }

  // Render Method
  render() {
    // declare status arrays to categorise each task
    let recipeHtmlList = [];

    this.recipes.forEach(recipe => {
      let recipeHtml = createRecipeHtml(
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
      recipeHtmlList.push(taskHtml);
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
    localStorage.setItem('recipes', tasksJson);
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

  // Get task by the id
  getTaskById(recipeId) {
    let foundRecipes;
    this.recipes.find(recipe => {
      if (recipe.id === recipeId) {
        foundRecipe = recipe;
      }
    });
    return foundRecipe;
  }

  // Delete task by id
  deleteTask(recipeId) {
    let newRecipeId = [];
    this.recipes.forEach(recipe => {
      if (recipe.id !== recipeId) {
        newRecipes.push(recipe);
      }
    });
    this.recipes = newRecipes;
  }
}

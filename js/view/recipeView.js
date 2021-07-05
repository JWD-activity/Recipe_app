import View from './view.js';

class RecipeView extends View {
  createRecipeViewHtml = recipe => {
    const html = `
    <div class="py-3 px-5">
      <h4 class="pb-3">Title: ${recipe.title}</h4>
        <h5>Servings</h5>
          <p>${recipe.servings}</p>
        <h5>Prep time</h5>
          <p>${recipe.prepTime} min</p>
        <h5>Ingredient</h5>
        <ul>
          ${this.renderIngredient(recipe).join('')}
        </ul>
    </div>
    `;
    return html;
  };

  renderIngredient(recipe) {
    let ingredients = [];
    for (const property in recipe) {
      if (property.startsWith('ingredient') && recipe[property]) {
        ingredients.push(`<li>${recipe[property]}</li>`);
      }
    }
    // console.log(ingredients);
    return ingredients;
  }
}
export default new RecipeView();

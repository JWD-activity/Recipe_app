import View from './view.js';

class RecipeView extends View {
  createRecipeViewHtml = (
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
    <div class="py-3 px-5">
      <h4 class="pb-3">Title: ${title}</h4>
        <h5>Servings</h5>
          <p>${servings}</p>
        <h5>Prep time</h5>
          <p>${prepTime} min</p>
        <h5>Ingredient</h5>
        <ul>
          
          <li>${ing1}</li>
          <li>${ing2}</li>
          <li>${ing3}</li>
          <li>${ing4}</li>
          <li>${ing5}</li>
          <li>${ing6}</li>
        </ul>
        
        
    </div>
    `;
    return html;
  };
}
export default new RecipeView();

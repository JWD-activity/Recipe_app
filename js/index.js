'use strict';
// Create recipe instance
const recipeManager = new TaskManager();
// Check local storge
recipeManager.load();
// Render display on page
recipeManager.render();
// Element seletors
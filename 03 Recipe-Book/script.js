// const API_KEY = "214f95901221414aba905b60e4d4aa49";
const recipeListItem = document.getElementById("recipe-list");
function displayRecipes(recipes) {
  recipeListItem.innerHTML = "";
  recipes.forEach((recipe) => {
    const recipeItemEl = document.createElement("li");
    recipeItemEl.classList.add("recipe-item");
    recipeImageEl = document.createElement("img");
    recipeImageEl.src = recipe.image;
    recipeImageEl.alt = "recipe image";

    recipeTitleEl = document.createElement("h2");
    recipeTitleEl.innerText = recipe.title;

    recipeIngredientEl = document.createElement("p");
    receipeIngredientEl.innerHTML = `
     <Strong>Ingredients:</strong> ${recipe.extendedIngredients
       .map((ingredient) => ingredient.original)
       .join(", ")} 
        `;
    recipeLinkEl = document.createElement("a");
    recipeLinkEl.href = recipe.sourceUrl;
    recipeLinkEl.innerText = "View Recipe";

    recipeItemEl.appendChild(recipeImageEl);
    recipeItemEl.appendChild(recipeTitleEl);
    recipeItemEl.appendChild(recipeIngredientEl);
    recipeItemEl.appendChild(recipeLinkEl);
    recipeListItem.appendChild(recipeItemEl);
  });
}

async function getRecipes() {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apikey=${API_KEY}`
  );

  const data = await response.json();
  return data.recipes;
}

async function init() {
  const recipes = await getRecipes();
  displayRecipes(recipes);
}

init();

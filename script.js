document.addEventListener('DOMContentLoaded', function() {
    const recipes = [
        {
            title: "Spaghetti Carbonara",
            image: "spaghetti-carbonara.jpg",
            ingredients: ["Spaghetti", "Eggs", "Pancetta", "Parmesan cheese", "Black pepper"],
            instructions: "Cook the spaghetti. Fry the pancetta. Mix eggs and cheese, then combine everything together. Season with pepper."
        },
        {
            title: "Chicken Alfredo",
            image: "chicken-alfredo.jpeg",
            ingredients: ["Fettuccine", "Chicken breast", "Heavy cream", "Butter", "Parmesan cheese", "Garlic"],
            instructions: "Cook the pasta. Sauté chicken in butter and garlic. Add cream and cheese, then combine with pasta."
        },
        {
            title: "Beef Tacos",
            image: "ground-beef-tacos-2.webp",
            ingredients: ["Ground beef", "Taco shells", "Lettuce", "Tomato", "Cheddar cheese", "Sour cream"],
            instructions: "Cook the beef. Prepare taco shells. Assemble tacos with beef, lettuce, tomato, cheese, and sour cream."
        }
        // Add more recipes as needed
    ];

    const recipeListElement = document.getElementById('recipe-list');
    const recipeModal = new bootstrap.Modal(document.getElementById('recipeModal'));
    const modalTitleElement = document.getElementById('recipeModalLabel');
    const ingredientsListElement = document.getElementById('ingredients-list');
    const instructionsElement = document.getElementById('instructions');

    function renderRecipes() {
        recipes.forEach((recipe, index) => {
            const recipeCard = document.createElement('div');
            recipeCard.className = 'col-md-4';
            recipeCard.innerHTML = `
                <div class="card">
                    <img src="${recipe.image}" class="card-img-top" alt="${recipe.title}">
                    <div class="card-body">
                        <h5 class="card-title">${recipe.title}</h5>
                        <button class="btn btn-primary" data-index="${index}">View Recipe</button>
                    </div>
                </div>
            `;
            recipeListElement.appendChild(recipeCard);
        });

        document.querySelectorAll('.btn-primary').forEach(button => {
            button.addEventListener('click', function() {
                const recipeIndex = this.getAttribute('data-index');
                showRecipeDetails(recipes[recipeIndex]);
            });
        });
    }

    function showRecipeDetails(recipe) {
        modalTitleElement.textContent = recipe.title;
        ingredientsListElement.innerHTML = recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('');
        instructionsElement.textContent = recipe.instructions;
        recipeModal.show();
    }

    renderRecipes();
});
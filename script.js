const recipes = [
    {
      name: "Cheese Pizza",
      imageSrc: "https://source.unsplash.com/random?pizza",
      time: "30 min",
      type: "veg",
      isLiked: false,
      rating: 4.2,
    },
    {
      name: "Burger",
      imageSrc: "https://source.unsplash.com/random?burger",
      time: "45 min",
      type: "non-veg",
      isLiked: false,
      rating: 4.5,
    },
    {
      name: "Sandwich",
      imageSrc: "https://source.unsplash.com/random?sandwich",
      time: "40 min",
      type: "veg",
      isLiked: false,
      rating: 4.1,
    },
    {
      name: "Donets",
      imageSrc: "https://source.unsplash.com/random?donets",
      time: "60 min",
      type: "veg",
      isLiked: false,
      rating: 4.7,
    },
    {
      name: "Waffles",
      imageSrc: "https://source.unsplash.com/random?waffles",
      time: "50 min",
      type: "veg",
      isLiked: false,
      rating: 4.6,
    },
    {
      name: "Chicken fried pops",
      imageSrc: "https://source.unsplash.com/random?pops",
      time: "35 min",
      type: "non veg",
      isLiked: false,
      rating: 4.0,
    },
    {
      name: "Vegan Salad",
      imageSrc: "https://source.unsplash.com/random?salad",
      time: "20 min",
      type: "veg",
      isLiked: false,
      rating: 3.9,
    },
    {
      name: "Fried Chicken",
      imageSrc: "https://source.unsplash.com/random?friedChicken",
      time: "55 min",
      type: "non-veg",
      isLiked: false,
      rating: 4.3,
    },
    {
      name: "Raj Kachori Chaat",
      imageSrc: "https://source.unsplash.com/random?kachori",
      time: "45 min",
      type: "veg",
      isLiked: false,
      rating: 4.5,
    },
    {
      name: "Tea",
      imageSrc: "https://source.unsplash.com/random?tea",
      time: "30 min",
      type: "veg",
      isLiked: false,
      rating: 4.2,
    },
    {
      name: "Hot Dog",
      imageSrc: "https://source.unsplash.com/random?hotdog",
      time: "40 min",
      type: "non-veg",
      isLiked: false,
      rating: 4.4,
    },
    {
      name: "Masala Dosa",
      imageSrc: "https://source.unsplash.com/random?dosa",
      time: "70 min",
      type: "non-veg",
      isLiked: false,
      rating: 4.6,
    },
    {
      name: "Pav Bhaji",
      imageSrc: "https://source.unsplash.com/random?Pavbhaji",
      time: "25 min",
      type: "veg",
      isLiked: false,
      rating: 3.8,
    },
    {
      name: "Garlic Noodles",
      imageSrc: "https://source.unsplash.com/random?noodles",
      time: "35 min",
      type: "veg",
      isLiked: false,
      rating: 4.3,
    },
    {
      name: "Cake",
      imageSrc: "https://source.unsplash.com/random?Cake",
      time: "90 min",
      type: "veg",
      isLiked: false,
      rating: 4.9,
    },
  ];
  
  const recipeContainer = document.getElementById("recipeContainer");
  const searchInput = document.getElementById("searchInput");
  const showAllBtn = document.getElementById("showAllBtn");
  const showVegBtn = document.getElementById("showVegBtn");
  const showNonVegBtn = document.getElementById("showNonVegBtn");
  const ratingAboveRadio = document.getElementById("ratingAbove");
  const ratingBelowRadio = document.getElementById("ratingBelow");
  
  // fetch the data and dynamically generate the recipe cards.
  function generateRecipeCard(recipe) {
    const card = document.createElement("div");
    card.classList.add("recipe-card");
  
    const image = document.createElement("img");
    image.src = recipe.imageSrc;
    card.appendChild(image);
  
    const name = document.createElement("h3");
    name.textContent = recipe.name;
    card.appendChild(name);
  
    const type = document.createElement("p");
    type.textContent = `${recipe.type}`;
    card.appendChild(type);
  
    const time = document.createElement("p");
    time.textContent = `${recipe.time}`;
    card.appendChild(time);
  
    const rating = document.createElement("p");
    rating.textContent = `⭐ ${recipe.rating}`;
    card.appendChild(rating);
  
    const likeButton = document.createElement("span");
    likeButton.classList.add("like-button");
    likeButton.addEventListener("click", () => {
      recipe.isLiked = !recipe.isLiked;
      likeButton.textContent = recipe.isLiked ? "❤️" : "🖤"; // Adjusted content
    });
  
    // Initial content based on whether the recipe is liked or not
    likeButton.textContent = recipe.isLiked ? "❤️" : "🖤";
  
    card.appendChild(likeButton);
  
    recipeContainer.appendChild(card);
  }
  
  function filterRecipes(searchQuery) {
    // Clear existing recipes
    recipeContainer.innerHTML = "";
  
    // Filter recipes based on the search query
    const filteredRecipes = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    // Generate cards for filtered recipes
    filteredRecipes.forEach((recipe) => {
      generateRecipeCard(recipe);
    });
  }
  
  // Listen for input in the search bar
  searchInput.addEventListener("input", (event) => {
    const searchQuery = event.target.value.trim();
    filterRecipes(searchQuery);
  });
  
  // functionality to toggle recipe types (veg, non-veg, all).
  function toggleRecipeDisplay(type) {
    // Clear existing recipes
    recipeContainer.innerHTML = "";
  
    // Filter recipes based on the selected type
    let filteredRecipes;
    if (type === "all") {
      filteredRecipes = recipes;
    } else {
      filteredRecipes = recipes.filter((recipe) => recipe.type === type);
    }
  
    // Generate cards for filtered recipes
    filteredRecipes.forEach((recipe) => {
      generateRecipeCard(recipe);
    });
  }
  // Event listeners for toggle buttons
  showAllBtn.addEventListener("click", () => toggleRecipeDisplay("all"));
  showVegBtn.addEventListener("click", () => toggleRecipeDisplay("veg"));
  showNonVegBtn.addEventListener("click", () => toggleRecipeDisplay("non-veg"));
  
  function filterRecipesByRating() {
    // Clear existing recipes
    recipeContainer.innerHTML = "";
  
    let filteredRecipes;
    if (ratingAboveRadio.checked) {
      filteredRecipes = recipes.filter((recipe) => recipe.rating > 4.0);
    } else if (ratingBelowRadio.checked) {
      filteredRecipes = recipes.filter((recipe) => recipe.rating < 4.0);
    } else {
      filteredRecipes = recipes;
    }
  
    // Generate cards for filtered recipes
    filteredRecipes.forEach((recipe) => {
      generateRecipeCard(recipe);
    });
  }
  
  // Event listeners for radio buttons
  ratingAboveRadio.addEventListener("change", filterRecipesByRating);
  ratingBelowRadio.addEventListener("change", filterRecipesByRating);
  
  // Map over the recipes and generate cards for each recipe
  recipes.forEach((recipe) => {
    generateRecipeCard(recipe);
  });
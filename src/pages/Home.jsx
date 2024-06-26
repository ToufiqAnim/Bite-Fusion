import { useState } from 'react';
import Banner from '../components/home/Banner';
import RecepiCard from '../components/cards/RecipeCard';
import CategoryCards from '../components/cards/CategoryCards';

const Home = () => {
  const [recipes, setRecipes] = useState();
  const [categories, setCategories] = useState();
  const load = async () => {
    const fetchedRecipes = await fetch('http://localhost:3000/recipe');
    const recipeData = await fetchedRecipes.json();
    setRecipes(recipeData);

    const fetchedCategories = await fetch('http://localhost:3000/categories');
    const categoryData = await fetchedCategories.json();

    setCategories(categoryData);
  };
  load();
  return (
    <div className="bg-white text-black pb-10">
      <Banner />

      <div className="mx-16 ">
        <div className="text-center pb-14">
          <h1 className="text-4xl my-20  mb-[10px]">
            What kind of Foods we serve for you
          </h1>
          <p className="text-gray-400">
            Who are in extremely love with eco friendly system.
          </p>
        </div>
        <div className="grid grid-cols-6 gap-6 ">
          {categories?.map((category) => (
            <CategoryCards key={category?.id} category={category} />
          ))}
        </div>
      </div>
      <div className="mx-16">
        <h1 className="text-4xl my-20 text-center">Our Newest Recipes </h1>
        <div className="grid grid-cols-4 gap-6">
          {recipes
            ?.reverse()
            ?.slice(0, 4)
            ?.map((recipe) => (
              <RecepiCard key={recipe?.id} recipe={recipe} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

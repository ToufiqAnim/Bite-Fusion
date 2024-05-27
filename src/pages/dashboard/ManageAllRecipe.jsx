import axios from 'axios';
import { useEffect, useState } from 'react';
import RecipeRow from '../../components/cards/RecipeRow';
import { Link } from 'react-router-dom';

const ManageAllRecipe = () => {
  const [recipes, setRecipes] = useState();
  useEffect(() => {
    const load = async () => {
      const recipeData = await axios.get('http://localhost:3000/recipe');
      if (recipeData?.status === 200) {
        setRecipes(recipeData?.data);
        console.log(recipeData);
      }
    };
    load();
  }, []);

  return (
    <>
      <div className="overflow-x-auto w-full p-16 mt-10 text-black border border-slate-300 mx-auto container">
        <h1 className="text-3xl mb-4">All Menu List</h1>
        <div className="text-sm breadcrumbs items-start">
          <ul>
            <li className='text-red-500'>
              <Link to={'/dashbord'}>Home</Link>
            </li>

            <li>
              <Link to={'/dashbord/manage-recipes'}>Manage All Recipes</Link>
            </li>
          </ul>
        </div>
        <table className="table ">
          {/* head */}
          <thead>
            <tr className="bg-red-400 text-white border-b-0 text-sm">
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {recipes?.map((recipe) => (
              <RecipeRow key={recipe?.id} recipe={recipe} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageAllRecipe;

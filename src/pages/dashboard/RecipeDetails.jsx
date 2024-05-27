import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const RecipeDetails = () => {
  const { id } = useParams();

  const [recipeDetails, setRecipeDetails] = useState();
  const [categories, setCategories] = useState();

  useEffect(() => {
    const load = async () => {
      const categoriesData = await axios.get(
        'http://localhost:3000/categories'
      );
      if (categoriesData?.status === 200) {
        setCategories(categoriesData?.data);
      }

      const recipeData = await axios.get(`http://localhost:3000/recipe/${id}`);
      if (recipeData?.status === 200) {
        setRecipeDetails(recipeData?.data);
      }
    };

    load();
  }, [id]);
  return (
    <div className=" mx-auto container">
      <div className="text-sm breadcrumbs items-start mb-4 text-black">
        <ul>
          <li className="text-red-500">
            <Link to={'/dashbord'}>Home</Link>
          </li>

          <li>{recipeDetails?.title}</li>
        </ul>
      </div>
      <div className="card lg:card-side text-black shadow-xl">
        <figure>
          <img src={recipeDetails?.image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="text-4xl font-semibold italic">
            {recipeDetails?.title}
          </h2>
          <div>
            <p className="text-xl italic font-semibold pb-6">
              price: ${recipeDetails?.price}
            </p>
            <p className="text-sm italic text-gray-500">
              <span className="font-bold text-black">Recipe Description:</span>
              {recipeDetails?.description}
            </p>
            <br />
            <p className="text-sm italic text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              quos ut quia temporibus! Sequi blanditiis non maxime error eius?
              Itaque eius commodi rerum nostrum magnam esse mollitia porro. Nam,
              ab?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;

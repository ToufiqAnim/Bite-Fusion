import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const AddRecipe = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    async function load() {
      const data = await axios.get('http://localhost:3000/categories');
      if (data?.status === 200) {
        console.log(data?.data);
        setCategories(data?.data);
      }
    }

    load();
  }, []);

  const handleCreateRecipe = async (e) => {
    e.preventDefault();

    const form = e.target;

    const id = form.id.value;
    const title = form.title.value;
    const price = form.price.value;
    const category = form.category.value;
    const description = form.description.value;
    const recipeData = {
      id,
      title,
      price,
      category,
      description,
    };

    try {
      await axios.post('http://localhost:3000/recipe', recipeData);
      toast.success('Recipe added successfully!');
      form.reset();
    } catch (error) {
      toast.error('Failed to add recipe.');
    }
  };
  return (
    <div className="w-full p-16 text-black border border-slate-300 mx-auto container">
      <div className="text-sm breadcrumbs items-start mb-4">
        <ul>
          <li className="text-red-500">
            <Link to={'/dashbord'}>Home</Link>
          </li>

          <li>
            <Link to={'/dashbord/manage-recipes'}>Add Recipe</Link>
          </li>
        </ul>
      </div>
      <h1 className="text-4xl mb-8">Add Recipe</h1>

      <form onSubmit={handleCreateRecipe} className="w-full border p-10">
        <div className="mb-4">
          <label htmlFor="">Id </label>
          <input
            type="text"
            name="id"
            className="w-full py-3 px-5 border bg-white text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Title </label>
          <input
            type="text"
            name="title"
            className="w-full py-3 px-5 border bg-white text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Price </label>
          <input
            type="number"
            name="price"
            className="w-full py-3 px-5 border bg-white text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Cateogry </label>
          <select
            name="category"
            id=""
            className="w-full py-3 px-5 border bg-white text-black"
          >
            {categories?.map((category) => (
              <option key={category?.id} value={category?.title}>
                {category?.title}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="">Description </label>
          <textarea
            name="description"
            className="w-full py-3 px-5 border bg-white text-black"
          />
        </div>

        <div className="mb-4">
          <input
            type="submit"
            value={'Add Recipe'}
            className="w-full btn py-3 px-5 border btn-neutral text-white border-slate-300"
          />
        </div>
      </form>
    </div>
  );
};

export default AddRecipe;

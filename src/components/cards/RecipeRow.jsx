import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const RecipeRow = ({ recipe, onDelete }) => {
  return (
    <tr>
      <th>{recipe?.id}</th>
      <td>{recipe?.title}</td>
      <td>{recipe?.price}</td>
      <td>{recipe?.category}</td>
      <td className="flex gap-4">
        <Link
          to={`/dashbord/edit-recipe/${recipe?.id}`}
          className="btn btn-sm btn-neutral"
        >
          Edit
        </Link>
        <button
          className="btn btn-sm btn-error"
          onClick={() => onDelete(recipe?.id)}
        >
          Delete
        </button>
      </td>
      <td>
        <Link
          to={`/dashbord/recipe/${recipe?.id}`}
          className="btn btn-sm btn-success text-white"
        >
          Details
        </Link>
      </td>
    </tr>
  );
};
export default RecipeRow;

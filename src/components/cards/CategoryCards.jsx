/* eslint-disable react/prop-types */
const CategoryCards = ({ category }) => {
  return (
    <div className="border px-5 py-5 rounded hover:bg-red-600 hover:text-white">
      <h1 className="text-center">{category?.title}</h1>
    </div>
  );
};

export default CategoryCards;

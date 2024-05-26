const Banner = () => {
  return (
    <div
      className="hero text-justify h-[600px]"
      style={{
        backgroundImage:
          'url(https://preview.colorlib.com/theme/marco/img/hero-bg.jpg.webp)',
      }}
    >
      <div className=""></div>
      <div className="text-left text-white">
        <div className="max-w-md">
          <p className="mb-5">WIDE OPTIONS OF CHOICE</p>
          <h1 className="mb-5 text-5xl font-bold">Delicious Recipes</h1>
          <p className="mb-5">
            inappropriate behavior is often laughed off as “boys will be boys,”
            women face higher conduct standards especially in the workplace.
            That’s why it’s crucial that, as women.
          </p>
          <button className="px-6 py-3 bg-red-600 border-none text-white rounded-none">
            Check Our Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

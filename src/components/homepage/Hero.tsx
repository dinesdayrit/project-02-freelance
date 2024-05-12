const Hero = () => {  return (
    <div className="relative h-[80vh]" id="home">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(hero.jpg)' }}></div>
      <div className="absolute inset-0 flex items-center bg-black bg-opacity-40">
        <div className="flex flex-col ml-20">
        <h1 className="text-4xl font-bold text-yellow-100">HERO/BANNER SECTION</h1>
        <h1 className="text-4xl font-bold text-yellow-100">INSERT TEXT HERE</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;

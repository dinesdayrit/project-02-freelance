const Hero = () => {  return (
    <div className="relative h-[80vh]" id="home">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(hero.jpg)' }}></div>
      <div className="absolute inset-0 flex items-center bg-white bg-opacity-80">
        <div className="flex flex-col">
        <img src="option1.png" width={1000}/>
        </div>
      </div>
    </div>
  );
};

export default Hero;

const Hero = () => {
  return (
    <section className="bg-newspaper-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-block bg-newspaper-black text-newspaper-white px-3 py-1 text-xs font-open-sans font-semibold uppercase tracking-wide mb-4">
              Главная новость
            </div>
            <h2 className="font-merriweather font-bold text-3xl md:text-4xl text-newspaper-black leading-tight mb-4">
              Университет запускает новую программу стипендий для талантливых
              студентов
            </h2>
            <p className="font-open-sans text-newspaper-medium-gray text-lg leading-relaxed mb-6">
              Совет университета одобрил создание фонда поддержки студентов,
              демонстрирующих выдающиеся результаты в учёбе и научной
              деятельности. Программа стартует уже в следующем семестре.
            </p>
            <div className="flex items-center space-x-4 text-sm font-open-sans text-newspaper-medium-gray">
              <span>15 ноября 2024</span>
              <span>•</span>
              <span>Анна Петрова</span>
              <span>•</span>
              <span>5 мин чтения</span>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Студенты в университете"
              className="w-full h-80 object-cover rounded-sm"
            />
            <div className="absolute inset-0 bg-newspaper-black bg-opacity-10 rounded-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

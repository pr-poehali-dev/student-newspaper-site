const Hero = () => {
  return (
    <section className="bg-newspaper-dark-bg dark-newspaper py-8 relative">
      {/* Decorative elements */}
      <div className="absolute top-4 left-8 star-decoration star-top-left star-large"></div>
      <div className="absolute top-4 right-8 star-decoration star-top-right star-large"></div>
      <div className="absolute bottom-4 left-16 star-decoration star-bottom-left star-medium"></div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="inline-block bg-newspaper-dark-text text-newspaper-dark-bg px-3 py-1 text-xs font-open-sans font-semibold uppercase tracking-wide mb-4 relative star-decoration star-top-right star-small">
              Главная новость
            </div>
            <h2 className="font-merriweather font-bold text-3xl md:text-4xl text-newspaper-dark-text leading-tight mb-4 relative stripe-decoration stripe-left">
              Университет запускает новую программу стипендий для талантливых
              студентов
            </h2>
            <p className="font-open-sans text-newspaper-dark-text-muted text-lg leading-relaxed mb-6">
              Совет университета одобрил создание фонда поддержки студентов,
              демонстрирующих выдающиеся результаты в учёбе и научной
              деятельности. Программа стартует уже в следующем семестре.
            </p>
            <div className="flex items-center space-x-4 text-sm font-open-sans text-newspaper-dark-text-muted relative stripe-decoration stripe-horizontal">
              <span>15 ноября 2024</span>
              <span>•</span>
              <span>Анна Петрова</span>
              <span>•</span>
              <span>5 мин чтения</span>
            </div>
          </div>

          <div className="relative star-decoration star-bottom-right star-medium">
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Студенты в университете"
              className="w-full h-80 object-cover rounded-sm"
            />
            <div className="absolute inset-0 bg-newspaper-dark-bg bg-opacity-20 rounded-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

const Sidebar = () => {
  const popularArticles = [
    {
      title: "Как подготовиться к сессии: советы отличников",
      views: "2.1k",
      date: "8 ноября",
    },
    {
      title: "Студенческое общежитие: правила и лайфхаки",
      views: "1.8k",
      date: "7 ноября",
    },
    {
      title: "Бюджетное питание для студентов",
      views: "1.5k",
      date: "6 ноября",
    },
    {
      title: "Где найти подработку студенту",
      views: "1.3k",
      date: "5 ноября",
    },
  ];

  const events = [
    {
      title: "День открытых дверей",
      date: "20 ноября",
      time: "10:00",
    },
    {
      title: "Конференция молодых учёных",
      date: "25 ноября",
      time: "14:00",
    },
    {
      title: "Новогодний концерт",
      date: "15 декабря",
      time: "19:00",
    },
  ];

  return (
    <aside className="bg-newspaper-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-sm mx-auto space-y-8">
          {/* Popular Articles */}
          <div className="border border-newspaper-border-gray p-6">
            <h3 className="font-merriweather font-bold text-xl text-newspaper-black mb-6 text-center">
              Популярное
            </h3>
            <div className="space-y-4">
              {popularArticles.map((article, index) => (
                <div
                  key={index}
                  className="border-b border-newspaper-border-gray pb-4 last:border-b-0 last:pb-0"
                >
                  <h4 className="font-open-sans font-semibold text-sm text-newspaper-black leading-tight mb-2 hover:text-newspaper-medium-gray transition-colors cursor-pointer">
                    {article.title}
                  </h4>
                  <div className="flex items-center justify-between text-xs font-open-sans text-newspaper-medium-gray">
                    <span>{article.date}</span>
                    <span>{article.views} просмотров</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="border border-newspaper-border-gray p-6">
            <h3 className="font-merriweather font-bold text-xl text-newspaper-black mb-6 text-center">
              Предстоящие события
            </h3>
            <div className="space-y-4">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="border-b border-newspaper-border-gray pb-4 last:border-b-0 last:pb-0"
                >
                  <h4 className="font-open-sans font-semibold text-sm text-newspaper-black leading-tight mb-1">
                    {event.title}
                  </h4>
                  <div className="flex items-center justify-between text-xs font-open-sans text-newspaper-medium-gray">
                    <span>{event.date}</span>
                    <span>{event.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote of the Day */}
          <div className="bg-newspaper-black text-newspaper-white p-6 text-center">
            <h3 className="font-merriweather font-bold text-lg mb-4">
              Цитата дня
            </h3>
            <blockquote className="font-open-sans text-sm italic leading-relaxed mb-3">
              "Образование — это то, что остаётся после того, как забыто всё
              изученное в школе"
            </blockquote>
            <cite className="font-open-sans text-xs">— Альберт Эйнштейн</cite>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

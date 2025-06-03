import NewsCard from "./NewsCard";

const NewsGrid = () => {
  const news = [
    {
      title: "Студенты факультета IT заняли первое место на хакатоне",
      excerpt:
        "Команда 'Code Warriors' представила инновационное решение для оптимизации учебного процесса",
      author: "Михаил Иванов",
      date: "14 ноября",
      category: "Технологии",
      imageUrl:
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "3 мин",
    },
    {
      title: "Открытие нового спортивного комплекса",
      excerpt:
        "Современный спортзал с бассейном и залами для различных видов спорта принимает первых посетителей",
      author: "Елена Смирнова",
      date: "13 ноября",
      category: "Спорт",
      imageUrl:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "4 мин",
    },
    {
      title: "Театральная студия готовит премьеру",
      excerpt:
        "Долгожданная постановка 'Гамлета' состоится в конце месяца в актовом зале университета",
      author: "Дарья Козлова",
      date: "12 ноября",
      category: "Культура",
      imageUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "2 мин",
    },
    {
      title: "Международный обмен: опыт студентов",
      excerpt:
        "Рассказы участников программы академической мобильности о жизни и учёбе за рубежом",
      author: "Артём Волков",
      date: "11 ноября",
      category: "Образование",
      imageUrl:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "6 мин",
    },
    {
      title: "Экологический проект 'Зелёный кампус'",
      excerpt:
        "Студенты и преподаватели объединились для создания более экологичной среды в университете",
      author: "Ольга Петрова",
      date: "10 ноября",
      category: "Экология",
      imageUrl:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "5 мин",
    },
    {
      title: "Карьерная ярмарка: встреча с работодателями",
      excerpt:
        "Более 50 компаний представили свои вакансии для студентов и выпускников",
      author: "Николай Сидоров",
      date: "9 ноября",
      category: "Карьера",
      imageUrl:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "4 мин",
    },
  ];

  return (
    <section className="bg-newspaper-light-gray py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-merriweather font-bold text-3xl text-newspaper-black mb-2">
            Последние новости
          </h2>
          <div className="w-24 h-1 bg-newspaper-black mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((article, index) => (
            <NewsCard key={index} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsGrid;

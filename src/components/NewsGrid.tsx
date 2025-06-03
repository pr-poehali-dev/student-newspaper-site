import NewsCard from "./NewsCard";

const NewsGrid = () => {
  const news = [
    {
      title: "Конкурс красоты и таланта 'Ярославна НовГУ'",
      excerpt:
        "12 студенток соревновались в четырёх номинациях: дефиле, творческая визитка, импровизация и танец. Победителем стала Валерия Крапивина с Педагогического института",
      author: "Анна Морозова",
      date: "15 ноября",
      category: "Культура",
      imageUrl:
        "https://cdn.poehali.dev/files/ff530b22-b7e8-461d-9a2b-f33803c0eef6.png",
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
    <section className="bg-newspaper-dark-surface dark-newspaper-surface py-12 relative">
      {/* Decorative stars */}
      <div className="absolute top-6 left-6 star-decoration star-top-left star-large"></div>
      <div className="absolute top-6 right-6 star-decoration star-top-right star-large"></div>
      <div className="absolute bottom-6 left-1/2 star-decoration star-bottom-left star-medium"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-10 relative stripe-decoration stripe-horizontal">
          <h2 className="font-merriweather font-bold text-3xl text-newspaper-dark-text mb-2">
            Последние новости
          </h2>
          <div className="w-24 h-1 bg-newspaper-dark-text mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((article, index) => (
            <div
              key={index}
              className="relative star-decoration star-top-right star-small"
            >
              <NewsCard {...article} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsGrid;

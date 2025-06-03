import { Search, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-newspaper-dark-bg dark-newspaper border-b-2 border-newspaper-dark-border dark-newspaper-border relative">
      {/* Decorative stars */}
      <div className="absolute top-2 left-4 star-decoration star-top-left star-medium"></div>
      <div className="absolute top-2 right-4 star-decoration star-top-right star-medium"></div>

      {/* Top bar */}
      <div className="bg-newspaper-dark-surface text-newspaper-dark-text py-2 relative stripe-decoration stripe-horizontal">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4 relative star-decoration star-bottom-left star-small">
            <span>
              Сегодня:{" "}
              {new Date().toLocaleDateString("ru-RU", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center space-x-4 relative star-decoration star-bottom-right star-small">
            <span>Выпуск №47</span>
            <Search className="h-4 w-4 cursor-pointer hover:opacity-70" />
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-6 relative">
        <div className="text-center relative star-decoration star-top-left star-large">
          <div className="flex items-center justify-center gap-6 md:gap-8">
            {/* Left logo */}
            <img
              src="https://cdn.poehali.dev/files/eb86911c-4399-4bea-a146-7e2d107b4694.svg"
              alt="Логотип Студенческий Меридиан"
              className="w-12 h-12 md:w-16 md:h-16 opacity-90 filter brightness-0 invert"
            />

            {/* Title */}
            <div>
              <h1 className="font-merriweather font-black text-5xl md:text-6xl text-newspaper-dark-text tracking-tight relative stripe-decoration stripe-left">
                СТУДЕНЧЕСКИЙ
              </h1>
              <h2 className="font-merriweather font-black text-4xl md:text-5xl text-newspaper-dark-text mt-1 relative stripe-decoration stripe-right">
                МЕРИДИАН
              </h2>
            </div>

            {/* Right logo */}
            <img
              src="https://cdn.poehali.dev/files/eb86911c-4399-4bea-a146-7e2d107b4694.svg"
              alt="Логотип Студенческий Меридиан"
              className="w-12 h-12 md:w-16 md:h-16 opacity-90 filter brightness-0 invert"
            />
          </div>

          <p className="font-open-sans text-newspaper-dark-text-muted mt-2 text-sm uppercase tracking-wider">
            Голос студенческого сообщества
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-newspaper-dark-surface border-t border-newspaper-dark-border relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="hidden md:flex space-x-8 py-3 relative star-decoration star-bottom-left star-small">
              <a
                href="#"
                className="font-open-sans font-semibold text-newspaper-dark-text hover:text-newspaper-dark-text-muted transition-colors text-sm uppercase tracking-wide"
              >
                Главная
              </a>
              <a
                href="#"
                className="font-open-sans font-semibold text-newspaper-dark-text hover:text-newspaper-dark-text-muted transition-colors text-sm uppercase tracking-wide"
              >
                Новости
              </a>
              <a
                href="#"
                className="font-open-sans font-semibold text-newspaper-dark-text hover:text-newspaper-dark-text-muted transition-colors text-sm uppercase tracking-wide"
              >
                Студжизнь
              </a>
              <a
                href="#"
                className="font-open-sans font-semibold text-newspaper-dark-text hover:text-newspaper-dark-text-muted transition-colors text-sm uppercase tracking-wide"
              >
                Спорт
              </a>
              <a
                href="#"
                className="font-open-sans font-semibold text-newspaper-dark-text hover:text-newspaper-dark-text-muted transition-colors text-sm uppercase tracking-wide"
              >
                Культура
              </a>
              <a
                href="#"
                className="font-open-sans font-semibold text-newspaper-dark-text hover:text-newspaper-dark-text-muted transition-colors text-sm uppercase tracking-wide"
              >
                Мнения
              </a>
            </div>

            <div className="md:hidden py-3 relative star-decoration star-bottom-right star-small">
              <Menu className="h-6 w-6 text-newspaper-dark-text cursor-pointer" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import { Search, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-newspaper-white border-b-2 border-newspaper-black">
      {/* Top bar */}
      <div className="bg-newspaper-black text-newspaper-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
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
          <div className="flex items-center space-x-4">
            <span>Выпуск №47</span>
            <Search className="h-4 w-4 cursor-pointer hover:opacity-70" />
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          <h1 className="font-merriweather font-black text-5xl md:text-6xl text-newspaper-black tracking-tight">
            СТУДЕНЧЕСКИЙ
          </h1>
          <h2 className="font-merriweather font-black text-4xl md:text-5xl text-newspaper-black mt-1">
            МЕРИДИАН
          </h2>
          <p className="font-open-sans text-newspaper-medium-gray mt-2 text-sm uppercase tracking-wider">
            Голос студенческого сообщества
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-newspaper-light-gray border-t border-newspaper-border-gray">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="hidden md:flex space-x-8 py-3">
              <a
                href="#"
                className="font-open-sans font-semibold text-newspaper-black hover:text-newspaper-medium-gray transition-colors text-sm uppercase tracking-wide"
              >
                Главная
              </a>
              <a
                href="#"
                className="font-open-sans font-semibold text-newspaper-black hover:text-newspaper-medium-gray transition-colors text-sm uppercase tracking-wide"
              >
                Новости
              </a>
              <a
                href="#"
                className="font-open-sans font-semibold text-newspaper-black hover:text-newspaper-medium-gray transition-colors text-sm uppercase tracking-wide"
              >
                Студжизнь
              </a>
              <a
                href="#"
                className="font-open-sans font-semibold text-newspaper-black hover:text-newspaper-medium-gray transition-colors text-sm uppercase tracking-wide"
              >
                Спорт
              </a>
              <a
                href="#"
                className="font-open-sans font-semibold text-newspaper-black hover:text-newspaper-medium-gray transition-colors text-sm uppercase tracking-wide"
              >
                Культура
              </a>
              <a
                href="#"
                className="font-open-sans font-semibold text-newspaper-black hover:text-newspaper-medium-gray transition-colors text-sm uppercase tracking-wide"
              >
                Мнения
              </a>
            </div>

            <div className="md:hidden py-3">
              <Menu className="h-6 w-6 text-newspaper-black cursor-pointer" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

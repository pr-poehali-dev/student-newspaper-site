import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Telegram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-newspaper-black text-newspaper-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h3 className="font-merriweather font-bold text-2xl mb-4">
              СТУДЕНЧЕСКИЙ МЕРИДИАН
            </h3>
            <p className="font-open-sans text-sm text-gray-300 leading-relaxed mb-6 max-w-md">
              Независимое студенческое издание, освещающее жизнь университета,
              достижения студентов и актуальные вопросы молодёжи.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <Telegram className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-open-sans font-semibold text-sm uppercase tracking-wide mb-4">
              Разделы
            </h4>
            <ul className="space-y-2 font-open-sans text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Новости
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Студжизнь
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Спорт
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Культура
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Мнения
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-open-sans font-semibold text-sm uppercase tracking-wide mb-4">
              Контакты
            </h4>
            <div className="space-y-3 font-open-sans text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>redakciya@meridian.edu</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+7 (xxx) xxx-xx-xx</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Корпус А, каб. 205</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="font-open-sans text-xs text-gray-400">
            © 2024 Студенческий меридиан. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

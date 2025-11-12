import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Truck" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-secondary">LogiExpress</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#geography" className="text-foreground hover:text-primary transition-colors">География</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:inline-flex">Оставить заявку</Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-secondary leading-tight">
                Доставка грузов
                <span className="text-primary block">по всему миру</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Быстрая обработка заказов и оперативная доставка. 
                Надежный партнер для вашего бизнеса с прозрачными условиями сотрудничества.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  <Icon name="Phone" size={20} />
                  Связаться с нами
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Icon name="Calculator" size={20} />
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/032de81d-a5fa-436e-b254-a34e5e74545f/files/eff708c5-38da-4aa8-8661-ee262720badd.jpg"
                alt="Логистика" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="p-6 text-center space-y-2 hover:shadow-lg transition-shadow">
              <Icon name="Clock" size={40} className="text-primary mx-auto" />
              <h3 className="text-3xl font-bold text-secondary">24/7</h3>
              <p className="text-sm text-muted-foreground">Клиентская служба и консультации</p>
            </Card>
            <Card className="p-6 text-center space-y-2 hover:shadow-lg transition-shadow">
              <Icon name="Zap" size={40} className="text-accent mx-auto" />
              <h3 className="text-3xl font-bold text-secondary">&lt;30 мин</h3>
              <p className="text-sm text-muted-foreground">Обработка заявки</p>
            </Card>
            <Card className="p-6 text-center space-y-2 hover:shadow-lg transition-shadow">
              <Icon name="Globe" size={40} className="text-primary mx-auto" />
              <h3 className="text-3xl font-bold text-secondary">150+</h3>
              <p className="text-sm text-muted-foreground">Стран доставки</p>
            </Card>
            <Card className="p-6 text-center space-y-2 hover:shadow-lg transition-shadow">
              <Icon name="Shield" size={40} className="text-accent mx-auto" />
              <h3 className="text-3xl font-bold text-secondary">100%</h3>
              <p className="text-sm text-muted-foreground">Гарантия надежности</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр логистических решений для вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 space-y-4 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon name="Plane" size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-secondary">Авиаперевозки</h3>
              <p className="text-muted-foreground">
                Срочная доставка грузов по воздуху. Минимальные сроки, максимальная безопасность.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span className="text-sm">Доставка за 1-3 дня</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span className="text-sm">Отслеживание 24/7</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span className="text-sm">Страхование груза</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 space-y-4 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center">
                <Icon name="Ship" size={28} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-secondary">Морские перевозки</h3>
              <p className="text-muted-foreground">
                Экономичная доставка крупногабаритных и тяжелых грузов по всему миру.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-accent mt-0.5" />
                  <span className="text-sm">Контейнерные перевозки</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-accent mt-0.5" />
                  <span className="text-sm">Консолидация грузов</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-accent mt-0.5" />
                  <span className="text-sm">Таможенное оформление</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 space-y-4 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon name="Truck" size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-secondary">Автоперевозки</h3>
              <p className="text-muted-foreground">
                Оперативная наземная доставка грузов любого объема по заданному маршруту.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span className="text-sm">Доставка от двери до двери</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span className="text-sm">Различные типы транспорта</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span className="text-sm">Экспресс-доставка</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section id="geography" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">География доставки</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы доставляем грузы в любую точку мира с гарантией качества и сроков
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Европа</h3>
                  <p className="text-muted-foreground">
                    Все страны ЕС, Великобритания, Швейцария. Доставка за 2-5 дней.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Азия</h3>
                  <p className="text-muted-foreground">
                    Китай, Япония, Корея, Индия, страны Юго-Восточной Азии. Доставка за 3-7 дней.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Америка</h3>
                  <p className="text-muted-foreground">
                    США, Канада, страны Латинской Америки. Доставка за 5-10 дней.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Остальной мир</h3>
                  <p className="text-muted-foreground">
                    Африка, Океания, Ближний Восток. Индивидуальные сроки доставки.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/032de81d-a5fa-436e-b254-a34e5e74545f/files/b81f7e49-7c45-4d99-8d76-ce500c0e58ca.jpg"
                alt="География доставки" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">Преимущества сотрудничества</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 space-y-3 border-l-4 border-l-primary">
              <Icon name="Zap" size={32} className="text-primary" />
              <h3 className="text-xl font-bold text-secondary">Быстрая обработка</h3>
              <p className="text-sm text-muted-foreground">
                Обработка заявок в течение 30 минут. Оперативная подготовка документов и отправка груза.
              </p>
            </Card>
            <Card className="p-6 space-y-3 border-l-4 border-l-accent">
              <Icon name="BadgeCheck" size={32} className="text-accent" />
              <h3 className="text-xl font-bold text-secondary">Надежность</h3>
              <p className="text-sm text-muted-foreground">
                Страхование грузов, отслеживание на всех этапах, гарантия сохранности и своевременной доставки.
              </p>
            </Card>
            <Card className="p-6 space-y-3 border-l-4 border-l-primary">
              <Icon name="DollarSign" size={32} className="text-primary" />
              <h3 className="text-xl font-bold text-secondary">Выгодные цены</h3>
              <p className="text-sm text-muted-foreground">
                Прозрачное ценообразование без скрытых комиссий. Индивидуальные условия для постоянных клиентов.
              </p>
            </Card>
            <Card className="p-6 space-y-3 border-l-4 border-l-accent">
              <Icon name="Headphones" size={32} className="text-accent" />
              <h3 className="text-xl font-bold text-secondary">Поддержка 24/7</h3>
              <p className="text-sm text-muted-foreground">
                Персональный менеджер, круглосуточная техподдержка, оперативное решение любых вопросов.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground">
                Оставьте заявку и мы свяжемся с вами в течение 15 минут
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary">Ваше имя</label>
                    <Input 
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary">Телефон</label>
                    <Input 
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary">Сообщение</label>
                    <Textarea 
                      placeholder="Опишите ваши потребности в доставке..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full gap-2">
                    <Icon name="Send" size={20} />
                    Отправить заявку
                  </Button>
                </form>
              </Card>
              <div className="space-y-6">
                <Card className="p-6 flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    <p className="text-sm text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                  </div>
                </Card>
                <Card className="p-6 flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-1">Email</h3>
                    <p className="text-muted-foreground">info@logiexpress.ru</p>
                    <p className="text-sm text-muted-foreground">Ответим в течение часа</p>
                  </div>
                </Card>
                <Card className="p-6 flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-1">Офис</h3>
                    <p className="text-muted-foreground">г. Москва, ул. Логистическая, д. 1</p>
                    <p className="text-sm text-muted-foreground">БЦ "Транспорт", офис 401</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Truck" size={28} className="text-primary" />
                <span className="text-xl font-bold">LogiExpress</span>
              </div>
              <p className="text-sm text-white/70">
                Надежный партнер в мире логистики с 2005 года
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Авиаперевозки</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Морские перевозки</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Автоперевозки</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Складские услуги</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Наша команда</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Вакансии</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Следите за нами</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon name="Linkedin" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/70">
            <p>© 2024 LogiExpress. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
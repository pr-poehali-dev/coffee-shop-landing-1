import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";
import { useState, FormEvent } from "react";

const Index = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2'
  });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "✅ Бронирование принято!",
        description: `Ждём вас ${formData.date} в ${formData.time}. Мы свяжемся с вами по телефону ${formData.phone}`,
      });
      setFormData({ name: '', phone: '', date: '', time: '', guests: '2' });
    }, 1500);
  };

  const menuItems = [
    {
      category: "Кофе",
      items: [
        { name: "Эспрессо", price: "120₽", description: "Классический крепкий кофе" },
        { name: "Капучино", price: "180₽", description: "Эспрессо с молочной пенкой" },
        { name: "Латте", price: "190₽", description: "Нежный кофе с молоком" },
        { name: "Американо", price: "140₽", description: "Мягкий разбавленный эспрессо" },
        { name: "Раф", price: "210₽", description: "Сливочный кофе с ванилью" },
        { name: "Флэт Уайт", price: "200₽", description: "Двойной эспрессо с бархатной пенкой" }
      ]
    },
    {
      category: "Выпечка",
      items: [
        { name: "Круассан", price: "150₽", description: "Свежий французский круассан" },
        { name: "Булочка с корицей", price: "130₽", description: "Ароматная сладкая булочка" },
        { name: "Чизкейк", price: "220₽", description: "Нежный творожный десерт" },
        { name: "Брауни", price: "180₽", description: "Шоколадный пирог с орехами" },
        { name: "Эклер", price: "160₽", description: "Заварное пирожное с кремом" },
        { name: "Тарт с ягодами", price: "240₽", description: "Песочная корзиночка с сезонными ягодами" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-card/95 backdrop-blur-sm shadow-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-primary flex items-center gap-2">
            ☕ Аромат
          </h1>
          <div className="flex gap-4 md:gap-8">
            <button onClick={() => scrollToSection('hero')} className="text-foreground hover:text-primary transition-colors font-medium">
              Главная
            </button>
            <button onClick={() => scrollToSection('menu')} className="text-foreground hover:text-primary transition-colors font-medium">
              Меню
            </button>
            <button onClick={() => scrollToSection('booking')} className="text-foreground hover:text-primary transition-colors font-medium">
              Бронирование
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors font-medium">
              Контакты
            </button>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-24 md:pt-32 pb-16 md:pb-24 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Добро пожаловать в кофейню 
                <span className="text-primary"> Аромат</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Уютное место, где каждая чашка кофе согревает душу, а свежая выпечка создаёт атмосферу домашнего уюта
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  onClick={() => scrollToSection('menu')}
                >
                  Посмотреть меню
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
                  onClick={() => scrollToSection('booking')}
                >
                  Забронировать столик
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/dfdc4c15-9f54-4f4a-a259-21835f05b24a/files/e2df95fe-5fc8-4cdd-8be8-711a36f528ce.jpg"
                alt="Кофе с красивым латте-артом"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-card">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Coffee" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Свежий кофе</h3>
                <p className="text-muted-foreground">Зерна обжариваются каждую неделю для идеального вкуса</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-card">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Croissant" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Домашняя выпечка</h3>
                <p className="text-muted-foreground">Свежие круассаны и десерты каждое утро</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-card">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Heart" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Уютная атмосфера</h3>
                <p className="text-muted-foreground">Место, где хочется проводить время</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="menu" className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Наше меню</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Отборные сорта кофе и свежая выпечка собственного производства
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
            <div className="h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://cdn.poehali.dev/projects/dfdc4c15-9f54-4f4a-a259-21835f05b24a/files/e17d75be-4244-4e7a-b3f4-5e7cc02c7ba7.jpg"
                alt="Кофейное зерно и оборудование"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://cdn.poehali.dev/projects/dfdc4c15-9f54-4f4a-a259-21835f05b24a/files/c5b9fa27-7ddd-4e53-8582-092f57a05ae0.jpg"
                alt="Свежая выпечка"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {menuItems.map((section) => (
              <Card key={section.category} className="border-2 border-border shadow-lg hover:shadow-xl transition-all hover:border-primary/50 bg-card">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary flex items-center gap-2">
                    {section.category === "Кофе" ? "☕" : "🥐"} {section.category}
                  </h3>
                  <div className="space-y-6">
                    {section.items.map((item) => (
                      <div key={item.name} className="border-b border-border/50 pb-4 last:border-0 last:pb-0">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-semibold text-foreground">{item.name}</h4>
                          <span className="text-lg font-bold text-primary ml-4">{item.price}</span>
                        </div>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-16 md:py-24 px-4 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold">🎉 Специальное предложение</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Забронируйте столик</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              При бронировании на будний день — комплимент от шеф-кондитера в подарок!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <Card className="border-2 border-border shadow-2xl bg-card animate-scale-in">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base font-semibold">Ваше имя *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Иван Петров"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="h-12 text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base font-semibold">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="h-12 text-base"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-base font-semibold">Дата *</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time" className="text-base font-semibold">Время *</Label>
                      <Input
                        id="time"
                        type="time"
                        value={formData.time}
                        onChange={(e) => setFormData({...formData, time: e.target.value})}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="guests" className="text-base font-semibold">Количество гостей</Label>
                    <select
                      id="guests"
                      value={formData.guests}
                      onChange={(e) => setFormData({...formData, guests: e.target.value})}
                      className="w-full h-12 px-3 rounded-md border border-input bg-background text-base"
                    >
                      <option value="1">1 человек</option>
                      <option value="2">2 человека</option>
                      <option value="3">3 человека</option>
                      <option value="4">4 человека</option>
                      <option value="5">5+ человек</option>
                    </select>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Icon name="Loader2" size={20} className="animate-spin" />
                        Отправка...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Icon name="Calendar" size={20} />
                        Забронировать столик
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6 animate-fade-in">
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Gift" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Комплимент в подарок</h3>
                      <p className="text-muted-foreground">Забронируйте столик на будний день и получите десерт от шефа бесплатно</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Удобное время</h3>
                      <p className="text-muted-foreground text-sm">Мы открыты каждый день с 8:00 до 23:00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Users" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Уютные залы</h3>
                      <p className="text-muted-foreground text-sm">Столики у окна, диванная зона и банкетный зал</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Sparkles" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Особые события</h3>
                      <p className="text-muted-foreground text-sm">Дни рождения, встречи, деловые переговоры</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 md:py-24 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Контакты</h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Приходите к нам за чашечкой ароматного кофе
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-border shadow-lg bg-card">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Адрес</h3>
                    <p className="text-muted-foreground">г. Москва, ул. Кофейная, д. 15</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Режим работы</h3>
                    <p className="text-muted-foreground">Пн-Пт: 8:00 - 22:00</p>
                    <p className="text-muted-foreground">Сб-Вс: 9:00 - 23:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Телефон</h3>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <p className="text-muted-foreground">info@aromat-coffee.ru</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border shadow-lg bg-card overflow-hidden">
              <CardContent className="p-0">
                <div className="w-full h-full min-h-[400px] bg-muted/50 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Icon name="MapPin" size={48} className="text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Карта расположения</p>
                    <p className="text-sm text-muted-foreground mt-2">г. Москва, ул. Кофейная, д. 15</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Кофейня Аромат. Все права защищены.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Twitter" size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
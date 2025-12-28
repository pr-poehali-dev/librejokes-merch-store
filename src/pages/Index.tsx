import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { ProductCard } from '@/components/ProductCard';
import { ProductModal } from '@/components/ProductModal';
import { SearchFilters } from '@/components/SearchFilters';

const products = [
  {
    id: 1,
    name: 'Футболка "Геометрия юмора"',
    price: 1990,
    category: 'Футболки',
    images: [
      'https://cdn.poehali.dev/projects/b327ef2e-2245-47e1-b5c8-2117cc59f0aa/files/0fa43e71-8f11-4b90-aa48-3b3e4d526f4c.jpg',
      'https://cdn.poehali.dev/projects/b327ef2e-2245-47e1-b5c8-2117cc59f0aa/files/0fa43e71-8f11-4b90-aa48-3b3e4d526f4c.jpg',
      'https://cdn.poehali.dev/projects/b327ef2e-2245-47e1-b5c8-2117cc59f0aa/files/0fa43e71-8f11-4b90-aa48-3b3e4d526f4c.jpg',
      'https://cdn.poehali.dev/projects/b327ef2e-2245-47e1-b5c8-2117cc59f0aa/files/0fa43e71-8f11-4b90-aa48-3b3e4d526f4c.jpg',
    ],
    colors: ['#000000', '#8B5CF6', '#FFFFFF'],
    description: 'Минималистичная футболка с ярким неоновым принтом. 100% хлопок, плотность 180 г/м². Принт выполнен методом шелкографии, не выцветает после стирки.',
    reviews: [
      { author: 'Анна К.', text: 'Отличное качество печати! Цвета яркие, ткань приятная к телу. Заказала ещё одну.', date: '15 дек 2024' },
      { author: 'Максим Р.', text: 'Пришло быстро, упаковка хорошая. Размер соответствует. Дизайн огонь!', date: '10 дек 2024' },
      { author: 'Елена С.', text: 'Стильная и качественная футболка. Носится комфортно, не линяет.', date: '5 дек 2024' },
    ],
  },
  {
    id: 2,
    name: 'Шоппер "Абстракция смеха"',
    price: 1490,
    category: 'Сумки',
    images: [
      'https://cdn.poehali.dev/projects/b327ef2e-2245-47e1-b5c8-2117cc59f0aa/files/88016830-4870-462e-8998-c1ffb5b7f289.jpg',
      'https://cdn.poehali.dev/projects/b327ef2e-2245-47e1-b5c8-2117cc59f0aa/files/88016830-4870-462e-8998-c1ffb5b7f289.jpg',
      'https://cdn.poehali.dev/projects/b327ef2e-2245-47e1-b5c8-2117cc59f0aa/files/88016830-4870-462e-8998-c1ffb5b7f289.jpg',
      'https://cdn.poehali.dev/projects/b327ef2e-2245-47e1-b5c8-2117cc59f0aa/files/88016830-4870-462e-8998-c1ffb5b7f289.jpg',
    ],
    colors: ['#FFFFFF', '#D946EF'],
    description: 'Вместительный шоппер из плотного хлопка (320 г/м²). Широкие ручки для комфортного ношения. Яркий принт с двух сторон.',
    reviews: [
      { author: 'Ирина М.', text: 'Супер вместительная сумка! Принт качественный, ручки прочные. Беру с собой везде.', date: '18 дек 2024' },
      { author: 'Дмитрий Л.', text: 'Подарил девушке — в восторге. Дизайн необычный, качество на высоте.', date: '12 дек 2024' },
    ],
  },
  {
    id: 3,
    name: 'Худи "Неоновая типографика"',
    price: 3490,
    category: 'Худи',
    images: [
      'https://cdn.poehali.dev/projects/b327ef2e-2245-47e1-b5c8-2117cc59f0aa/files/7ffac368-3b15-4acb-9aa3-6eceed58f264.jpg',
      'https://cdn.poehali.dev/projects/b327ef2e-2245-47e1-b5c8-2117cc59f0aa/files/7ffac368-3b15-4acb-9aa3-6eceed58f264.jpg',
      'https://cdn.poehali.dev/projects/b327ef2e-2245-47e1-b5c8-2117cc59f0aa/files/7ffac368-3b15-4acb-9aa3-6eceed58f264.jpg',
      'https://cdn.poehali.dev/projects/b327ef2e-2245-47e1-b5c8-2117cc59f0aa/files/7ffac368-3b15-4acb-9aa3-6eceed58f264.jpg',
    ],
    colors: ['#000000', '#0EA5E9', '#F97316'],
    description: 'Тёплое худи с капюшоном и карманом-кенгуру. Состав: 80% хлопок, 20% полиэстер. Плотность 320 г/м². Принт выполнен в технике DTG для максимальной детализации.',
    reviews: [
      { author: 'Александра П.', text: 'Очень тёплое и мягкое! Цвета яркие, не выцветают. Размер идеально сел.', date: '20 дек 2024' },
      { author: 'Никита В.', text: 'Качество бомба! Носится удобно, дизайн огненный. Рекомендую!', date: '14 дек 2024' },
      { author: 'Ольга К.', text: 'Купила себе и мужу — оба довольны. Принт не трескается, ткань плотная.', date: '8 дек 2024' },
    ],
  },
  {
    id: 4,
    name: 'Футболка "Минимал шутка"',
    price: 1990,
    category: 'Футболки',
    images: [
      'https://cdn.poehali.dev/projects/b327ef2e-2245-47e1-b5c8-2117cc59f0aa/files/0fa43e71-8f11-4b90-aa48-3b3e4d526f4c.jpg',
      'https://cdn.poehali.dev/projects/b327ef2e-2245-47e1-b5c8-2117cc59f0aa/files/0fa43e71-8f11-4b90-aa48-3b3e4d526f4c.jpg',
      'https://cdn.poehali.dev/projects/b327ef2e-2245-47e1-b5c8-2117cc59f0aa/files/0fa43e71-8f11-4b90-aa48-3b3e4d526f4c.jpg',
      'https://cdn.poehali.dev/projects/b327ef2e-2245-47e1-b5c8-2117cc59f0aa/files/0fa43e71-8f11-4b90-aa48-3b3e4d526f4c.jpg',
    ],
    colors: ['#FFFFFF', '#8B5CF6', '#000000'],
    description: 'Классическая футболка с лаконичным дизайном. 100% хлопок премиум-качества. Идеально для повседневной носки.',
    reviews: [
      { author: 'Сергей Т.', text: 'Простая и стильная. Качество отличное, ношу уже месяц — как новая.', date: '16 дек 2024' },
    ],
  },
  {
    id: 5,
    name: 'Худи "Кислотный вайб"',
    price: 3490,
    category: 'Худи',
    images: [
      'https://cdn.poehali.dev/projects/b327ef2e-2245-47e1-b5c8-2117cc59f0aa/files/7ffac368-3b15-4acb-9aa3-6eceed58f264.jpg',
      'https://cdn.poehali.dev/projects/b327ef2e-2245-47e1-b5c8-2117cc59f0aa/files/7ffac368-3b15-4acb-9aa3-6eceed58f264.jpg',
      'https://cdn.poehali.dev/projects/b327ef2e-2245-47e1-b5c8-2117cc59f0aa/files/7ffac368-3b15-4acb-9aa3-6eceed58f264.jpg',
      'https://cdn.poehali.dev/projects/b327ef2e-2245-47e1-b5c8-2117cc59f0aa/files/7ffac368-3b15-4acb-9aa3-6eceed58f264.jpg',
    ],
    colors: ['#D946EF', '#8B5CF6', '#000000'],
    description: 'Худи с ярким неоновым дизайном. Утеплённая модель для холодной погоды. Качественная фурнитура.',
    reviews: [
      { author: 'Мария Г.', text: 'Шикарное худи! Тёплое, яркое, удобное. Все друзья спрашивают где купить.', date: '22 дек 2024' },
      { author: 'Артём Ж.', text: 'Брал на зиму — не разочаровал. Качество топ, дизайн бомба!', date: '17 дек 2024' },
    ],
  },
  {
    id: 6,
    name: 'Шоппер "Цветной минимализм"',
    price: 1490,
    category: 'Сумки',
    images: [
      'https://cdn.poehali.dev/projects/b327ef2e-2245-47e1-b5c8-2117cc59f0aa/files/88016830-4870-462e-8998-c1ffb5b7f289.jpg',
      'https://cdn.poehali.dev/projects/b327ef2e-2245-47e1-b5c8-2117cc59f0aa/files/88016830-4870-462e-8998-c1ffb5b7f289.jpg',
      'https://cdn.poehali.dev/projects/b327ef2e-2245-47e1-b5c8-2117cc59f0aa/files/88016830-4870-462e-8998-c1ffb5b7f289.jpg',
      'https://cdn.poehali.dev/projects/b327ef2e-2245-47e1-b5c8-2117cc59f0aa/files/88016830-4870-462e-8998-c1ffb5b7f289.jpg',
    ],
    colors: ['#FFFFFF', '#0EA5E9'],
    description: 'Лёгкая и прочная сумка для покупок. Минималистичный дизайн с цветовыми акцентами. Компактно складывается.',
    reviews: [
      { author: 'Виктория Ш.', text: 'Удобная сумка для продуктов. Лёгкая, но крепкая. Принт яркий!', date: '19 дек 2024' },
    ],
  },
];

const categories = ['Футболки', 'Худи', 'Сумки'];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleProductClick = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b-2 border-primary">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="font-heading text-2xl md:text-3xl font-bold tracking-tight">
              <span className="text-primary">Libre</span>jokes
            </h1>
            <nav className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('catalog')} className="hover:text-primary transition-colors font-medium">
                Товары
              </button>
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors font-medium">
                О нас
              </button>
              <button onClick={() => scrollToSection('delivery')} className="hover:text-primary transition-colors font-medium">
                Доставка
              </button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors font-medium">
                Контакты
              </button>
            </nav>
            <Button variant="outline" size="sm" className="gap-2">
              <Icon name="ShoppingCart" size={18} />
              <span className="hidden sm:inline">Корзина</span>
              <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                0
              </span>
            </Button>
          </div>
        </div>
      </header>

      <section className="py-12 md:py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Издательство фото-шуток
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in">
            Минималистичный мерч с кислотными акцентами. Носи юмор с собой.
          </p>
          <Button size="lg" onClick={() => scrollToSection('catalog')} className="gap-2 animate-scale-in">
            <Icon name="ShoppingBag" size={20} />
            Смотреть каталог
          </Button>
        </div>
      </section>

      <section id="catalog" className="py-16 scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">Каталог товаров</h2>
          
          <SearchFilters
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            categories={categories}
          />

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                image={product.images[0]}
                onClick={() => handleProductClick(product)}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <Icon name="PackageSearch" size={48} className="mx-auto mb-4 text-muted-foreground" />
              <h3 className="font-heading text-xl font-bold mb-2">Товары не найдены</h3>
              <p className="text-muted-foreground">Попробуйте изменить параметры поиска</p>
            </div>
          )}
        </div>
      </section>

      <Separator className="container mx-auto" />

      <section id="about" className="py-16 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">О нас</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              <span className="font-bold text-foreground">Librejokes</span> — это издательство фото-шуток, которое создаёт минималистичный мерч с кислотными цветами. 
              Мы верим, что юмор должен быть стильным и качественным.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Каждый дизайн проходит тщательный отбор. Мы используем только качественные материалы и современные техники печати, 
              чтобы ваш мерч радовал долгие годы.
            </p>
          </div>
        </div>
      </section>

      <Separator className="container mx-auto" />

      <section id="delivery" className="py-16 scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center">Доставка</h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-lg border-2 border-border text-center">
              <Icon name="Truck" size={32} className="mx-auto mb-4 text-primary" />
              <h3 className="font-heading font-bold text-xl mb-2">По России</h3>
              <p className="text-muted-foreground">СДЭК, Почта России. 3-7 дней</p>
            </div>
            
            <div className="p-6 rounded-lg border-2 border-border text-center">
              <Icon name="MapPin" size={32} className="mx-auto mb-4 text-secondary" />
              <h3 className="font-heading font-bold text-xl mb-2">Москва и МО</h3>
              <p className="text-muted-foreground">Курьерская доставка. 1-2 дня</p>
            </div>
            
            <div className="p-6 rounded-lg border-2 border-border text-center">
              <Icon name="Package" size={32} className="mx-auto mb-4 text-accent" />
              <h3 className="font-heading font-bold text-xl mb-2">Самовывоз</h3>
              <p className="text-muted-foreground">Бесплатно из пунктов СДЭК</p>
            </div>
          </div>
        </div>
      </section>

      <Separator className="container mx-auto" />

      <section id="contacts" className="py-16 scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">Контакты</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="p-6 rounded-lg border-2 border-border text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="User" size={40} className="text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl mb-1">Алексей Смирнов</h3>
                <p className="text-sm text-primary mb-3">Арт-директор</p>
                <div className="space-y-2 text-sm">
                  <a href="mailto:alexey@librejokes.ru" className="flex items-center justify-center gap-2 hover:text-primary transition-colors">
                    <Icon name="Mail" size={16} />
                    alexey@librejokes.ru
                  </a>
                  <a href="tel:+79991234567" className="flex items-center justify-center gap-2 hover:text-primary transition-colors">
                    <Icon name="Phone" size={16} />
                    +7 (999) 123-45-67
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border-2 border-border text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="User" size={40} className="text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl mb-1">Мария Петрова</h3>
                <p className="text-sm text-primary mb-3">Менеджер по продажам</p>
                <div className="space-y-2 text-sm">
                  <a href="mailto:maria@librejokes.ru" className="flex items-center justify-center gap-2 hover:text-primary transition-colors">
                    <Icon name="Mail" size={16} />
                    maria@librejokes.ru
                  </a>
                  <a href="tel:+79991234568" className="flex items-center justify-center gap-2 hover:text-primary transition-colors">
                    <Icon name="Phone" size={16} />
                    +7 (999) 123-45-68
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border-2 border-border text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="User" size={40} className="text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl mb-1">Дмитрий Козлов</h3>
                <p className="text-sm text-primary mb-3">Служба поддержки</p>
                <div className="space-y-2 text-sm">
                  <a href="mailto:support@librejokes.ru" className="flex items-center justify-center gap-2 hover:text-primary transition-colors">
                    <Icon name="Mail" size={16} />
                    support@librejokes.ru
                  </a>
                  <a href="tel:+79991234569" className="flex items-center justify-center gap-2 hover:text-primary transition-colors">
                    <Icon name="Phone" size={16} />
                    +7 (999) 123-45-69
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">Мы в социальных сетях</p>
            <div className="flex items-center justify-center gap-4">
              <Button variant="outline" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="outline" size="icon">
                <Icon name="Send" size={20} />
              </Button>
              <Button variant="outline" size="icon">
                <Icon name="MessageCircle" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t-2 border-primary mt-16">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 Librejokes. Все права защищены.</p>
        </div>
      </footer>

      <ProductModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        product={selectedProduct}
      />
    </div>
  );
}
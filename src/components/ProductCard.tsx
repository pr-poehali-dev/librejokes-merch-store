import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  colors: string[];
  onClick: () => void;
}

export function ProductCard({ name, price, category, image, colors, onClick }: ProductCardProps) {
  return (
    <Card 
      className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 cursor-pointer animate-fade-in"
      onClick={onClick}
    >
      <div className="aspect-square overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-heading font-bold text-lg leading-tight">{name}</h3>
          <Badge variant="secondary" className="shrink-0">{category}</Badge>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Цвета:</span>
          <div className="flex gap-1">
            {colors.map((color, idx) => (
              <div 
                key={idx}
                className="w-5 h-5 rounded-full border-2 border-border"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-2">
          <span className="text-2xl font-heading font-bold">{price} ₽</span>
          <Button size="sm" className="gap-1">
            <Icon name="ShoppingCart" size={16} />
            В корзину
          </Button>
        </div>
      </div>
    </Card>
  );
}

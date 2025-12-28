import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface Review {
  author: string;
  text: string;
  date: string;
}

interface ProductModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: {
    name: string;
    price: number;
    category: string;
    images: string[];
    colors: string[];
    description: string;
    reviews: Review[];
  } | null;
}

export function ProductModal({ open, onOpenChange, product }: ProductModalProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-3xl">{product.name}</DialogTitle>
          <Badge variant="secondary" className="w-fit">{product.category}</Badge>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg border-2 border-border">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? 'border-primary' : 'border-border hover:border-primary/50'
                  }`}
                >
                  <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-heading font-bold text-xl mb-2">Описание</h3>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            <div>
              <h4 className="font-heading font-bold mb-2">Доступные цвета</h4>
              <div className="flex gap-2">
                {product.colors.map((color, idx) => (
                  <div 
                    key={idx}
                    className="w-8 h-8 rounded-full border-2 border-border cursor-pointer hover:scale-110 transition-transform"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <span className="text-3xl font-heading font-bold">{product.price} ₽</span>
              <Button size="lg" className="gap-2">
                <Icon name="ShoppingCart" size={20} />
                Добавить в корзину
              </Button>
            </div>

            <Separator />

            <div>
              <h3 className="font-heading font-bold text-xl mb-4">
                Отзывы ({product.reviews.length})
              </h3>
              <div className="space-y-4 max-h-60 overflow-y-auto">
                {product.reviews.map((review, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-muted">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">{review.author}</span>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                    <p className="text-sm leading-relaxed">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

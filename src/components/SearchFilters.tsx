import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface SearchFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  categories: string[];
}

export function SearchFilters({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories,
}: SearchFiltersProps) {
  return (
    <div className="space-y-4">
      <div className="relative">
        <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Поиск товаров..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 h-12 text-base"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedCategory === null ? 'default' : 'outline'}
          size="sm"
          onClick={() => onCategoryChange(null)}
          className="transition-all"
        >
          Все товары
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            size="sm"
            onClick={() => onCategoryChange(category)}
            className="transition-all"
          >
            {category}
          </Button>
        ))}
        {selectedCategory && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onCategoryChange(null)}
            className="gap-1"
          >
            <Icon name="X" size={16} />
            Сбросить
          </Button>
        )}
      </div>

      {(searchQuery || selectedCategory) && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Icon name="Filter" size={16} />
          <span>Активные фильтры:</span>
          {searchQuery && (
            <Badge variant="secondary" className="gap-1">
              Поиск: {searchQuery}
              <button onClick={() => onSearchChange('')}>
                <Icon name="X" size={12} />
              </button>
            </Badge>
          )}
          {selectedCategory && (
            <Badge variant="secondary" className="gap-1">
              {selectedCategory}
              <button onClick={() => onCategoryChange(null)}>
                <Icon name="X" size={12} />
              </button>
            </Badge>
          )}
        </div>
      )}
    </div>
  );
}

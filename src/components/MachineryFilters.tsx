import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Filter, Grid, List } from "lucide-react";

interface MachineryFiltersProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
}

export const MachineryFilters = ({ 
  categories, 
  activeCategory, 
  onCategoryChange, 
  viewMode, 
  onViewModeChange 
}: MachineryFiltersProps) => {
  return (
    <Card className="bg-card border-industrial-gray/20 shadow-card">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-primary" />
            <span className="font-semibold text-foreground">Filtros:</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button
              variant={activeCategory === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => onCategoryChange('all')}
              className={activeCategory === 'all' ? 'bg-primary hover:bg-accent' : ''}
            >
              Todas
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => onCategoryChange(category)}
                className={activeCategory === category ? 'bg-primary hover:bg-accent' : ''}
              >
                {category}
              </Button>
            ))}
          </div>
          
          <div className="flex items-center gap-1 border border-border rounded-md p-1">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onViewModeChange('grid')}
              className={`h-8 w-8 p-0 ${viewMode === 'grid' ? 'bg-primary hover:bg-accent' : ''}`}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onViewModeChange('list')}
              className={`h-8 w-8 p-0 ${viewMode === 'list' ? 'bg-primary hover:bg-accent' : ''}`}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
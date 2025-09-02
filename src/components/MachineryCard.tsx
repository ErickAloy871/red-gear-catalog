import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Settings } from "lucide-react";

interface MachineryCardProps {
  name: string;
  category: string;
  image: string;
  specs: {
    power: string;
    weight: string;
    capacity: string;
  };
  price: string;
  onViewDetails: () => void;
}

export const MachineryCard = ({ name, category, image, specs, price, onViewDetails }: MachineryCardProps) => {
  return (
    <Card className="bg-gradient-card border-industrial-gray/20 hover:shadow-industrial transition-all duration-300 hover:scale-105 group">
      <div className="relative overflow-hidden rounded-t-lg">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-industrial-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
          {category}
        </Badge>
      </div>
      
      <CardHeader className="pb-3">
        <CardTitle className="text-foreground group-hover:text-primary transition-colors duration-300">
          {name}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center gap-1">
            <Settings className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">Potencia:</span>
          </div>
          <span className="font-medium">{specs.power}</span>
          
          <div className="flex items-center gap-1">
            <Settings className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">Peso:</span>
          </div>
          <span className="font-medium">{specs.weight}</span>
          
          <div className="flex items-center gap-1">
            <Settings className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">Capacidad:</span>
          </div>
          <span className="font-medium">{specs.capacity}</span>
        </div>
        
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="text-lg font-bold text-primary">
            {price}
          </div>
          <Button 
            onClick={onViewDetails}
            size="sm"
            className="bg-primary hover:bg-accent transition-colors"
          >
            <Eye className="h-4 w-4 mr-1" />
            Ver Detalles
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
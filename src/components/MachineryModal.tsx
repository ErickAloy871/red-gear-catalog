import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Download } from "lucide-react";

interface Machinery {
  id: string;
  name: string;
  category: string;
  image: string;
  specs: {
    power: string;
    weight: string;
    capacity: string;
    engine: string;
    fuelTank: string;
    dimensions: string;
  };
  price: string;
  description: string;
}

interface MachineryModalProps {
  machinery: Machinery | null;
  isOpen: boolean;
  onClose: () => void;
}

export const MachineryModal = ({ machinery, isOpen, onClose }: MachineryModalProps) => {
  if (!machinery) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-industrial-gray/20">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <DialogTitle className="text-2xl font-bold text-foreground">
              {machinery.name}
            </DialogTitle>
            <Badge className="bg-primary text-primary-foreground">
              {machinery.category}
            </Badge>
          </div>
        </DialogHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={machinery.image} 
                alt={machinery.name}
                className="w-full h-64 object-cover"
              />
            </div>
            
            <div className="bg-muted/50 p-4 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Descripción</h3>
              <p className="text-muted-foreground leading-relaxed">
                {machinery.description}
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Especificaciones Técnicas
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Potencia:</span>
                  <span className="font-medium">{machinery.specs.power}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Peso:</span>
                  <span className="font-medium">{machinery.specs.weight}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Capacidad:</span>
                  <span className="font-medium">{machinery.specs.capacity}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Motor:</span>
                  <span className="font-medium">{machinery.specs.engine}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Tanque Combustible:</span>
                  <span className="font-medium">{machinery.specs.fuelTank}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Dimensiones:</span>
                  <span className="font-medium">{machinery.specs.dimensions}</span>
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div className="bg-gradient-accent p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-primary-foreground mb-2">
                {machinery.price}
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Precio sujeto a configuración y opciones
              </p>
            </div>
            
            <div className="flex flex-col gap-3">
              <Button className="bg-primary hover:bg-accent transition-colors">
                <Phone className="h-4 w-4 mr-2" />
                Solicitar Cotización
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Download className="h-4 w-4 mr-2" />
                Descargar Ficha Técnica
              </Button>
            </div>
            
            <div className="bg-muted/30 p-4 rounded-lg space-y-2">
              <h4 className="font-semibold text-foreground">Contacto Directo</h4>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>ventas@maquinariaindustrial.com</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
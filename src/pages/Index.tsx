import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MachineryCard } from "@/components/MachineryCard";
import { MachineryFilters } from "@/components/MachineryFilters";
import { MachineryModal } from "@/components/MachineryModal";
import { Separator } from "@/components/ui/separator";
import { ArrowDown, Building2, Shield, Wrench, Phone, Mail, MapPin } from "lucide-react";
import heroImage from "@/assets/excavator-hero.jpg";
import FondoImage from "@/assets/Fondo.png";
import craneImage from "@/assets/crane.jpg";
import Molino30 from "@/assets/Molino-30.png";
import forkliftImage from "@/assets/forklift.jpg";

const machineryData = [
  {
    id: '1',
    name: 'Mezcladora Horizontal 1 Ton ',
    category: 'Mezcladoras',
    image: heroImage,
    specs: {
      Motor: 'Weg',
      PotenciaMotor: '15 HP',
      capacity: '1 Ton',
      TiempoCiclo: '15 min'
    },
    price: 'Desde $7500,00',
    description: 'Mezcladora horizontal de alta eficienca para ala industria modelo horizontal 1 ton, con motor weg de 15 hp, capacidad de 1 tonelada y tiempo de ciclo de 15 minutos.'
  },
  {
    id: '2',
    name: 'Molino 60 quintales por hora',
    category: 'Molinos',
    image: craneImage,
    specs: {
      Motor: 'Diesel 4L',
      PotenciaMotor: '150 HP',
      capacity: '60 Quintales',
      TiempoCiclo: '1 Hora'
    },
    price: 'Desde $8500,00',
    description: 'Molino de alta capacidad para molienda industrial. Sistema robusto con motor diesel de 150 HP para procesamiento continuo.'
  },
  {
    id: '3',
    name: 'Molino de 30 Quintales por Hora',
    category: 'Molinos',
    image: Molino30,
    specs: {
      Motor: 'Weg',
      PotenciaMotor: '5 HP',
      capacity: '30 Quintales',
      TiempoCiclo: '1 Hora'
    },
    price: 'Desde $2000,00',
    description: 'Molino de alta eficiencia para la industria, modelo de martillos, con motor weg de 5 hp, capacidad de 30 quintales por hora.'
  },
  {
    id: '4',
    name: 'Montacargas Industrial MCI-5000',
    category: 'Montacargas',
    image: forkliftImage,
    specs: {
      Motor: 'Diesel 3L',
      PotenciaMotor: '75 HP',
      capacity: '5 Ton',
      TiempoCiclo: '8 horas'
    },
    price: 'Desde $65,000',
    description: 'Montacargas industrial de alta capacidad para almacenes y centros de distribución. Mástil telescópico y sistema de seguridad avanzado.'
  }
];

const categories = ['Mezcladoras', 'Molinos', 'Bulldozers', 'Montacargas'];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedMachinery, setSelectedMachinery] = useState<typeof machineryData[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredMachinery = activeCategory === 'all' 
    ? machineryData 
    : machineryData.filter(machine => machine.category === activeCategory);

  const handleViewDetails = (machinery: typeof machineryData[0]) => {
    setSelectedMachinery(machinery);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: `url(${FondoImage})` }}
        />
        <div className="absolute inset-0 bg-industrial-black/70" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-20">
          <Badge className="mb-6 bg-primary text-primary-foreground text-lg px-4 py-2">
            Industrial Wiliams
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Eficiencia que 
            <span className="text-transparent bg-gradient-accent bg-clip-text"> Mueve </span>
            el Mundo
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Descubre nuestra línea completa de maquinaria industrial.
            Calidad, potencia y confiabilidad para tus proyectos más ambiciosos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-accent text-primary-foreground text-lg px-8 py-6 shadow-glow transition-all duration-300 hover:scale-105"
              onClick={() => document.querySelector('#catalog')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Catálogo
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-primary/20 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 transition-all duration-300 shadow-glow"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Phone className="mr-2 h-5 w-5" />
              Contactar Ahora
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              ¿Por Qué Elegir Nuestra Maquinaria?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Más de 25 años de experiencia nos respaldan como líderes en maquinaria industrial
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-industrial-gray/20 shadow-card hover:shadow-industrial transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto bg-gradient-accent rounded-full flex items-center justify-center mb-4">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">Calidad Superior</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Maquinaria fabricada con los más altos estándares de calidad internacional
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-industrial-gray/20 shadow-card hover:shadow-industrial transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto bg-gradient-accent rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">Garantía Extendida</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Garantía de 3 años y servicio técnico especializado.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-industrial-gray/20 shadow-card hover:shadow-industrial transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto bg-gradient-accent rounded-full flex items-center justify-center mb-4">
                  <Wrench className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">Soporte Técnico</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Mantenimiento preventivo y correctivo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Catálogo de Maquinaria
            </h2>
            <p className="text-xl text-muted-foreground">
              Explora nuestra amplia gama de equipos industriales
            </p>
          </div>
          
          <div className="space-y-8">
            <MachineryFilters
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
            />
            
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {filteredMachinery.map((machinery) => (
                <MachineryCard
                  key={machinery.id}
                  name={machinery.name}
                  category={machinery.category}
                  image={machinery.image}
                  specs={{
                    Motor: machinery.specs.Motor,
                    PotenciaMotor: machinery.specs.PotenciaMotor,
                    capacity: machinery.specs.capacity
                  }}
                  price={machinery.price}
                  onViewDetails={() => handleViewDetails(machinery)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Listo para Impulsar tu Proyecto?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Contáctanos para encontrar la maquinaria perfecta para tus necesidades
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 place-items-center">
            <div className="flex flex-col items-center">
              <Phone className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Teléfono</h3>
              <p className="text-gray-200">0984789555-0984647317</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ubicación</h3>
              <p className="text-gray-200">Ambato, Ecuador</p>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-primary hover:bg-accent text-primary-foreground text-lg px-8 py-6 shadow-glow transition-all duration-300 hover:scale-105"
          >
            Solicitar Cotización Gratuita
          </Button>
        </div>
      </section>

      <MachineryModal
        machinery={selectedMachinery}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Index;
import { Product } from '@/src/types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/src/constants';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
  key?: string | number;
}

export function ProductCard({ product }: ProductCardProps) {
  const handleOrder = () => {
    const message = encodeURIComponent(`Hello, I want to order ${product.name} (Price: KSh ${product.price.toLocaleString()})`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow duration-300 bg-card">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground font-medium">
            {product.category}
          </Badge>
        </div>
        <CardContent className="p-6">
          <h3 className="font-serif text-xl font-semibold text-primary mb-2 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {product.description}
          </p>
          <p className="text-lg font-bold text-accent">
            KSh {product.price.toLocaleString()}
          </p>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button 
            onClick={handleOrder}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center gap-2"
          >
            <MessageCircle className="h-4 w-4" />
            Order on WhatsApp
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

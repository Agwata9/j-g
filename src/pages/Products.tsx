import { useState } from 'react';
import { PRODUCTS } from '@/src/constants';
import { ProductCard } from '@/src/components/ProductCard';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';

export function Products() {
  const [filter, setFilter] = useState<'All' | 'Bedsheets' | 'Bathroom Mats' | 'Mattress Covers'>('All');

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  const categories = ['All', 'Bedsheets', 'Bathroom Mats', 'Mattress Covers'] as const;

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-5xl font-bold text-primary"
        >
          Our Collection
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-lg text-muted-foreground"
        >
          Browse through our premium selection of home décor essentials.
        </motion.p>
      </div>

      {/* Filters */}
      <div className="mb-12 flex flex-wrap justify-center gap-4">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={filter === cat ? 'default' : 'outline'}
            onClick={() => setFilter(cat)}
            className={filter === cat ? 'bg-primary text-primary-foreground' : 'text-primary border-primary/20 hover:bg-primary/5'}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-xl text-muted-foreground">No products found in this category.</p>
        </div>
      )}
    </div>
  );
}

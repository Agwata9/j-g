import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/src/components/ProductCard';
import { PRODUCTS, BUSINESS_NAME, BUSINESS_TAGLINE } from '@/src/constants';
import { motion } from 'motion/react';
import { ArrowRight, Star, ShieldCheck, Truck } from 'lucide-react';

export function Home() {
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1920&auto=format&fit=crop"
            alt="Luxury Home Interior"
            className="h-full w-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl font-bold md:text-7xl lg:text-8xl"
          >
            {BUSINESS_NAME}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg font-light md:text-xl lg:text-2xl"
          >
            {BUSINESS_TAGLINE}. Discover our curated collection of premium curtains, bedding, and rugs designed to transform your living space.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
          >
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg">
              <Link to="/products">Explore Collection</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg">
              <Link to="/about">Our Story</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-secondary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-accent/10 p-4">
                <Star className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-primary">Premium Quality</h3>
              <p className="text-muted-foreground">We source only the finest materials for our curtains, bedding, and rugs.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-accent/10 p-4">
                <ShieldCheck className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-primary">Trusted Service</h3>
              <p className="text-muted-foreground">Years of experience in helping customers beautify their homes in Kiambu.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-accent/10 p-4">
                <Truck className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-primary">Fast Delivery</h3>
              <p className="text-muted-foreground">Reliable delivery services across the region to get your orders to you quickly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="text-center md:text-left">
              <h2 className="font-serif text-4xl font-bold text-primary md:text-5xl">Featured Collection</h2>
              <p className="mt-4 text-lg text-muted-foreground">Hand-picked pieces to elevate your home décor.</p>
            </div>
            <Button asChild variant="ghost" className="text-accent hover:text-accent/80 group">
              <Link to="/products" className="flex items-center">
                View All Products <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1920&auto=format&fit=crop"
            alt="Interior Design"
            className="h-full w-full object-cover brightness-[0.3]"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <h2 className="font-serif text-4xl font-bold md:text-6xl">Ready to transform your home?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-light opacity-90">
            Browse our full collection and find the perfect pieces for your space. Order directly via WhatsApp for personalized service.
          </p>
          <Button asChild size="lg" className="mt-10 bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-7 text-xl">
            <Link to="/products">Shop the Collection</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

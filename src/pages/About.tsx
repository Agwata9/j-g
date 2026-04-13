import { motion } from 'motion/react';
import { BUSINESS_NAME, BUSINESS_LOCATION } from '@/src/constants';
import { ShieldCheck, Heart, Users } from 'lucide-react';

export function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-secondary/30 py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl font-bold text-primary md:text-6xl"
          >
            Our Story
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            Dedicated to bringing beauty and comfort to homes across Kenya since our inception.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop"
                alt="Our Showroom"
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="font-serif text-4xl font-bold text-primary">Crafting Elegant Spaces</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                At {BUSINESS_NAME}, we believe that your home is a reflection of your personality. Our journey began with a simple mission: to provide high-quality, stylish home décor that is accessible to everyone.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Based in {BUSINESS_LOCATION}, we have grown from a small local shop to a trusted name in home fashions. We specialize in premium curtains, luxurious bedding, and exquisite rugs that transform ordinary rooms into extraordinary spaces.
              </p>
              
              <div className="grid grid-cols-1 gap-6 pt-4 sm:grid-cols-2">
                <div className="flex items-center space-x-3">
                  <ShieldCheck className="h-6 w-6 text-accent" />
                  <span className="font-medium">Quality Guaranteed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="h-6 w-6 text-accent" />
                  <span className="font-medium">Customer First</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-accent" />
                  <span className="font-medium">Local Expertise</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-bold mb-16">Why Choose Us?</h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-semibold text-accent">Exclusivity</h3>
              <p className="text-primary-foreground/80">We offer unique designs that you won't find anywhere else, ensuring your home stands out.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-semibold text-accent">Personalized Service</h3>
              <p className="text-primary-foreground/80">Our team is always ready to help you choose the perfect pieces for your specific needs.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-semibold text-accent">Community</h3>
              <p className="text-primary-foreground/80">Proudly serving Kiambu County and contributing to the local home décor industry.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

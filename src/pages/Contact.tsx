import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER, BUSINESS_LOCATION, BUSINESS_NAME } from '@/src/constants';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="mb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-5xl font-bold text-primary"
        >
          Get in Touch
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-lg text-muted-foreground"
        >
          Have questions? We'd love to hear from you.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold text-primary">Contact Information</h2>
            <p className="text-lg text-muted-foreground">
              Visit our showroom in Kiambu or reach out to us through any of these channels.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Card className="bg-secondary/20 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                <Phone className="h-8 w-8 text-accent" />
                <h3 className="font-semibold">Phone</h3>
                <p className="text-sm text-muted-foreground">+254 700 000 000</p>
              </CardContent>
            </Card>
            <Card className="bg-secondary/20 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                <Mail className="h-8 w-8 text-accent" />
                <h3 className="font-semibold">Email</h3>
                <p className="text-sm text-muted-foreground">info@jgfashions.com</p>
              </CardContent>
            </Card>
            <Card className="bg-secondary/20 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                <MapPin className="h-8 w-8 text-accent" />
                <h3 className="font-semibold">Location</h3>
                <p className="text-sm text-muted-foreground">{BUSINESS_LOCATION}</p>
              </CardContent>
            </Card>
            <Card className="bg-secondary/20 border-none cursor-pointer hover:bg-secondary/30 transition-colors" onClick={handleWhatsApp}>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                <MessageCircle className="h-8 w-8 text-accent" />
                <h3 className="font-semibold">WhatsApp</h3>
                <p className="text-sm text-muted-foreground">Chat with us now</p>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-2xl overflow-hidden h-[300px] shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop" 
              alt="Map Placeholder" 
              className="h-full w-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Card className="p-8 shadow-xl border-none bg-card">
            <h2 className="font-serif text-3xl font-bold text-primary mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Full Name</label>
                <Input 
                  required
                  placeholder="John Doe" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-background"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <Input 
                  required
                  type="email" 
                  placeholder="john@example.com" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-background"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Message</label>
                <Textarea 
                  required
                  placeholder="How can we help you?" 
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="bg-background resize-none"
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 py-6 text-lg">
                Send Message
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

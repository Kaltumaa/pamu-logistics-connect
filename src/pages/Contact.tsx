import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
          Contact Us
        </h1>
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          Coming soon - Contact form and office locations in Nairobi, Mombasa, and Juba.
        </p>
        <Link to="/">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Back to Home
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
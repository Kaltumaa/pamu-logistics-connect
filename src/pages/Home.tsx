import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Counter from '@/components/Counter';
import { Link } from 'react-router-dom';
import { 
  Truck, 
  Ship, 
  Plane, 
  Warehouse, 
  Shield, 
  Clock, 
  Users, 
  CheckCircle,
  ArrowRight,
  Globe,
  Package,
  FileText
} from 'lucide-react';
import heroImage from '@/assets/hero-logistics.jpg';

const Home = () => {
  const services = [
    {
      icon: Shield,
      title: 'Customs Clearance',
      description: 'Expert handling of all customs procedures and documentation for seamless border crossings.',
      features: ['Import/Export Documentation', 'Duty Optimization', 'Compliance Management']
    },
    {
      icon: Ship,
      title: 'Freight Forwarding',
      description: 'Comprehensive freight solutions by sea, air, and land with global network coverage.',
      features: ['Multi-modal Transport', 'Global Network', 'Cargo Tracking']
    },
    {
      icon: Truck,
      title: 'Transport Solutions',
      description: 'Reliable transport services from port to final destination with modern fleet.',
      features: ['Door-to-Door Delivery', 'Modern Fleet', 'Real-time Tracking']
    },
    {
      icon: Package,
      title: 'Motor Vehicle Handling',
      description: 'Specialized handling and clearance of motor vehicles with expert care.',
      features: ['Vehicle Inspection', 'Secure Transport', 'Insurance Coverage']
    },
    {
      icon: Warehouse,
      title: 'Conventional Cargo',
      description: 'Professional handling of conventional cargo with secure warehousing.',
      features: ['Secure Storage', 'Inventory Management', 'Quality Control']
    },
    {
      icon: FileText,
      title: 'Import & Export Consultancy',
      description: 'Expert advisory services for international trade compliance and optimization.',
      features: ['Trade Compliance', 'Market Analysis', 'Risk Assessment']
    }
  ];

  const stats = [
    { label: 'Years of Experience', value: 15, suffix: '+' },
    { label: 'Clients Served', value: 1200, suffix: '+' },
    { label: 'Successful Clearances', value: 10000, suffix: '+' },
    { label: 'Countries Served', value: 25, suffix: '+' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-brand-dark/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-brand-white mb-6 leading-tight">
            Your Trusted
            <span className="block text-brand-sky">Logistics Partner</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Excellence in customs clearance, freight forwarding, and transport solutions 
            across East Africa and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-brand-light hover:bg-brand-light/90 text-brand-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-3 text-lg">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-dark px-8 py-3 text-lg">
              Request Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <Counter 
                  end={stat.value} 
                  suffix={stat.suffix}
                />
                <p className="text-muted-foreground font-medium mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive logistics solutions tailored to meet your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm hover:shadow-brand/10">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-brand-dark to-brand-deep text-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Why Choose Pamu Services?
            </h2>
            <p className="text-xl text-brand-sky max-w-3xl mx-auto">
              Decades of experience, cutting-edge technology, and unwavering commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-light/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-brand-sky" />
              </div>
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-brand-sky leading-relaxed">
                Round-the-clock customer support to ensure your cargo moves smoothly at all times.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-light/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-brand-sky" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Global Network</h3>
              <p className="text-brand-sky leading-relaxed">
                Extensive network across East Africa and international partnerships worldwide.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-light/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-brand-sky" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Team</h3>
              <p className="text-brand-sky leading-relaxed">
                Experienced professionals with deep knowledge of customs and logistics procedures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
            Ready to Streamline Your Logistics?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Get in touch with our experts today and discover how we can optimize your supply chain
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
              Request Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
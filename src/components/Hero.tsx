import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Sparkles, Code, Brain } from 'lucide-react';
import developerIllustration from '@/assets/developer-3d-illustration.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 3D Illustration Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${developerIllustration})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Greeting Badge */}
          <Badge variant="outline" className="mb-8 animate-fade-in backdrop-glass border-primary/30">
            <Sparkles className="w-4 h-4 mr-2" />
            Welcome to my digital space
          </Badge>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Hi, I'm{' '}
            <span className="text-gradient-primary">
              Abhay Mishra
            </span>
          </h1>

          {/* Dynamic Subtitle */}
          <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Where <span className="text-primary font-semibold">artificial intelligence</span> meets 
              <span className="text-primary font-semibold"> human creativity</span> to build the future of web
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-delay leading-relaxed">
            I craft intelligent web applications that bridge the gap between cutting-edge AI technology 
            and seamless user experiences. From hackathon victories to production systems, 
            I bring ideas to life through code.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-delay">
            <Button size="lg" className="group glow-primary hover:glow-intense transition-smooth">
              <Brain className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Start AI Conversation
            </Button>
            <Button variant="outline" size="lg" className="backdrop-glass border-primary/30 hover:bg-primary/10">
              <Code className="w-5 h-5 mr-2" />
              Explore Projects
            </Button>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={scrollToNextSection}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <ChevronDown className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
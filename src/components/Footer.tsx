import { Badge } from "@/components/ui/badge";
import { Heart, Code, Coffee, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-primary/10 backdrop-glass">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">AM</span>
                </div>
                <span className="text-xl font-bold">Abhay Mishra</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Crafting intelligent web applications that bridge the gap between cutting-edge AI 
                technology and seamless user experiences.
              </p>
              <Badge variant="outline" className="border-success/30 text-success">
                Available for opportunities
              </Badge>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-muted-foreground hover:text-primary transition-smooth">
                  About Me
                </a>
                <a href="#projects" className="block text-muted-foreground hover:text-primary transition-smooth">
                  Projects
                </a>
                <a href="#contact" className="block text-muted-foreground hover:text-primary transition-smooth">
                  Contact
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">
                  Resume
                </a>
              </div>
            </div>

            {/* Connect */}
            <div className="space-y-4">
              <h4 className="font-semibold">Let's Connect</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-lg backdrop-glass border border-primary/20 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-smooth group"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-lg backdrop-glass border border-primary/20 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-smooth group"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="mailto:abhay@example.com" 
                  className="w-10 h-10 rounded-lg backdrop-glass border border-primary/20 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-smooth group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
              <p className="text-sm text-muted-foreground">
                Always open to discussing new opportunities and interesting projects.
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              <span>© {currentYear} Abhay Mishra • Crafting digital experiences that matter</span>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>Building the future, one commit at a time</span>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
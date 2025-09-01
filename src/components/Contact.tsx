import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail, Calendar, Github, Linkedin, Twitter, Send, ExternalLink, Code2 } from 'lucide-react';

const Contact = () => {
  const [isAIChat, setIsAIChat] = useState(false);
  const [message, setMessage] = useState('');

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: 'https://github.com/Abhay7286', color: 'hover:text-primary' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/abhay~mishra', color: 'hover:text-blue-400' },
    { icon: Twitter, label: 'Twitter', url: 'https://x.com/AbhayMi06082219', color: 'hover:text-sky-400' },
    { icon: Code2, label: 'LeetCode', url: 'https://leetcode.com/u/Abhay_7286/', color: 'hover:text-orange-400' },
    { icon: Mail, label: 'Email', url: 'mailto:abhaymishra7286@gmail.com', color: 'hover:text-primary' },
  ];


  const handleScheduleChat = () => {
    // This would integrate with a scheduling service like Calendly
    console.log('Opening scheduler...');
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/30">
              <MessageCircle className="w-4 h-4 mr-2" />
              Let's Connect
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to{' '}
              <span className="text-gradient-primary">Collaborate?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Whether you have a project in mind, want to discuss AI possibilities, 
              or just fancy a chat about technology, I'm always excited to connect with fellow innovators.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Interactive Contact Methods */}
            <div className="space-y-6">

              {/* Direct Connect Card */}
              <Card className="backdrop-glass border-primary/10 hover:border-primary/30 transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-cyan-500 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Direct Video Call</h3>
                      <p className="text-sm text-muted-foreground">Let's discuss your ideas face-to-face</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    Skip the back-and-forth emails. Book a 30-minute video call to discuss your project requirements, 
                    technical challenges, or explore collaboration opportunities.
                  </p>
                  <Button 
                    onClick={handleScheduleChat}
                    variant="outline" 
                    className="w-full backdrop-glass border-primary/30 hover:bg-primary/10"
                    size="sm"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book a Call
                  </Button>
                </CardContent>
              </Card>

              {/* Professional Networks */}
              <Card className="backdrop-glass border-primary/10">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Professional Networks</h3>
                  <div className="space-y-3">
                    {socialLinks.map((link, index) => {
                      const Icon = link.icon;
                      return (
                        <a
                          key={index}
                          href={link.url}
                          className={`flex items-center justify-between p-3 rounded-lg border border-primary/10 hover:border-primary/30 transition-smooth ${link.color} group`}
                        >
                          <div className="flex items-center space-x-3">
                            <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            <span className="font-medium">{link.label}</span>
                          </div>
                          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Smart Contact Form */}
            <div className="space-y-6">
              <Card className="backdrop-glass border-primary/10">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Let's Build Something Amazing</h3>
                    <p className="text-muted-foreground text-sm">
                      Share your vision and I'll get back to you within 24 hours
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Input 
                          placeholder="What should I call you?" 
                          className="backdrop-glass border-primary/20 focus:border-primary/50 h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Input 
                          type="email" 
                          placeholder="your@email.com" 
                          className="backdrop-glass border-primary/20 focus:border-primary/50 h-12"
                        />
                      </div>
                    </div>
                    
                    <Input 
                      placeholder="What's your project about?" 
                      className="backdrop-glass border-primary/20 focus:border-primary/50 h-12"
                    />
                    
                    <Textarea 
                      placeholder="Describe your idea, challenges you're facing, or how I can help. The more details, the better I can assist you..."
                      className="backdrop-glass border-primary/20 focus:border-primary/50 min-h-32"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    
                    <Button className="w-full h-12 glow-primary hover:glow-intense transition-smooth group">
                      <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Your Message
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Info */}
              <div className="backdrop-glass rounded-2xl p-6 border border-primary/10">
                <h4 className="font-semibold mb-4">Quick Info</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Response Time:</span>
                    <span>Usually within 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time Zone:</span>
                    <span>IST (UTC+5:30)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Availability:</span>
                    <Badge variant="outline" className="border-success/30 text-success">
                      Open for opportunities
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
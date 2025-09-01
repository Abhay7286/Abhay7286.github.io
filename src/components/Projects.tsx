import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play, Zap, Search, Bot, Globe } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Peekaboo",
      subtitle: "AI-Powered Content Discovery",
      description: "An intelligent content discovery platform that uses advanced AI algorithms to analyze user preferences and deliver personalized recommendations. Built with React, Node.js, and integrated with multiple AI APIs.",
      longDescription: "Peekaboo revolutionizes how users discover content by leveraging machine learning algorithms to understand user behavior patterns. The platform features real-time recommendation updates, cross-platform synchronization, and an intuitive interface that adapts to user preferences over time.",
      icon: Search,
      gradient: "from-blue-500 to-purple-600",
      tech: ["React", "Node.js", "OpenAI API", "PostgreSQL", "Redis"],
      features: ["Real-time AI recommendations", "User behavior analysis", "Cross-platform sync", "Advanced filtering"],
      demoUrl: "#",
      githubUrl: "#",
      status: "Live"
    },
    {
      id: 2,
      title: "Huntly",
      subtitle: "Smart Job Hunting Assistant",
      description: "An AI-driven job hunting platform that automatically matches candidates with relevant opportunities, optimizes resumes, and provides interview preparation tools using natural language processing.",
      longDescription: "Huntly transforms the job search experience by automating the tedious aspects while providing intelligent insights. The platform analyzes job market trends, optimizes application materials, and provides personalized career guidance powered by advanced AI models.",
      icon: Zap,
      gradient: "from-green-500 to-cyan-500",
      tech: ["Next.js", "Python", "TensorFlow", "AWS", "Stripe"],
      features: ["AI resume optimization", "Smart job matching", "Interview prep", "Market analytics"],
      demoUrl: "#",
      githubUrl: "#",
      status: "Beta"
    },
    {
      id: 3,
      title: "AI Chatbot Framework",
      subtitle: "Intelligent Conversation Engine",
      description: "A modular chatbot framework that enables businesses to deploy AI-powered customer service solutions with customizable personalities, multi-language support, and seamless integrations.",
      longDescription: "This framework provides a comprehensive solution for businesses looking to implement intelligent customer service. It features advanced NLP capabilities, sentiment analysis, and can be trained on custom datasets to match brand voice and industry-specific requirements.",
      icon: Bot,
      gradient: "from-purple-500 to-pink-500",
      tech: ["React", "Python", "FastAPI", "Docker", "MongoDB"],
      features: ["Custom AI personalities", "Multi-language support", "Sentiment analysis", "Easy integration"],
      demoUrl: "#",
      githubUrl: "#",
      status: "Open Source"
    }
  ];

  const currentProject = projects[selectedProject];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/30">
              <Globe className="w-4 h-4 mr-2" />
              Featured Projects
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Bringing Ideas to{' '}
              <span className="text-gradient-primary">Life</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Each project represents a unique challenge solved through innovative technology. 
              From AI-powered platforms to intelligent automation tools, 
              these applications showcase the intersection of creativity and engineering.
            </p>
          </div>

          {/* Innovative Project Showcase */}
          <div className="space-y-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              const isActive = selectedProject === index;
              
              return (
                <div 
                  key={project.id}
                  className={`relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer ${
                    isActive ? 'bg-gradient-to-r from-primary/10 to-transparent' : 'hover:bg-primary/5'
                  }`}
                  onClick={() => setSelectedProject(index)}
                >
                  <div className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8 items-center">
                      {/* Project Icon & Status */}
                      <div className="flex items-center space-x-6">
                        <div className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${project.gradient} flex items-center justify-center shadow-lg`}>
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                          <p className="text-muted-foreground mb-3">{project.subtitle}</p>
                          <Badge 
                            variant="outline" 
                            className={`${
                              project.status === 'Live' ? 'border-success/30 text-success' :
                              project.status === 'Beta' ? 'border-yellow-500/30 text-yellow-400' :
                              'border-primary/30 text-primary'
                            }`}
                          >
                            {project.status}
                          </Badge>
                        </div>
                      </div>

                      {/* Project Description */}
                      <div className="lg:col-span-2">
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {isActive ? project.longDescription : project.description}
                        </p>
                        
                        {isActive && (
                          <div className="space-y-4 animate-fade-in">
                            {/* Tech Stack */}
                            <div>
                              <h5 className="font-semibold mb-2 text-primary">Tech Stack</h5>
                              <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, techIndex) => (
                                  <Badge key={techIndex} variant="secondary" className="bg-muted/50">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            {/* Key Features */}
                            <div>
                              <h5 className="font-semibold mb-2 text-primary">Key Features</h5>
                              <div className="grid sm:grid-cols-2 gap-2">
                                {project.features.map((feature, featureIndex) => (
                                  <div key={featureIndex} className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                    <span className="text-sm text-muted-foreground">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 pt-2">
                              <Button size="sm" className="group glow-primary hover:glow-intense transition-smooth">
                                <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                                Live Demo
                                <ExternalLink className="w-4 h-4 ml-2" />
                              </Button>
                              <Button size="sm" variant="outline" className="backdrop-glass border-primary/30 hover:bg-primary/10">
                                <Github className="w-4 h-4 mr-2" />
                                View Code
                              </Button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Active Project Indicator */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-primary/50"></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* All Projects Grid */}
          <div className="text-center">
            <Button variant="outline" size="lg" className="backdrop-glass border-primary/30 hover:bg-primary/10">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
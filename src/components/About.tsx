import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code2, Rocket, Trophy, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  const skills = [
    { category: "AI & ML", items: ["OpenAI API", "Machine Learning", "Natural Language Processing", "Computer Vision"] },
    { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Python", "AWS", "Supabase"] },
    { category: "Tools", items: ["Git", "Docker", "Figma", "VS Code"] }
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "Hackathon Winner",
      description: "Multiple victories in competitive programming events",
      color: "text-yellow-400"
    },
    {
      icon: Code2,
      title: "Full-Stack Expertise",
      description: "End-to-end development from concept to deployment",
      color: "text-primary"
    },
    {
      icon: Brain,
      title: "AI Innovation",
      description: "Pioneering AI-powered web applications and tools",
      color: "text-accent"
    },
    {
      icon: Rocket,
      title: "Performance Focus",
      description: "Optimized applications serving thousands of users",
      color: "text-success"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/30">
              <GraduationCap className="w-4 h-4 mr-2" />
              About Me
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Crafting the Future with{' '}
              <span className="text-gradient-primary">Code & AI</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a passionate software developer who believes in the transformative power of technology. 
              With a strong foundation in both traditional web development and cutting-edge AI, 
              I create solutions that don't just work—they inspire.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Personal Story */}
            <div className="space-y-6">
              <div className="backdrop-glass rounded-2xl p-8 border border-primary/10">
                <div className="flex items-center mb-6">
                  <GraduationCap className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-2xl font-semibold">My Journey</h3>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    My journey into technology began with curiosity and has evolved into a passion for creating 
                    meaningful digital experiences. From winning hackathons to building production applications, 
                    each project has been a stepping stone toward mastering the art of software development.
                  </p>
                  <p>
                    Currently pursuing my degree while actively contributing to the tech community through 
                    open-source projects and innovative solutions that solve real-world problems.
                  </p>
                </div>
              </div>

              <div className="backdrop-glass rounded-2xl p-8 border border-primary/10">
                <div className="flex items-center mb-6">
                  <Briefcase className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-2xl font-semibold">What I Do</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Design and develop AI-powered web applications</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Create seamless user experiences with modern frameworks</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Build scalable backend systems and APIs</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Mentor and collaborate with fellow developers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <Card key={index} className="backdrop-glass border-primary/10 hover:border-primary/30 transition-smooth hover-scale">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-primary/10 flex items-center justify-center">
                          <Icon className={`w-6 h-6 ${achievement.color}`} />
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold mb-2">{achievement.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{achievement.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Skills Section - Modern Layout */}
          <div className="backdrop-glass rounded-3xl p-8 border border-primary/10">
            <h3 className="text-2xl font-bold mb-8 text-center">Technical Expertise</h3>
            <div className="space-y-8">
              {skills.map((skillGroup, index) => (
                <div key={index} className="group">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-primary">{skillGroup.category}</h4>
                    <div className="h-px bg-gradient-to-r from-primary/50 to-transparent flex-1 ml-4"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-smooth">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{skill}</span>
                        <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent"></div>
                        <span className="text-xs text-primary font-medium">Expert</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
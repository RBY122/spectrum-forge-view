import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code, Database, GraduationCap } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management, secure payment processing, and responsive design.",
    category: "Web Development",
    technologies: ["React", "Node.js", ".NET", "PostgreSQL", "Stripe"],
    image: "/api/placeholder/400/250",
    demoUrl: "#",
    githubUrl: "#",
    icon: Code,
    featured: true
  },
  {
    id: 2,
    title: "Learning Management System",
    description: "Interactive educational platform with course management, progress tracking, and integrated video conferencing.",
    category: "Educational Tools",
    technologies: ["Vue.js", "Firebase", "WebRTC", "Tailwind CSS"],
    image: "/api/placeholder/400/250",
    demoUrl: "#",
    githubUrl: "#",
    icon: GraduationCap,
    featured: true
  },
  {
    id: 3,
    title: "Sales Analytics Dashboard",
    description: "Comprehensive analytics platform for visualizing sales data, forecasting trends, and generating actionable insights.",
    category: "Data Science",
    technologies: ["Python", "Pandas", "Tableau", "Flask", "D3.js"],
    image: "/api/placeholder/400/250",
    demoUrl: "#",
    githubUrl: "#",
    icon: Database,
    featured: false
  },
  {
    id: 4,
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, team communication, and progress visualization.",
    category: "Web Development",
    technologies: ["React", "TypeScript", "Express", "MongoDB"],
    image: "/api/placeholder/400/250",
    demoUrl: "#",
    githubUrl: "#",
    icon: Code,
    featured: false
  },
  {
    id: 5,
    title: "Student Performance Predictor",
    description: "Machine learning model to predict student outcomes and provide personalized learning recommendations.",
    category: "Data Science",
    technologies: ["Python", "Scikit-learn", "Jupyter", "Flask"],
    image: "/api/placeholder/400/250",
    demoUrl: "#",
    githubUrl: "#",
    icon: Database,
    featured: false
  },
  {
    id: 6,
    title: "Code Assessment Platform",
    description: "Online coding assessment tool for educational institutions with automated testing and plagiarism detection.",
    category: "Educational Tools",
    technologies: ["React", "Node.js", "Docker", "Redis"],
    image: "/api/placeholder/400/250",
    demoUrl: "#",
    githubUrl: "#",
    icon: GraduationCap,
    featured: false
  }
];

export function Projects() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
            Projects & Case Studies
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work across web development, educational technology, and data science projects.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-foreground">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full shadow-medium hover:shadow-glow transition-smooth group overflow-hidden">
                  <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                    <div className="absolute inset-0 bg-card/80 backdrop-blur-sm flex items-center justify-center">
                      <project.icon className="h-16 w-16 text-primary opacity-50" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-3 mt-auto">
                      <Button size="sm" className="flex-1">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-foreground">Other Projects</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Card className="h-full shadow-soft hover:shadow-medium transition-smooth group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                        <project.icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-smooth">
                      {project.title}
                    </h4>
                    
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 text-xs">
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Demo
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 text-xs">
                        <Github className="mr-1 h-3 w-3" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

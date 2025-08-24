import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code, TrendingUp, Users } from "lucide-react";

const milestones = [
  {
    icon: GraduationCap,
    title: "Education & Certifications",
    description: "Continuous learning in web technologies, data science, and educational methodologies"
  },
  {
    icon: Code,
    title: "Web Development Expertise",
    description: "Building modern, responsive applications with cutting-edge technologies"
  },
  {
    icon: TrendingUp,
    title: "Data Science & Analytics",
    description: "Transforming complex data into meaningful insights and actionable strategies"
  },
  {
    icon: Users,
    title: "IT Education",
    description: "Empowering the next generation of tech professionals through engaging instruction"
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a multifaceted technology professional who thrives at the intersection of development, 
            education, and data science. My passion lies in creating innovative solutions, sharing knowledge, 
            and turning complex data into clear, actionable insights.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-foreground">My Journey</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              With a foundation in web development and a passion for education, I've dedicated my career 
              to bridging the gap between complex technology and practical application. My work spans 
              creating intuitive web applications, developing comprehensive educational curricula, and 
              extracting meaningful insights from data.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe in the power of technology to transform lives and businesses. Whether I'm 
              building a responsive web application, teaching the next generation of developers, or 
              analyzing data to drive strategic decisions, I approach each challenge with curiosity, 
              precision, and a commitment to excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="w-full h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl shadow-large"></div>
            <div className="absolute inset-4 bg-card rounded-xl shadow-medium"></div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-glow transition-smooth group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                    <milestone.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-foreground">
                    {milestone.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {milestone.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
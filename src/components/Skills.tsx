import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "HTML/CSS", level: 98 },
      { name: "React", level: 90 },
      { name: "Vue.js", level: 85 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 }
    ],
    color: "from-blue-500 to-purple-600"
  },
  {
    title: "Backend & Frameworks",
    skills: [
      { name: ".NET Framework", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 82 },
      { name: "RESTful APIs", level: 88 },
      { name: "GraphQL", level: 75 },
      { name: "Database Design", level: 85 }
    ],
    color: "from-green-500 to-teal-600"
  },
  {
    title: "Data Science & Analytics",
    skills: [
      { name: "Python", level: 88 },
      { name: "Pandas", level: 92 },
      { name: "Jupyter Notebooks", level: 95 },
      { name: "Tableau", level: 85 },
      { name: "Data Visualization", level: 90 },
      { name: "Statistical Analysis", level: 82 }
    ],
    color: "from-orange-500 to-red-600"
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Firebase", level: 80 },
      { name: "Git/GitHub", level: 95 },
      { name: "CI/CD", level: 78 },
      { name: "Docker", level: 70 },
      { name: "AWS Basics", level: 65 },
      { name: "Deployment", level: 85 }
    ],
    color: "from-purple-500 to-pink-600"
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning frontend and backend development, data science, 
            and modern deployment practices.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <Card className="h-full shadow-medium hover:shadow-glow transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.color} mr-3`}></div>
                    <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center flex-1">
                          <span className="text-foreground font-medium mr-4 min-w-[120px]">
                            {skill.name}
                          </span>
                          <div className="flex-1 bg-muted rounded-full h-2 mr-4 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                              className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                            />
                          </div>
                        </div>
                        <Badge variant="secondary" className="ml-2">
                          {skill.level}%
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "JavaScript", "TypeScript", "React", "Vue.js", ".NET", "Node.js", 
              "Python", "Pandas", "Tableau", "Firebase", "Git", "Tailwind CSS"
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="tech-card px-4 py-2 rounded-lg cursor-pointer"
              >
                <span className="text-sm font-medium text-foreground">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface ProjectsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const projects = [
  {
    title: "AdTech Data Platform",
    description:
      "End-to-end AdTech analytics pipeline processing ~100K ad events/hour via Kafka → dbt → PostgreSQL, generating real-time ROAS and segmentation insights. Integrated a Decision Intelligence Assistant using RAG + LLMs for campaign optimization.",
    tech: ["Kafka", "dbt", "PostgreSQL", "Python", "LLMs", "LangChain", "AWS"],
    links: {
      //github: "https://github.com/arjunghosh4/AdTech-Platform", // update if repo differs
      demo: "https://adtech-platform-dashboard-arjunghosh.streamlit.app/", // optional Streamlit demo link
    },
  },
  {
    title: "Fare Prediction System",
    description:
      "This project predicts ride fares for Uber and Lyft rides based on historical ride data. The objective is to provide accurate predictions for fare prices, enabling insights into the factors influencing ride costs.",
    tech: ["PySpark", "Power BI", "Data Modeling", "DAX", "EDA", "Machine Learning"],
    links: {
      github: "https://github.com/arjunghosh4/Fare_Prediction",
      demo: "",
    },
  },
  {
    title: "Fraud Detection with Neo4j",
    description:
      "Graph-based fraud detection system identifying shared devices, suspicious jurisdictions, and high-risk entities through relationship modeling in Neo4j and Streamlit.",
    tech: ["Neo4j", "Python", "Graph Analysis", "Streamlit"],
    links: {
      github: "https://github.com/arjunghosh4/fraud-detection-neo4j",
      demo: "",
    },
  },
  // {
  //   title: "AI Email Response System",
  //   description: "LangChain agent that classifies and auto-replies to academic emails.",
  //   tech: ["LangChain", "Flask", "Vector Search"],
  //   links: {
  //     github: "https://github.com/arjunghosh4/Email-Response-Agent",
  //     demo: "https://email-agent.streamlit.app"
  //   }
  // }
];

const ProjectsModal = ({ open, onOpenChange }: ProjectsModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto bg-card border-primary/30 rounded-2xl shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl glow-text">Featured Projects</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            A selection of my real-world data and AI projects — combining analytics, cloud, and generative AI.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 md:grid-cols-1 mt-4">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-secondary border-primary/20 hover:border-primary/40 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-primary">{project.title}</CardTitle>
                  <div className="flex gap-3">
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:underline flex items-center gap-1"
                      >
                        Live Demo <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:underline flex items-center gap-1"
                      >
                        GitHub <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
                <CardDescription className="text-sm text-muted-foreground mt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-primary/20 text-primary rounded-full border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectsModal;
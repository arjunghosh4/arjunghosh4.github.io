import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface SkillsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const skillCategories = [
  {
    category: "Data Engineering & Cloud",
    skills: [
      "AWS (Glue, Lambda, S3, Redshift, DynamoDB, Bedrock)",
      "Azure & GCP (Data Factory, BigQuery, Cloud Functions)",
      "Airflow",
      "dbt",
      "Terraform",
      "Docker",
      "PySpark",
      "Kafka"
    ],
  },
  {
    category: "Programming & Scripting",
    skills: [
      "Python (Pandas, NumPy, Scikit-learn, LangChain, Streamlit)",
      "SQL (PostgreSQL, MySQL, Redshift)",
      "Node.js",
      "TypeScript",
      "HTML / CSS"
    ],
  },
  {
    category: "Analytics & Visualization",
    skills: [
      "Power BI",
      "Tableau",
      "Looker Studio",
      "ServiceNow Performance Analytics",
      "Excel (Pivot Tables, Power Query, VBA)",
      "Recharts / React Visualization"
    ],
  },
  {
    category: "AI & Machine Learning",
    skills: [
      "Generative AI (LLMs, RAG, LangChain, Bedrock)",
      "BERT / NLP Pipelines",
      "Vector Databases (Pinecone, FAISS)",
      "ML Workflow Automation",
      "Model Deployment (Flask, FastAPI)"
    ],
  },
  {
    category: "Databases & ETL",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Redshift",
      "MongoDB",
      "Neo4j",
      "ETL/ELT Pipelines (Glue, dbt, Python, Airflow)"
    ],
  },
  {
    category: "Product & Project Tools",
    skills: [
      "Jira",
      "Confluence",
      "Figma",
      "Slack",
      "ServiceNow",
      "Git / GitHub",
      "Agile & Scrum",
      "UAT / Sprint Planning"
    ],
  }
];

const SkillsModal = ({ open, onOpenChange }: SkillsModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-card border-primary/30 rounded-2xl shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl glow-text">Technical & Product Skills</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            A complete overview of my data, cloud, and product analytics toolkit.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-lg font-semibold text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-secondary/40 text-foreground rounded-lg border border-primary/20 hover:border-primary/60 hover:bg-secondary/60 transition-all duration-300 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SkillsModal;
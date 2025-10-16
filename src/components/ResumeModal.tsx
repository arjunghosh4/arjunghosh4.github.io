import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ResumeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ResumeModal = ({ open, onOpenChange }: ResumeModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto bg-card border-primary/30 rounded-2xl shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl glow-text">Arjun Krishna Ghosh</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Data & Cloud Analytics Professional | 6+ Years Experience | AI/Data Engineering/Product Analytics
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-8 mt-4 text-sm leading-relaxed text-muted-foreground">

          {/* SUMMARY */}
          <section>
            <h3 className="text-xl font-semibold text-primary mb-2">Professional Summary</h3>
            <p>
              Data & Cloud Analytics specialist with 6+ years across Tata Consultancy Services, SageNet and Georgia State University. 
              Experienced in building AWS-based pipelines, ETL automation, and AI-driven dashboards that delivered multi-million-dollar savings and operational efficiency. 
              Skilled in Python, SQL, dbt, Airflow, Power BI, and LangChain.
            </p>
          </section>

          {/* EXPERIENCE */}
          <section>
            <h3 className="text-xl font-semibold text-primary mb-2">Experience</h3>

            <div className="border-l-2 border-primary/30 pl-4 space-y-4">

              <div>
                <h4 className="font-semibold">Data Analyst Intern - SageNet (NOC Analytics)</h4>
                <p className="text-xs text-muted-foreground">June 2025 – August 2025  • Atlanta, GA</p>
                <ul className="mt-2 list-disc list-inside space-y-1">
                  <li>Built multi-tab ServiceNow dashboards for case volume and SLA trends, saving ~12 hours/month in manual reporting.</li>
                  <li>Reduced Mean Time to Resolution by 3.5 hours and enabled $60K/year SLA recovery through predictive incident tracking.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">Graduate Research Assistant - Georgia State University</h4>
                <p className="text-xs text-muted-foreground">August 2024 – May 2025  • Atlanta, GA</p>
                <ul className="mt-2 list-disc list-inside space-y-1">
                  <li>Developed AI-based academic chatbot using BERT + Flask and automated survey ETLs for 5K + records per cycle.</li>
                  <li>Contributed to Hadoop + Neo4j research pipelines for LLM and fraud detection studies.</li>
                </ul>
              </div>
            </div>
          </section>

              <div>
                <h4 className="font-semibold">Cloud Data Engineer/Analyst - Tata Consultancy Services (Stellantis Account)</h4>
                <p className="text-xs text-muted-foreground">November 2018 – May 2024  • Mumbai, India</p>
                <ul className="mt-2 list-disc list-inside space-y-1">
                  <li>Led AWS migration for connected-vehicle platforms (Uconnect, Free2Move), processing 200M + telematics events monthly.</li>
                  <li>Reduced ETL latency from 15 min → 3 min and cut hardware costs by $400K through Redshift + Glue optimization.</li>
                  <li>Improved safe-driving score accuracy from 82% to 96% via PySpark data-cleaning and dbt modeling.</li>
                </ul>
              </div>



          {/* EDUCATION */}
          <section>
            <h3 className="text-xl font-semibold text-primary mb-2">Education</h3>
            <div className="border-l-2 border-primary/30 pl-4 space-y-2">
              <div>
                <h4 className="font-semibold">M.S. in Computer Information Systems (Big Data Analytics & AI)</h4>
                <p className="text-xs text-muted-foreground">Georgia State University • 2024-2025</p>
              </div>
              <div>
                <h4 className="font-semibold">B.S. in Electronics Engineering</h4>
                <p className="text-xs text-muted-foreground">University of Mumbai • 2014-2018</p>
              </div>
            </div>
          </section>

          {/* CERTIFICATIONS */}
          <section>
            <h3 className="text-xl font-semibold text-primary mb-2">Certifications</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Certified Scrum Product Owner (CSPO)</li>
              <li>AWS AI Practitioner</li>
              <li>Microsoft Certified: Azure Fundamentals</li>
              <li>Databricks Generative AI Fundamentals</li>
              <li>SQL & AWS Cloud Practitioner (Internal Training)</li>
            </ul>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeModal;
import { Button } from "@/components/ui/button";
import { FileText, FolderOpen, Code } from "lucide-react";
import { useState } from "react";
import ProjectsModal from "./ProjectsModal";
import SkillsModal from "./SkillsModal";
import ResumeModal from "./ResumeModal";

const QuickActions = () => {
  const [showProjects, setShowProjects] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showResume, setShowResume] = useState(false);

  return (
    <>
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-4 justify-center">
          <Button
            onClick={() => setShowResume(true)}
            variant="outline"
            className="h-12 px-6 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
          >
            <FileText className="mr-2 h-5 w-5" />
            View Resume
          </Button>
          <Button
            onClick={() => setShowProjects(true)}
            variant="outline"
            className="h-12 px-6 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
          >
            <FolderOpen className="mr-2 h-5 w-5" />
            View Projects
          </Button>
          <Button
            onClick={() => setShowSkills(true)}
            variant="outline"
            className="h-12 px-6 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
          >
            <Code className="mr-2 h-5 w-5" />
            View Skills
          </Button>
        </div>
      </section>

      <ProjectsModal open={showProjects} onOpenChange={setShowProjects} />
      <SkillsModal open={showSkills} onOpenChange={setShowSkills} />
      <ResumeModal open={showResume} onOpenChange={setShowResume} />
    </>
  );
};

export default QuickActions;

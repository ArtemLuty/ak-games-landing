import Image from "next/image";
import { asset, type Project } from "@/data/site";
export function ProjectArt({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  return (
    <div className={`project-art art-${project.color}`}>
      {project.image ? (
        <Image
          src={asset(project.image)}
          alt={
            project.slug === "hollow"
              ? "HOLLOW’s forest keeper beneath a glowing tree in a misty woodland"
              : "ASHVEIL strategic map with a company exploring a dark fantasy realm"
          }
          width={1600}
          height={900}
          priority={priority}
          className={`landscape-art ${project.slug === "hollow" ? "hollow-art" : ""}`}
        />
      ) : project.visual === "phones" ? (
        <div className="phone-pair">
          {project.screenshots?.map((s, i) => (
            <div className={`phone phone-${i}`} key={s}>
              <Image
                src={asset(s)}
                alt={`${project.title} app screen ${i + 1}`}
                width={240}
                height={520}
                priority={priority}
              />
            </div>
          ))}
        </div>
      ) : project.visual === "workflow" ? (
        <div className="workflow-art" aria-label="ClinicFlow workflow overview">
          <div className="workflow-top">
            <span className="clinic-symbol">+</span>
            <strong>ClinicFlow</strong>
            <span className="workflow-label">WORKFLOW</span>
          </div>
          <div className="workflow-title">
            A better day
            <br />
            at the practice.
          </div>
          <div className="workflow-steps">
            {["Patient", "Appointment", "Visit", "Payment"].map((s, i) => (
              <div key={s}>
                <span>0{i + 1}</span>
                {s}
                <span>↗</span>
              </div>
            ))}
          </div>
          <span className="visual-caption">Product workflow illustration</span>
        </div>
      ) : (
        <div
          className="audio-art"
          aria-label="Freedom Player audio illustration"
        >
          <span>FREEDOM PLAYER</span>
          <div className="audio-disc">
            <span>fp.</span>
          </div>
          <div className="waveform">
            {Array.from({ length: 25 }, (_, i) => (
              <i key={i} style={{ height: `${12 + ((i * 37) % 47)}px` }} />
            ))}
          </div>
          <span className="visual-caption">Listening, simplified.</span>
        </div>
      )}
      {project.slug === "hollow" && (
        <div className="hollow-wordmark" aria-hidden="true">
          HOLLOW<span>THE LAST ECHO</span>
        </div>
      )}
    </div>
  );
}

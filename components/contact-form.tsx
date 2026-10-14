"use client";
import { useEffect, useState, type FormEvent } from "react";
import { contactDetails } from "@/data/site";
import { Arrow } from "./icons";
export function ContactForm() {
  const [kind, setKind] = useState("Mobile app");
  const [draft, setDraft] = useState("");
  const [copyStatus, setCopyStatus] = useState("");
  const [project, setProject] = useState("");
  useEffect(() => {
    setProject(
      new URLSearchParams(window.location.search)
        .get("project")
        ?.slice(0, 100) ?? "",
    );
  }, []);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = `Hi Artem,\n\nI'm ${data.get("name")}. I'd like to discuss ${kind.toLowerCase()} development.${project ? ` I'm interested in work like ${project}.` : ""}\n\n${data.get("idea")}\n\nTimeline: ${data.get("timeline")}\n\nBest,\n${data.get("name")}`;
    setDraft(body);
    setCopyStatus("");
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(draft);
      setCopyStatus("Draft copied.");
    } catch {
      setCopyStatus(
        "Copy isn’t available here. Select the draft below to copy it manually.",
      );
    }
  }
  return (
    <form
      className="contact-form"
      onSubmit={submit}
      onChange={() => setDraft("")}
    >
      <fieldset>
        <legend>What are you thinking about?</legend>
        <div className="inquiry-types">
          {["Mobile app", "Game", "MVP / web tool", "Something else"].map(
            (t) => (
              <label key={t} className={kind === t ? "selected" : ""}>
                <input
                  type="radio"
                  name="type"
                  value={t}
                  checked={kind === t}
                  onChange={() => setKind(t)}
                />
                {t}
              </label>
            ),
          )}
        </div>
      </fieldset>
      <label className="form-label" htmlFor="name">
        Your name
        <input
          id="name"
          name="name"
          autoComplete="name"
          placeholder="What should I call you?"
          maxLength={100}
          required
        />
      </label>
      <label className="form-label" htmlFor="idea">
        A little about your idea
        <textarea
          id="idea"
          name="idea"
          rows={4}
          placeholder="What are you building, who is it for, and where could I help?"
          maxLength={3000}
          required
        />
      </label>
      <label className="form-label" htmlFor="timeline">
        Timeline
        <select id="timeline" name="timeline">
          <option>Let’s figure it out together</option>
          <option>As soon as possible</option>
          <option>In the next 1–3 months</option>
          <option>Just exploring for now</option>
        </select>
      </label>
      <button type="submit" className="button button-primary">
        Prepare email <Arrow diagonal />
      </button>
      <p className="form-note">
        Prepares a message here. You review it, then send it from your email
        app.
      </p>
      {draft && (
        <div className="draft-fallback">
          <p role="status">
            Your draft is ready. Open your email app, or copy the message and
            send it to{" "}
            <a href={`mailto:${contactDetails.email}`}>
              {contactDetails.email}
            </a>
            .
          </p>
          <a
            className="button button-secondary"
            href={`mailto:${contactDetails.email}?subject=${encodeURIComponent(`Project inquiry — ${kind}`)}&body=${encodeURIComponent(draft)}`}
          >
            Open email app <Arrow diagonal />
          </a>
          <button type="button" onClick={copy} className="text-link">
            Copy message ↗
          </button>
          <p role="status">{copyStatus}</p>
          <details open>
            <summary>Review your message</summary>
            <pre>{draft}</pre>
          </details>
        </div>
      )}
    </form>
  );
}

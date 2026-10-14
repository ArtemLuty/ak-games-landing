"use client";

import { useEffect, useId, useRef, useState } from "react";
import { asset, type Project } from "@/data/site";

export function GameplayVideo({ project }: { project: Project }) {
  const video = useRef<HTMLVideoElement>(null);
  const visible = useRef(false);
  const userPaused = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const descriptionId = useId();

  useEffect(() => {
    const player = video.current;
    if (!player) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    const updatePlayback = () => {
      if (!visible.current || document.hidden) {
        player.pause();
      } else if (
        !motion.matches &&
        !connection?.saveData &&
        !userPaused.current
      ) {
        void player
          .play()
          .then(() => {
            // A pending play can resolve after the user has scrolled away.
            if (!visible.current || document.hidden || userPaused.current)
              player.pause();
          })
          .catch(() => {
            /* Native controls remain available if autoplay is blocked. */
          });
      }
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible.current =
          entry.isIntersecting && entry.intersectionRatio >= 0.35;
        updatePlayback();
      },
      { threshold: [0, 0.35] },
    );
    observer.observe(player);
    const onMotionChange = () => {
      if (motion.matches) player.pause();
      else updatePlayback();
    };
    motion.addEventListener("change", onMotionChange);
    document.addEventListener("visibilitychange", updatePlayback);
    return () => {
      visible.current = false;
      observer.disconnect();
      motion.removeEventListener("change", onMotionChange);
      document.removeEventListener("visibilitychange", updatePlayback);
      player.pause();
    };
  }, []);

  if (!project.video) return null;
  const clip = project.video;
  return (
    <figure className="gameplay-player">
      <div className="gameplay-screen">
        <video
          ref={video}
          src={asset(clip.src)}
          poster={asset(clip.poster)}
          preload="none"
          muted
          loop
          playsInline
          controls
          aria-label={`${project.title} gameplay video`}
          aria-describedby={descriptionId}
          onPlay={() => {
            userPaused.current = false;
            setPlaying(true);
          }}
          onPause={() => {
            if (visible.current && !document.hidden) userPaused.current = true;
            setPlaying(false);
          }}
          onError={() => setFailed(true)}
        >
          <a href={asset(clip.src)}>Watch {project.title} gameplay</a>
        </video>
      </div>
      <figcaption className="gameplay-controls">
        <span>{clip.caption}</span>
        {!failed && (
          <button
            type="button"
            className="video-toggle"
            aria-label={`${playing ? "Pause" : "Play"} ${project.title} gameplay`}
            onClick={() => {
              const player = video.current;
              if (!player) return;
              userPaused.current = !player.paused;
              if (player.paused)
                void player.play().catch(() => setPlaying(false));
              else player.pause();
            }}
          >
            <span aria-hidden="true">{playing ? "Ⅱ" : "▶"}</span>
            {playing ? "Pause" : "Play"}
          </button>
        )}
      </figcaption>
      <p id={descriptionId} className="sr-only">
        {clip.description}
      </p>
      {failed && (
        <p className="video-error" role="status">
          The preview couldn’t load.{" "}
          <a href={asset(clip.src)}>Open the video directly ↗</a>
        </p>
      )}
    </figure>
  );
}

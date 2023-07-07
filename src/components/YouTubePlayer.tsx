import React from "react"

export default function YouTubePlayer({ videoId }: { videoId: number }) {
  return (
    <>
      <div className="video">
        <iframe
          title="YouTube video player"
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </>
  )
}

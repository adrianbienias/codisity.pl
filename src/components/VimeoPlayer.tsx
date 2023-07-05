import React from "react"

export default function VimeoPlayer({ videoId }: { videoId: number }) {
  return (
    <>
      <div className="video">
        <iframe
          src={`https://player.vimeo.com/video/${videoId}`}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  )
}
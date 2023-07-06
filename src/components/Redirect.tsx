import React, { useEffect, useState } from "react"

export default function Redirect(destinationUrl: string) {
  const [delayed, setDelayed] = useState(false)

  useEffect(() => {
    window.location.assign(destinationUrl)
    setTimeout(() => setDelayed(true), 1000)
  }, [])

  if (delayed) {
    return (
      <div className="p-2">
        Jeśli przekierowanie nie nastąpiło automatycznie,&nbsp;
        <a href={destinationUrl}>kliknij tutaj &raquo;</a>
      </div>
    )
  }

  return null
}

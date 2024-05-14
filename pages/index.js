// pages/index.js

import { useEffect, useState } from 'react'

export default function Home() {
  const [content, setContent] = useState(null)

  useEffect(() => {
    const fetchContent = async () => {
      const response = await fetch('/api/content?divId=your-div-id')
      const data = await response.json()
      setContent(data)
    }

    fetchContent()
  }, [])

  return (
    <div>
      <h1>Dynamic Content Display</h1>
      <div id="your-div-id" dangerouslySetInnerHTML={{ __html: content ? content.html : 'Loading...' }} />
      <style jsx>{`
        ${content ? content.css : ''}
      `}</style>
      <script dangerouslySetInnerHTML={{ __html: content ? content.javascript : '' }} />
    </div>
  )
}

// pages/api/content.js

import path from 'path'
import { promises as fs } from 'fs'

export default async (req, res) => {
  const { divId } = req.query

  // Adjust the file path to where your JSON files are located
  const filePath = path.join(process.cwd(), 'public', `page-${divId}.json`)

  try {
    const fileContents = await fs.readFile(filePath, 'utf8')
    const data = JSON.parse(fileContents)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: 'Content not found' })
  }
}

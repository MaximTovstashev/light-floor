import sqlite from 'sqlite'
import path from 'path'
import { app } from 'electron'

const dbPath = process.env.NODE_ENV === 'development'
  ? path.join(app.getAppPath(), 'db')
  : path.join('db')

const db = sqlite.open(path.join(dbPath, 'db.sqlite'))

export default db

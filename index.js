
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import cors from 'cors'
// import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import userRoutes from './routes/userRoutes.js'
import taskRoutes from './routes/taskRoutes.js'
import connectDB from './config/db.js'


dotenv.config()

connectDB()

const app = express()
app.use(express.json())
// Enable CORS
app.use(cors())
app.options('*', cors())

app.use('/api/users',userRoutes)
app.use('/api/task',taskRoutes)

  app.get('/', (req, res) => {
    res.send('API is running...')
  })


// NOT FOUND ERROR HANDLER
// app.use(notFound)
//PRODUCT NOT FOUND ERROR HANDLER
// app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${5000}`.underline
      .yellow.bold
  )
)

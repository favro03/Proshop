import express from 'express'
import path from 'path'
//must have js in these files for import to work.
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
import uploadRoutes from './routes/uploadRoutes.js'
import morgan from 'morgan'

dotenv.config()
connectDB()
const app = express()

if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'))
}


const PORT = process.env.PORT || 5001

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))


app.get('/', (req, res) => {
    res.send('API is running ...')
})
app.use(express.json())
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)  
app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))  //this turns the folder we want to store the uploads into static so it loads to browser
app.use(notFound)
app.use(errorHandler)

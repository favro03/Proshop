import express from 'express'
//must have js in these files for import to work.
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'

dotenv.config()
connectDB()
const app = express()
const PORT = process.env.PORT || 5001

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))


app.get('/', (req, res) => {
    res.send('API is running ...')
})

app.use('/api/products', productRoutes)

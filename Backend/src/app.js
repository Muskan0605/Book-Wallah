import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app  = express()

app.use(cors({
    origin : process.env.CORS_ORIGIN ,
    credentials:true
}))



app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended : true , limit : "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
import requestRouter from "./routes/transaction.routes.js"
import bookRouter from './routes/book.routes.js'
import userRouter from "./routes/user.routes.js"

app.use('/api/v1',requestRouter)
app.use('/api/v1',bookRouter)
app.use('/api/v1' , userRouter)

export {app}
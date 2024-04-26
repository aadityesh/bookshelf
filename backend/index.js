import express from "express"
import { PORT } from "./config.js";
import bookRoutes from "./routes/bookRoutes.js"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())
app.use('/books', bookRoutes)

app.listen(PORT, () => {
    console.log(`Server started: ${PORT}`);
}) 
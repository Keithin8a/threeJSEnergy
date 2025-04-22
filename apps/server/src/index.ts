import express from 'express'
import * as renewableEnergyController from './renewableEnergyController'

const PORT = 3000

const app = express()

app.use(express.json())

app.get('/', renewableEnergyController.getItemsByType)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
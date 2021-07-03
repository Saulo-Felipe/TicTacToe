const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', (response, resquest) => {
	resquest.sendFile(path.join(__dirname, 'build', 'index.html'))
})


app.listen(process.env.PORT || 3000, (err) => {
	if (err) return console.log('Error: ', err)

	console.log('Tudo funcionando Perfeitamente')
}) 
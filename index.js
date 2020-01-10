const express = require('express')
const path = require('path')
const data = require('./data/item.json')
const app = express()
const port = 3000
console.log(data)

//middleware sama seperti fungsi, urutan berlaku
const middlewareSatu = (req, res, next) => {
	console.log('middlewareSatu')
	next()
}
const middlewareDua = (req, res, next) => {
	console.log('middlewareDua')
	next()
}

app.use(middlewareSatu)
app.use(middlewareDua)
app.use(express.static('public'))

app.get('/', (req, res) =>{
	res.render('index', {
		page_title: 'Title page ini ya',
		greetings: 'Hello, poeple!'
	})
})
app.get('/echo/:nama', (req, res) =>{
	// res.send('Response : '+ req.params.nama)
	res.render('index', {
		page_title: 'Halaman ini bagus',
		greetings: req.params.nama
	})
})
app.get('/pindah', (req, res) =>{
	// res.redirect('https://dafidea.com')
	res.redirect('/echo/namaredirect')
})

//view engine
app.set('views', path.join(__dirname, 'templates'))
app.set('view engine', 'hbs')




app.listen(port, () => console.log(`Example app listening on port ${port}!`))
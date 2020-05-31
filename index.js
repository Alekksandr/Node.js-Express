const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const homeRoutes = require ('./routes/home')
const cartRoutes = require ('./routes/cart')
const addRoutes = require ('./routes/add')
const coursesRoutes = require ('./routes/courses')

const express_app = express()

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

express_app.engine('hbs', hbs.engine)
express_app.set('view engine', 'hbs')
express_app.set('views', 'pages')

express_app.use(express.static(path.join(__dirname, 'public')))
express_app.use(express.urlencoded({extended: true}))
express_app.use('/', homeRoutes)
express_app.use('/add', addRoutes)
express_app.use('/courses' , coursesRoutes)
express_app.use('/cart', cartRoutes)




const PORT = process.env.PORT || 3300
express_app. listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})
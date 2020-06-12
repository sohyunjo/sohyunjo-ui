let express = require('express')
let router = express.Router()


//query string => query property on the request object
//localhost:3000/person?name=thomas&&age=20
router.get('/person', (req, res) => {
    if(req.query.name){
        res.send(`You have requested a person ${req.query.name}`)
    }
    else{
        res.send('You have requested a person')
    }
    
})

// params property on the request object
router.get('/person/:name', (req, res) => {
    res.send(`You have requested a person ${req.params.name}`)
})

router.get('/error', (req, res) =>{
    throw new Error('this is error')
})

module.exports = router
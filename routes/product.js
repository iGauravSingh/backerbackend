const router = require("express").Router();
const { prisma } = require("../db");
const { authenticateToken } = require("../middlewares/auth");

router.get('/getall' , async (req,res) => {
    

    try {

        const allProduct = await prisma.products.findMany({})
        res.json(allProduct)
    } catch (error) {
        console.log('error in creating order',error)
    }
})

router.post('/addproduct' , async (req,res) => {
    //{id: 1, name: 'BERRILUM',Image: one, price: 10, stars: 5 },
    const { name, Image, price, star } = req.body

    const newPrice = parseInt(price)
    const newStar = parseInt(star)

    try {

        const newProduct = await prisma.products.create({
            data: {
                name,
                Image,
                price: newPrice,
                stars: newStar
            }
        }
        
        )
        res.json({message: "ok created"})
    } catch (error) {
        console.log('error in creating order',error)
    }
})

router.delete('/deleteproduct/:id' , async (req,res) => {
    //{id: 1, name: 'BERRILUM',Image: one, price: 10, stars: 5 },
    const id = parseInt(req.params.id, 10)
    console.log('from delete product',id)

    try {

        const newProduct = await prisma.products.delete({
            where: {
                id: id
            }
        }
        
        )
        res.json({message: "ok deleted"})
    } catch (error) {
        console.log('error in creating order',error)
    }
})


module.exports = router;


















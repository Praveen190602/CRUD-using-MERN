const express = require('express');

const router = express.Router();

const BikesPost = require('../models/bikes');

router.get('/read', async(req, res) => {
    

BikesPost.find({  })
    .then((data)=> {
      console.log('Data:' ,data);
      res.json(data);
  })
  .catch((error)=> {
      console.log('error:' ,daerrorta);
  });   
});

router.post('/save', (req, res) => {
    
    const bikeName= req.body.bikeName;
    const bikeManufacture= req.body.bikeManufacture;
    const bikeSales= req.body.bikeSales;

    const newBikespost = new BikesPost({ bikeName: bikeName, bikeManufacture: bikeManufacture, bikeSales: bikeSales});

    newBikespost.save((error) => {
        if(error) {
         res.status(500).json({msg: 'Internal server errors'});
         return;
        }
           res.json({
                msg: 'Your data has been saved!!'
            });
        
    });
    
    });


    router.put('/update', (req,res) => {
        const newBikeName = req.body.newBikeName;
        const newBikeManufacture = req.body.newBikeManufacture;
        const newBikeSales = req.body.newBikeSales;

        const id = req.body.id;

        try{
            BikesPost.findById(id, (err, updatedBike) => {
              updatedBike.bikeName = newBikeName;
              updatedBike.bikeManufacture = newBikeManufacture;
              updatedBike.bikeSales = newBikeSales;
            updatedBike.save();
            res.send("update");
            });
        }catch(err) {
            console.log(err);
        }

    });

    router.delete('/delete/:id', async(req,res) => {
        const id = req.params.id;
        await BikesPost.findByIdAndRemove(id).exec();
        res.send('deleted');
    });






module.exports = router;
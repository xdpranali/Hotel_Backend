const express = require('express');
const router = express.Router();
const Menu = require('./../models/menu');

router.post('/', async (req, res) => {
    try{
        const data = req.body;  //assuming the req body  conatains menu data

        //create a new Menu document
        const newMenu = new Menu(data);

        //save the new Menu  in database
        const response = await newMenu.save();
        console.log('Menu data saved');
        res.status(200).json(response);
      }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

router.get('/', async (req, res) => {
    try{
        const data = await Menu.find();
        console.log('Menu data fetched');
        res.status(200).json(data);
      }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

router.get('/:taste', async (req, res) => {
    try{
        const taste = req.params.taste;   //extract the taste from menu

        if(taste == 'sweet' || taste == 'spicy' || taste == 'sour'){
            const response = await Menu.find({taste: taste});
            console.log('response fetched');
            res.status(200).json(response);
        }else{
            res.status(404).json({error: 'Invalid taste type'});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

module.exports = router;
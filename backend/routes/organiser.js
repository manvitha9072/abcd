const express = require("express");
const Aform = require("../models/Aform.js");
const router = express.Router();
router.get("/approved", async (req, res) => {
    try {
      const getData = await Aform.find({ approved: true });
      console.log(getData);
      res.json([...getData]);
    } catch (err) {
      res.json([]);
    }
  });
  module.exports=router;
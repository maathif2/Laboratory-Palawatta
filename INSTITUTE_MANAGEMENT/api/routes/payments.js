const router = require("express").Router();
const Payment = require("../models/Payment");



//CRETAE ACCADEMIC PAYMENT
router.post("/", async (req, res) => {
  const newPayment = new Payment(req.body);
  try {
    const feecount = await Payment.count();
    newPayment.paymentid = 'PID00'+ (parseInt(feecount)+1);
   
  try {
    const savedPayment = await newPayment.save();
    res.status(200).json(savedPayment);
  } catch (err) {
    res.status(500).json(err);
   
  }
  } catch (error) {
  console.log(error)
  }
});

//GET VIEW ACCADEMIC PAYMENT
router.get("/:paymentid", async (req, res) => {
  try {
    const viewPayment = await Payment.findOne({'paymentid':req.params.paymentid});
    res.status(200).json(viewPayment);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET VIEW ALL ACCADEMIC PAYMENT
router.get("/", async (req, res) => {
  try {
    const viewPayments = await Payment.find();
    res.status(200).json(viewPayments);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE ACCADEMIC PAYMENT
router.put("/updatepay/:paymentid",async(req, res) => {
  try{
            //console.log(req.body);
            //console.log(req.params.paymentid);
            await Payment.findOneAndUpdate({'paymentid':req.params.paymentid},
      {
        $set: req.body
      }
    );
    res.status(200).json("Payment details updated");
    
  } catch (err) {
    res.status(500).json(err);
  }
})


//Get Month
router.get("/grp/:month", async (req, res) => {
  try {
    const payment = await Payment.find({'month':req.params.month});
    res.status(200).json(payment);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
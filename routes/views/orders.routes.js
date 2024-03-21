const router = require("express").Router();
const CreateOrder = require("../../components/pages/CreateOrder");
const { District, Order } = require("../../db/models");
const UpdatePage = require("../../components/pages/UpdatePage");

router.get("/", (req, res) => {
  try {
    // const districts = District.findAll()
    const html = res.renderComponent(CreateOrder, {
      title: "Create new order",
    });
    res.send(html);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get("/:id", async (req, res) => {
    
  try {
    const { id } = req.params;
    const order = await Order.findOne({ where: {id} }); 
console.log(order);
    const html = res.renderComponent(UpdatePage, {
      title: "Update order",
      order, 
    });

    res.send(html);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post("/", async (req, res) => {
  try {
  } catch ({ message }) {
    res.json({ message });
  }
});

router.put("/", async (req, res) => {
  try {
  } catch ({ message }) {
    res.json({ message });
  }
});

router.delete("/", async (req, res) => {
  try {
  } catch ({ message }) {
    res.json({ message });
  }
});
module.exports = router;

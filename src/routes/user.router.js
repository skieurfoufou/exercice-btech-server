const express = require("express");
const router = express.Router();
const userLogic = require("../business-logic/user.logic");

router.get("/", async (req, res) => {
  const { subCategory, q } = req.query;
  try {
    const usersRes = await userLogic.getAllUsers({ subCategory, q });
    res.send(usersRes);
  } catch (err) {
    res.status(err.status).send({ errors: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const body = req.body;
    const createUserRes = await userLogic.createUser(body);
    res.send(createUserRes);
  } catch (err) {
    res.status(err.status).send({ errors: err.message });
  }
});

// router.delete("/:id", authMiddleware, async (req, res) => {
//   try {
//     await recipeLogic.deleteRecipe(req.params.id);
//     res.send({ success: true });
//   } catch (err) {
//     res.status(err.status).send({ errors: err.message });
//   }
// });

module.exports = router;

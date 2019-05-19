const express = require("express"),
  router = express.Router(),
  bodyParser = require("body-parser");
const Member = require("../models/Member");

router.use(bodyParser.urlencoded({ extended: false }));

router.get("/", (req, res) => {
  Member.find().then(members => res.json(members));
});

// Add a member
router.post("/add_member", (req, res) => {
  console.log(req.body.father);
  console.log(req.body.mother);

  new Member({
    name: req.body.name,
    gender: req.body.gender,
    father: req.body.father,
    mother: req.body.mother,
    siblings: req.body.siblings,
    children: req.body.children,
    spouse: req.body.spouse,
    birth: req.body.birth
  })
    .save()
    .then(member => res.json(member));
});

// search a member
router.get("/search/:key/:value", (req, res) => {
  if (req.params.key === "name") {
    Member.find({ name: req.params.value }, (err, member) => {
      if (err) console.log(`Error finding module: ${member} Error: ${member}`);
      else if (!member) res.json({ errMessage: "Member Not Exist" });
      else {
        res.json(member);
      }
    });
  }
});

module.exports = router;

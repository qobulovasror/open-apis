const male_name = require("./data/male.json");
const female_name = require("./data/female.json");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.json(male_name.concat(female_name).sort((a, b)=>(a.name > b.name? 1: 0)));
});

router.get("/byLitter/:litter", (req, res) => {
    const litter = req.params.litter.toLowerCase();
    if(litter.charCodeAt < 97 || litter.charCodeAt() > 122)
        return  res.status(400).send({ error: "Invalid litter" })
    const names = male_name.concat(female_name).filter(l=>l.name.startsWith(litter.toUpperCase()))

    res.json(names[Math.floor(Math.random() * names.length)]);
});

router.get("/male", (req, res)=>{
    res.json(male_name);
})

router.get("/female", (req, res)=>{
    res.json(female_name);
})

router.get("/random", (req, res)=>{
    if(req.query.gender === "male")
        return res.json(male_name[Math.floor(Math.random() * male_name.length)]);

    if(req.query.gender === "female")
        return res.json(female_name[Math.floor(Math.random() * female_name.length)]);
    
    res.json(male_name.concat(female_name)[Math.floor(Math.random() * male_name.length+female_name.length)]);
})

module.exports = router;

const Project = require("../models/Project");

const { isLoggedIn, isLoggedInAndAuthorized, isLoggedInAndAdmin } = require("./autorisationCheck");

const router = require("express").Router();

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

//CREATE
router.post("/", isLoggedInAndAdmin, async (req,res) => {
    const newProject = new Project(req.body);

    try {
        const savedProject = await newProject.save();
        res.status(200).json(savedProject);

    } catch(err) {
        res.status(500).json(err);
    }
})

//GET PROJECT
router.get("/find/:id", async (req,res) => {
    try {
        const project = await Project.findById(req.params.id);
        res.status(200).json(project);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ALL PROJECTS
router.get("/", async (req,res) => {
    //await wait(3000);
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
const router = require('express').Router();
let ModeratedArticle = require('../models/moderatedarticle.model');

router.route('/').get((req, res) => {
    console.log("bruh mod / check");
    ModeratedArticle.find()
        .then(moderatedarticles => res.json(moderatedarticles))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    console.log("bruh mod /add check");

    const _id = req.body._id;
    const author = req.body.author;
    const title = req.body.title;
    const journal = req.body.journal;
    const year = req.body.year;
    const volume = req.body.volume;
    const number = req.body.number;
    const pages = req.body.pages;
    const month = req.body.month;
    let status = req.body.status;

    status = "accepted";

    const newModeratedArticle = new ModeratedArticle({
        _id,
        author,
        title,
        journal,
        year,
        volume,
        number,
        pages,
        month,
        status
    });

    newModeratedArticle.save()
        .then(() => res.json('Moderated article added!'))
        .catch(err => { console.log("Err value: " + JSON.stringify(err)); res.status(400).json('Error: ' + err) });
});

function name() {

}
module.exports = router;
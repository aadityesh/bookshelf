import express from "express"
import { Book } from "../db.js";

const router = express.Router()


router.get('/', async (req, res) => {

    try {
        const allBooks = await Book.find({})
        const data = {
            count: allBooks.length,
            Books: allBooks,
        }
        res.status(200).send(data)

    } catch (error) {
        res.status(500).send({ message: error.message })
    }

})

router.get('/:id', async (req, res) => {
    try {
        // const { id } = req.params;
        const id = req.params.id
        console.log(`Query: ${id}`);
        const data = await Book.findById(id)
        res.status(200).send(data)
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
})

router.post('/', async (req, res) => {

    try {

        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            res.status(403).send({ message: "Send title, author, publishYear correctly" })
        }

        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        }
        const book = await Book.create(newBook)
        console.log(req);
        res.status(200).send(book)

    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
})

router.put('/:id', async (req, res) => {
    try {

        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            res.status(403).send({ message: "Send title, author, publishYear correctly" })
        }
        const id = req.params.id
        console.log(`Query: ${id}`);
        const result = await Book.findByIdAndUpdate(id, req.body)
        if (!result) {
            res.status(404).send({ message: "Book not found/ID incorrect" })
        } else {
            res.status(200).send({ message: "Updated successfully" })

        }

    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        console.log(`Query: ${id}`);
        const result = await Book.findByIdAndDelete(id)
        if (!result) {
            res.status(404).send({ message: "Book not found/ID incorrect" })
        } else {
            res.status(200).send({ message: "Updated successfully" })
        }
    }

    catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
})

export default router
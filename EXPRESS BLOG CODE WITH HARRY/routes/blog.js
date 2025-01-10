const express = require('express')
const path = require('path')
const router = express.Router()

const blogs = require('../data/blogs')

router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, '../templates/index.html'))
    res.render('home')
})
router.get('/blogs', (req, res) => {
    blogs.forEach(blog => {
        // console.log(blog.title)
    })
    // res.sendFile(path.join(__dirname, '../templates/blogsHomepage.html'))
    res.render('blogHomepage', {
        allBlogs: blogs
    })
})
router.get('/blogpost/:slug', (req, res) => {
    const selectedBlog = blogs.filter((val) => {
        return val.slug === req.params.slug
    })
    // res.sendFile(path.join(__dirname, '../templates/blogsPage.html'))
    res.render('blogPage', {
        viewBlog: selectedBlog[0]
    })
})

module.exports = router
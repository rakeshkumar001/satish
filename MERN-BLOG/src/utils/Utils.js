import BlogData from "../Data/BestBlogs.json";
import { get, isEmpty, find, filter, pick, map, has, debounce, uniq } from 'lodash';

const getAllCategoryNames = () => {
    return uniq(map(BlogData, val => val.tag))
}

const getAllTitles = () => {
    return uniq(map(BlogData, val => val.title))
}

const generateSlug = (title) => {
    return title.toLowerCase().replaceAll(" ", "_")
}

const getBlogData = (id) => {
    return (BlogData.filter((val) => val.id == id))[0]
}

export { getAllCategoryNames, getAllTitles, generateSlug, getBlogData }
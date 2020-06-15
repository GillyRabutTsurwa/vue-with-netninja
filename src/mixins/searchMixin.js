export default {
    // the object we are exporting is just like regular vue code
    computed: {
        filteredBlogsArr: function () {
            return this.blogsArr.filter(currentBlog => {
                return currentBlog.title.match(this.search);
            });
        }
    }
}
module.exports = {
    css: {
        loaderOption: {
            sass: {
                prependData: '@import "@/src/assets/styles/styles.scss";'
            }
        }
    }
};
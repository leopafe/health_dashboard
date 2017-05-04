

var config = {
    entry: 'c:\\Linux Share\\personal_projects\\health_dashboard\\src\\index.js',

    output: {
        path:'c:\\Linux Share\\personal_projects\\health_dashboard\\static\\js',
        filename: 'bundle.js',
    },

    devServer: {
        inline: true,
        port: 8080
    },

    module: {
        loaders: [
            {
                test : /\.jsx?/,
                include : 'c:\\Linux Share\\personal_projects\\health_dashboard',
                loader : 'babel-loader'
            }
        ]
    }
}

module.exports = config;
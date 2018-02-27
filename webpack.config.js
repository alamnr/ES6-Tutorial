module.exports={
    entry:'./first.js',
    output:{
        path:__dirname,
        filename: 'bundle.js'
    },
    watch:true,
    module:{
        rules:[
            {
                loader:'babel-loader',
                exclude:'/node_modules/'

            }
        ]
    }
}
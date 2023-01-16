
const path = require('path');
const HtmlWebpackPlugin= require('html-webpack-plugin');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');  

module.exports = {

    mode: 'development',
    entry:{

        main: path.resolve(__dirname,'src/app.js'),

    },
    output:{

        path:'C:/xampp/htdocs/dist2',  //path.resolve(__dirname,'dist'),
        assetModuleFilename:"[contenthash].[ext]",
        filename: '[name].[contenthash].js',
        clean:true

    },

   // devtool:'inline-source-map',
    devServer:{

        static: path.resolve(__dirname,'dist'),
        port: 5001,
        open: true,
        hot: true,
        


    },

  
    context: __dirname,

    //loaders

    module:{

        rules:[
           
            {test: /\.css$/ , use:['style-loader', 'css-loader']  },
            {test: /\.html$/, use: [{ loader: 'html-loader', options: { minimize: true, sources: true }}       ]},
            { test: /\.(glb|bin|ogg)$/, loader: 'file-loader', options: { esModule: false,  name: '[name].[ext]' } },
            
        ]




    },
   


    //plugins

    plugins:[

        new HtmlWebpackPlugin({
            title:'snack attack',
            filename:'index.html',
            template: path.resolve(__dirname,'src/index.html')

        }),
        new UglifyJsPlugin(),



    ]






}
const path = require("path");
module.exports={
    configureWebpack:{
        resolve:{
            //配置路径别名
            alias:{
                "@views": path.resolve(__dirname, "src/views"),
                "@assets":path.resolve(__dirname,"src/assets"),
                "@comps":path.resolve(__dirname,"src/components"),
                "@store":path.resolve(__dirname,"src/store"),
                "@utils":path.resolve(__dirname,"src/utils"),
                "@api":path.resolve(__dirname,"src/api")
            }
        }
    },
    devServer:{
        //服务器代理
        proxy:{
            "/api":{
                target:"http://182.92.128.115", //目标路径
                changeOrigin:true //允许跨域
            }
        }
    }
}
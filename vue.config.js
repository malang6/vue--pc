const path = require("path");
module.exports={
    configureWebpack:{
        resolve:{
            alias:{
                "@views": path.resolve(__dirname, "src/views"),
                "@assets":path.resolve(__dirname,"src/assets"),
                "@comps":path.resolve(__dirname,"src/components"),
                "@store":path.resolve(__dirname,"src/store"),
                "@utils":path.resolve(__dirname,"src/utils"),
                "@api":path.resolve(__dirname,"src/api")
            }
        }
    }
}
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer:{
        port:3000,
        /* proxy: {
            '': {
                
               target: "http://202.194.7.29:22223",
                changeOrigin: true, // 是否改变源
            },
            '/auth': {
            
                target: "http://202.194.7.29:22223",
                changeOrigin: true, // 是否改变源
            },
        }, */
    },
})
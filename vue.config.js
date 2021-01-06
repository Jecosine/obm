module.exports = {
    // cli3 代理是从指定的target后面开始匹配的，不是任意位置；配置pathRewrite可以做替换
    devServer: {
        // proxy: {
        //     '/api': {
        //         target: 'http://localhost:8888',
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/api': 'http://localhost:8888'
        //         }
        //     }
        // }
        proxy : "http://127.0.0.1:8888",
        port: 8080
    }
}
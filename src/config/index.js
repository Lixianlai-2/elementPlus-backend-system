// 获取当前的环境运行模式,默认为prod生产环境
const env = import.meta.env.MODE || 'prod'
const envConfig = {
    // 开发环境
    dev: {
        // 这里放置的是接口根地址
        baseApi: 'https://www.fastmock.site/mock/1efbf169199616c84ad40d1d3e73e1e0/api',
        mockApi: ''
    },
    // 测试环境
    test: {
        baseApi: 'https://www.fastmock.site/mock/1efbf169199616c84ad40d1d3e73e1e0/api',
        mockApi: ''
    },
    // 生产环境，也就是线上环境
    prod: {
        baseApi: '',
        mockApi: ''
    }
}

// 环境配置
export default {
    //是什么环境
    env: env,
    //判断当前接口是否需要mock，这里是总开关
    mock: true,
    //当开发、测试、部署的地址不同时，只需要改这里，不用去其他地方手动改请求代码
    ...envConfig[env]
}

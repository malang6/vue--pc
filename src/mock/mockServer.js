import Mock from "mockjs";
import banners from "./rbanners"
import floors from "./rfloors"

Mock.mock("/mock/banners","get",{
    code:200,
    //注意：当随机的数量只有1条的时候，这个数据是一个对象 如果只需要随机一条的话，可以这么写："data|1":[banners]
    "data|4-6":banners,//生成4-6个banners 随机多个的时候，是一个数组
    // "data":banners,
})

Mock.mock("/mock/floors","get",{
    code:200,
    // 这里如果使用原始写了的数据 floors 则不需要再随机数量 直接"data":floors即可 注意引入banners文件
    "data|2-3":floors,
})
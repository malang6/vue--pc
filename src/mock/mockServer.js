import Mock from "mockjs";
import banners from "./rbanners"
import floors from "./rfloors"

Mock.mock("/mock/banners","get",{
    code:200,
    "data|4":banners,
})

Mock.mock("/mock/floors","get",{
    code:200,
    "data|3-5":floors,
})
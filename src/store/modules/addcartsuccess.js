export default {
    state:{
      skuInfos: {},
      spuSaleAttrLists: [],
    },
    getters: {
        proInfo(state) {
            return state.spuSaleAttrLists.map((attr) =>
              attr.spuSaleAttrValueList.filter((item) => item.isChecked === "1")
            );
          },
    },
    actions:{},
    mutations:{
        PUSH_SKUINFOS(state,skuInfos){
            state.skuInfos = skuInfos
        },
        PUSH_SPUSALEATTRLISTS(state,spuSaleAttrLists){
            state.spuSaleAttrLists = spuSaleAttrLists
        }
    }
}
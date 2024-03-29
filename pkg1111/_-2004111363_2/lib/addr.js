function _defineProperty(e, i, p) {
    return i in e ? Object.defineProperty(e, i, {
        value: p,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[i] = p, e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _addr, HOST = "https://wtApi.vzan.com/", ws = "wss://dzwss.xiaochengxu.com.cn/", addr = (_addr = {
    ws: ws,
    live: HOST + "apiMiappEnterprise/GetLivePlay",
    WxLogin: HOST + "apiMiappEnterprise/GetSesionKey",
    loginByThirdPlatform: HOST + "apiMiappEnterprise/GetAppUserInfo",
    GetGoodsList: HOST + "apiMiappEnterprise/GetGoodsList",
    GetPageSetting: HOST + "apiMiappEnterprise/GetPageSetting",
    GetPageSettingUpdateTime: HOST + "apiMiappEnterprise/GetPageSettingUpdateTime",
    SaveUserForm: HOST + "apiMiappEnterprise/SaveUserForm",
    GetGoodInfo: HOST + "apiMiappEnterprise/GetGoodInfo",
    Getaid: HOST + "apiMiappEnterprise/Getaid",
    SaveSubscribeForm: HOST + "apiMiappEnterprise/SaveSubscribeForm",
    GetNewsList: HOST + "apiMiappEnterprise/GetNewsList",
    GetNewsInfo: HOST + "apiMiappEnterprise/GetNewsInfo",
    GetGoodsByids: HOST + "apiMiappEnterprise/GetGoodsByids",
    GetNewsInfoByids: HOST + "apiMiappEnterprise/GetNewsInfoByids",
    GetExtTypes: HOST + "/apiMiappEnterprise/GetExtTypes",
    GetAgentConfigInfo: HOST + "apiMiappEnterprise/GetAgentConfigInfo",
    GetShare: HOST + "apiMiappEnterprise/GetShare",
    GetSubscribeFormDetail: HOST + "apiMiappEnterprise/GetSubscribeFormDetail",
    getGoodsCarData_new: HOST + "/apiMiappEnterprise/getGoodsCarData_new",
    addGoodsCarData: HOST + "apiMiappEnterprise/addGoodsCarData",
    updateOrDeleteGoodsCarData: HOST + "apiMiappEnterprise/updateOrDeleteGoodsCarData",
    addMiniappGoodsOrder: HOST + "apiMiappEnterprise/addMiniappGoodsOrder",
    PayOrder: HOST + "apiMiappEnterprise/PayOrderNew",
    getMiniappGoodsOrder: HOST + "apiMiappEnterprise/getMiniappGoodsOrder",
    getMiniappGoodsOrderById: HOST + "apiMiappEnterprise/getMiniappGoodsOrderById",
    updateOrDeleteGoodsCarDataBySingle: HOST + "apiMiappEnterprise/updateOrDeleteGoodsCarDataBySingle",
    GetStoreInfo: HOST + "apiMiappEnterprise/GetStoreInfo",
    GetBargainList: HOST + "apiMiniAppTools/GetBargainList?BargainType=1",
    GetBargain: HOST + "apiMiniAppTools/GetBargain?BargainType=1",
    AddBargainUser: HOST + "apiMiniAppTools/AddBargainUser?BargainType=1",
    cutprice: HOST + "apiMiniAppTools/cutprice?BargainType=1",
    GetBargainUserList: HOST + "apiMiniAppTools/GetBargainUserList?BargainType=1",
    GetShareCutPrice: HOST + "apiMiniAppTools/GetShareCutPrice?BargainType=1",
    GetBargainRecordList: HOST + "apiMiniAppTools/GetBargainRecordList?BargainType=1",
    GetBargainUser: HOST + "apiMiniAppTools/GetBargainUser?BargainType=1",
    GetBargainOpenState: HOST + "apiMiniAppTools/GetBargainOpenState?BargainType=1",
    AddBargainOrder: HOST + "apiMiniAppTools/AddBargainOrder?BargainType=1",
    GetUserWxAddress: HOST + "apiMiniAppTools/GetUserWxAddress",
    commitFormId: HOST + "apiMiappStores/commitFormId",
    deleteLastFormId: HOST + "apiMiappStores/deleteLastFormId",
    GetOrderDetail: HOST + "apiMiniAppTools/GetOrderDetail",
    ConfirmReceive: HOST + "apiMiniAppTools/ConfirmReceive",
    GetGroupListPage: HOST + "apiMiniAppGroup/GetGroupListPage",
    GetGroupList: HOST + "apiMiniAppGroup/GetGroupList",
    GetGroupDetail: HOST + "apiMiniAppGroup/GetGroupDetail",
    AddGroup: HOST + "apiMiniAppGroup/AddGroup",
    AddPayOrderNew: HOST + "apiMiappStores/AddPayOrderNew",
    GetPaySuccessGroupDetail: HOST + "apiMiniAppGroup/GetPaySuccessGroupDetail",
    GetMyGroupList: HOST + "apiMiniAppGroup/GetMyGroupList",
    GetMyGroupDetail: HOST + "apiMiniAppGroup/GetMyGroupDetail",
    GetInvitePageData: HOST + "apiMiniAppGroup/GetInvitePageData",
    GetGroupOrderDetail: HOST + "apiMiniAppGroup/GetOrderDetail",
    RecieveGoods: HOST + "apiMiniAppGroup/RecieveGoods",
    CancelPay: HOST + "apiMiniAppGroup/CancelPay",
    GetVipInfo: HOST + "apiMiappEnterprise/GetVipInfo",
    getSaveMoneySetList: HOST + "apiMiappSaveMoney/getSaveMoneySetList",
    getSaveMoneySetUser: HOST + "apiMiappSaveMoney/getSaveMoneySetUser",
    addSaveMoneySet: HOST + "apiMiappSaveMoney/addSaveMoneySet",
    GetPayLogList: HOST + "apiMiappSaveMoney/GetPayLogList",
    updateMiniappGoodsOrderState: HOST + "apiMiappEnterprise/updateMiniappGoodsOrderState",
    GetGroupByIds: HOST + "apiMiappEnterprise/GetGroupByIds",
    GetWxCardCode: HOST + "apiMiappStores/GetWxCardCode",
    GetCardSign: HOST + "apiMiappStores/GetCardSign",
    SaveWxCardCode: HOST + "apiMiappStores/SaveWxCardCode",
    UpdateWxCard: HOST + "apiMiappStores/UpdateWxCard",
    PayByStoredvalue: HOST + "apiMiappEnterprise/PayByStoredvalue",
    StoredvalueOrderInfo: HOST + "apiMiappEnterprise/StoredvalueOrderInfo",
    GetMyCouponList: HOST + "apiMiniAppCoupons/GetMyCouponList",
    GetStoreCouponList: HOST + "apiMiniAppCoupons/GetStoreCouponList",
    GetCoupon: HOST + "apiMiniAppCoupons/GetCoupon",
    UpdateCouponWxCode: HOST + "apiMiniAppCoupons/UpdateCouponWxCode",
    SetWxCouponsUnavailable: HOST + "apiMiniAppCoupons/SetWxCouponsUnavailable",
    GetExchangeActivityList: HOST + "apiMiappEnterprise/GetExchangeActivityList",
    GetExchangeActivity: HOST + "apiMiappEnterprise/GetExchangeActivity",
    AddExchangeActivityOrder: HOST + "apiMiappEnterprise/AddExchangeActivityOrder",
    GetStoreRules: HOST + "apiMiappEnterprise/GetStoreRules",
    GetUserIntegral: HOST + "apiMiappEnterprise/GetUserIntegral",
    GetExchangeActivityOrders: HOST + "apiMiappEnterprise/GetExchangeActivityOrders",
    GetUserIntegralLogs: HOST + "apiMiappEnterprise/GetUserIntegralLogs",
    ConfirmReciveGood: HOST + "apiMiappEnterprise/ConfirmReciveGood",
    GetReductionCard: HOST + "apiMiniAppCoupons/GetReductionCard",
    GetReductionCardList: HOST + "apiMiniAppCoupons/GetReductionCardList",
    GetentGroupDetail: HOST + "apiMiniAppEntGroup/GetGroupDetail",
    GetMyGroupList2: HOST + "apiMiniAppEntGroup/GetMyGroupList",
    GetEntGroupByIds: HOST + "apiMiappEnterprise/GetEntGroupByIds",
    GetAddressByIp: HOST + "apiMiappEnterprise/GetAddressByIp",
    GetUserAddress: HOST + "apiMiappEnterprise/GetUserAddress",
    EditUserAddress: HOST + "apiMiappEnterprise/EditUserAddress",
    DeleteUserAddress: HOST + "apiMiappEnterprise/DeleteUserAddress",
    changeUserAddressState: HOST + "apiMiappEnterprise/changeUserAddressState",
    GetFreightFee: HOST + "apiMiappEnterprise/GetFreightFee",
    GetMiniAppSaleManConfig: HOST + "apiMiappEnterprise/GetMiniAppSaleManConfig",
    ApplySalesman: HOST + "apiMiappEnterprise/ApplySalesman",
    GetSalesManRecord: HOST + "apiMiappEnterprise/GetSalesManRecord",
    UpdateSalesManRecord: HOST + "apiMiappEnterprise/UpdateSalesManRecord",
    GetSalesmanGoodsList: HOST + "apiMiappEnterprise/GetSalesmanGoodsList",
    GetSalesManRecordOrder: HOST + "apiMiappEnterprise/GetSalesManRecordOrder",
    GetSalesManRecordUser: HOST + "apiMiappEnterprise/GetSalesManRecordUser",
    BindRelationShip: HOST + "apiMiappEnterprise/BindRelationShip",
    GetSalesManUserInfo: HOST + "apiMiappEnterprise/GetSalesManUserInfo",
    DrawCashApply: HOST + "apiMiappEnterprise/DrawCashApply",
    GetDrawCashApplyList: HOST + "apiMiappEnterprise/GetDrawCashApplyList",
    GetProductQrcode: HOST + "apiEnterprise/GetProductQrcode",
    GetSaleManRelationList: HOST + "apiMiappEnterprise/GetSaleManRelationList",
    GetSortQueueSwitch: HOST + "Inherit/GetSortQueueSwitch",
    GetContactList: HOST + "apiim/GetProContactList",
    AddContact: HOST + "apiim/AddProContact",
    GetHistory: HOST + "apiim/GetHistory",
    Upload: HOST + "apiim/Upload",
    LogisticsInfo: HOST + "apiMiappEnterprise/GetOrderDeliveryFeed",
    submitReturnGoodAppeal: HOST + "apiMiappEnterprise/updateMiniappGoodsOrderState",
    getDeliveryCompany: HOST + "apiMiniAppTools/GetDeliveryCompany",
    getReturnGoodDetail: HOST + "apiMiappEnterprise/GetReutrnOrderInfo",
    GetFunctionList: HOST + "apiMiappEnterprise/GetFunctionList",
    GetVersonId: HOST + "apiMiappEnterprise/GetVersonId",
    SendUserAdvisory: HOST + "apiMiniAppGw/SendUserAdvisory",
    SendUserAuthCode: HOST + "apiMiniAppGw/GetVaildCode",
    SaveUserInfo: HOST + "apiMiniAppGw/SaveUserInfo",
    AddManyGoodsComment: HOST + "apiEnterprise/AddManyGoodsComment",
    GetGoodsCommentList: HOST + "apiEnterprise/GetGoodsCommentList",
    GetUserGoodsCommentList: HOST + "apiEnterprise/GetUserGoodsCommentList",
    PointsGoodsComment: HOST + "apiEnterprise/PointsGoodsComment",
    GetSecondGoodTypeList: HOST + "apiMiappEnterprise/GetSecondGoodTypeList",
    GetGoodTypeList: HOST + "apiMiappEnterprise/GetGoodTypeList",
    senduserauth: HOST + "apiMiappEnterprise/senduserauth",
    Submitauth: HOST + "apiMiappEnterprise/Submitauth",
    GetVaildCode: HOST + "webview/GetVaildCode"
}, _defineProperty(_addr, "SaveUserInfo", HOST + "webview/SaveUserInfo"), _defineProperty(_addr, "GetTableNoQrCode", HOST + "apiMiappEnterprise/GetTableNoQrCode"), 
_defineProperty(_addr, "addPayContentOrder", HOST + "apiMiappEnterprise/addPayContentOrder"), 
_defineProperty(_addr, "GetFlashDeal", HOST + "apiMiappEnterprise/GetFlashDeal"), 
_defineProperty(_addr, "GetFlashItem", HOST + "apiMiappEnterprise/GetFlashItem"), 
_defineProperty(_addr, "AddFlashSubscribe", HOST + "apiMiappEnterprise/AddFlashSubscribe"), 
_defineProperty(_addr, "GetUserPlayCard", HOST + "apiMiappEnterprise/GetUserPlayCard"), 
_defineProperty(_addr, "PlayCard", HOST + "apiMiappEnterprise/PlayCard"), _defineProperty(_addr, "AddQrCodeScanRecord", HOST + "apiMiappEnterprise/AddQrCodeScanRecord"), 
_defineProperty(_addr, "UpdateNewsPV", HOST + "apiMiappEnterprise/UpdateNewsPV"), 
_defineProperty(_addr, "GetAllVipRights", HOST + "apiMiappEnterprise/GetAllVipRights"), 
_defineProperty(_addr, "GetFullReductionByAid", HOST + "apiMiniAppTools/GetFullReductionByAid"), 
_defineProperty(_addr, "GetBargainFreightFee", HOST + "apiMiappEnterprise/GetBargainFreightFee"), 
_defineProperty(_addr, "GetOrderRecordCount", HOST + "apiMiappEnterprise/GetOrderRecordCount"), 
_defineProperty(_addr, "GetStorePickPlace", HOST + "apiMiappEnterprise/GetStorePickPlace"), 
_defineProperty(_addr, "CancelOrder", HOST + "apiMiappEnterprise/CancelOrder"), 
_defineProperty(_addr, "GetSubscribePageSetting", HOST + "apiMiappEnterprise/GetSubscribePageSetting"), 
_addr);

exports.default = addr;
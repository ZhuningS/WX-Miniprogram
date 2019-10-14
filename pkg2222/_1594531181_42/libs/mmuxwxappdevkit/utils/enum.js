module.exports = {
    DetailPageScene: {
        Home: 1
    },
    ExtFrom: {
        Data: 0,
        Args: 1,
        Property: 2
    },
    PageActionType: {
        IndexExposure: 1,
        IndexClick: 2,
        DetailViewBanner: 3,
        DetailShowSku: 4,
        DetailShare: 5,
        DetailExposurePage: 6,
        AddressClickLocation: 7,
        AddressPhoneCall: 8,
        AddressShare: 9,
        AddressClickContact: 10,
        SearchDoSearch: 11,
        SearchNextPage: 12,
        SearchClickResult: 13
    },
    IDKeyDefine: {
        AppScriptError: 1,
        NetworkHttpError: 2,
        NetworkLogicError: 3,
        NetworkConnectError: 4,
        LocalImagePathExitsButFileEmpty: 5,
        LoadImageGeneralError: 6,
        LoadImageDownloadError: 7,
        LoadImageSaveFileError: 8,
        WXLoginApiError: 9,
        LoginWithAppIdEmpty: 10,
        NetworkUseCgiWithoutRegister: 11,
        ReportExtKeyEmpty: 12,
        ReportExtDataEmpty: 13,
        LocalFileStorageWillFull: 14,
        FileManagerGetSavedFileError: 15,
        FileManagerSaveFileExceeded: 16,
        NetworkSessionTimeout: 17
    },
    SvrErrorCode: {
        OK: 0,
        SystemError: -1,
        SessionTimeout: -3,
        NotSupport: -5,
        Unknown: -3e4
    }
};
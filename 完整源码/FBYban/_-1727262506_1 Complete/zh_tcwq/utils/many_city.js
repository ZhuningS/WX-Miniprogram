function e(e, t, i) {
    return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = i, e;
}

var t, i = {
    city: [ (t = {
        A: {
            name: "直辖市",
            city: [ "上海市", "重庆市", "香港", "澳门", "台湾", "北京市" ]
        },
        B: {
            name: "安徽省",
            city: [ "合肥市", "毫州市", "芜湖市", "马鞍山市", "池州市", "黄山市", "滁州市", "安庆市", "淮南市", "淮北市", "蚌埠市", "巢湖市", "宿州市", "宣城市", "六安市", "阜阳市", "铜陵市", "明光市", "天长市", "宁国市", "界首市", "桐城市" ]
        },
        C: {
            name: "福建省",
            city: [ "福州市", "厦门市", "泉州市", "漳州市", "南平市", "三明市", "龙岩市", "莆田市", "宁德市", "建瓯市", "武夷山市", "长乐市", "福清市", "晋江市", "南安市", "福安市", "龙海市", "邵武市", "石狮市", "福鼎市", "建阳市", "漳平市", "永安市" ]
        },
        D: {
            name: "广西省",
            city: [ "南宁市", "贺州市", "玉林市", "桂林市", "柳州市", "梧州市", "北海市", "钦州市", "百色市", "防城港市", "贵港市", "河池市", "崇左市", "来宾市", "东兴市", "桂平市", "北流市", "岑溪市", "合山市", "凭祥市" ]
        },
        E: {
            name: "新疆",
            city: [ "乌鲁木齐", "克拉玛依", "石河子", "阿拉尔市", "图木舒克", "五家渠", "哈密", "吐鲁番", "阿克苏", "喀什", "和田", "伊宁", "塔城", "阿勒泰", "奎屯", "博乐", "昌吉", "阜康", "库尔勒", "阿图什", "乌苏" ]
        },
        F: {
            name: "西藏",
            city: [ "拉萨", "日喀则" ]
        }
    }, e(t, "F", {
        name: "宁夏",
        city: [ "银川", "石嘴山", "吴忠", "固原", "中卫", "青铜峡市", "灵武市" ]
    }), e(t, "F", {
        name: "内蒙古",
        city: [ "呼和浩特", "包头", "乌海", "赤峰", "通辽", "鄂尔多斯", "呼伦贝尔", "巴彦淖尔", "乌兰察布", "霍林郭勒市", "满洲里市", "牙克石市", "扎兰屯市", "根河市", "额尔古纳市", "丰镇市", "锡林浩特市", "二连浩特市", "乌兰浩特市", "阿尔山市" ]
    }), e(t, "F", {
        name: "吉林",
        city: [ "长春", "吉林", "四平", "辽源", "通化", "白山", "松原", "白城", "九台市", "榆树市", "德惠市", "舒兰市", "桦甸市", "蛟河市", "磐石市", "公主岭市", "双辽市", "梅河口市", "集安市", "临江市", "大安市", "洮南市", "延吉市", "图们市", "敦化市", "龙井市", "珲春市", "和龙市" ]
    }), e(t, "F", {
        name: "黑龙江",
        city: [ "哈尔滨", "大庆", "齐齐哈尔", "佳木斯", "鸡西", "鹤岗", "双鸭山", "牡丹江", "伊春", "七台河", "黑河", "绥化", "五常", "双城", "尚志", "纳河", "虎林", "密山", "铁力", "同江", "富锦", "绥芬河", "海林", "宁安", "穆林", "北安", "五大连池", "肇东", "海伦", "安达" ]
    }), t) ]
};

module.exports = i;
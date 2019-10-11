
const shuifa = [
    {"name": "*管点编码", "id": "ID", disabled: true },
    {"name": "*管点编号", "id": "pipeCode", col: true, ss: true, sort: true, disabled: true },
    {"name": "*管网类型", "id": "pipeNetworkType", col: true, sort: true, disabled: true },
    {"name": "*管点类型", "id": "tubeType", col: true, sort: true, disabled: true },
    {"name": "*标准代码", "id": "standardCode", disabled: true },
    {"name": "*所在道路", "id": "roadName", col: true, sort: true, as: true, disabled: true },
    {"name": "*位置", "id": "location", col: true, ss: true},
    {"name": "所属服务区", "id": "belongsToTheServiceArea"},
    {"name": "地面高程", "id": "groundElevation"},
    {"name": "埋深", "id": "buriedDepth"},
    {"name": "维护次数", "id": "maintainTheNumberOf"},
    {"name": "当前状态", "id": "currentState", as: true, type: 'dictSelector', data: 'UPNetwork_currentState', col: true},
    {"name": "*埋没日期", "id": "ownershipUnit", type: 'date', sort: true, as: true, col: true},
    {"name": "*使用年限", "id": "contacter"},
    {"name": "*权属单位", "id": "unitConnectionWay", type: 'dictSelector', data: 'UPNetwork_ownershipUnits', col: true, as: true},
    {"name": "单位联系人", "id": "partition"},
    {"name": "单位联系方式", "id": "numberOfMaintenance"},
    {"name": "施工单位", "id": "constructionUnit"},
    {"name": "设计单位", "id": "designUnits"},
    {"name": "*是否监测", "id": "whetherMonitoring", type: 'dictRadio', data: 'UPNetwork_whetherTheMonitoring'},
    {"name": "坐标", "id": "position"},

    {"name": "*所在窨井", "id": "wellId", col: true},
    {"name": "*阀门类型", "id": "valveType"},
    {"name": "口径", "id": "caliber"},
    {"name": "生产厂商", "id": "manufacturers"},
    {"name": "型号", "id": "model"},
    {"name": "*作用", "id": "role", col: true},
    {"name": "转动方向", "id": "rotationDirection"},
    {"name": "关断方向", "id": "shutOffTheDirection"},
    {"name": "开关状态", "id": "switchState"},
    {"name": "全开转数", "id": "allRevolutions"},

    {"name": "备注", "id": "remark"}, 
]

buildForm(shuifa, 'UPNetwork_JS_FM_Point', '给水阀门')
buildTable(shuifa, 'UPNetwork_JS_FM_Point', '给水阀门')
buildSimpleSearch(shuifa, 'UPNetwork_JS_FM_Point', '给水阀门')
buildAdvanceSearch(shuifa, 'UPNetwork_JS_FM_Point', '给水阀门')
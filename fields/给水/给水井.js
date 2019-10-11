UPNetwork_JS_JSYJ_Point


const shuijing = [
    {"name": "管点编码", "id": "ID"},
    {"name": "*管点编号", "id": "pipeCode", col: true, ss: true, sort: true},
    {"name": "*管网类型", "id": "pipeNetworkType", col: true, sort: true},
    {"name": "*管点类型", "id": "tubeType", col: true, sort: true},
    {"name": "*标准代码", "id": "standardCode"},
    {"name": "*所在道路", "id": "roadName", col: true, sort: true, as: true},
    {"name": "*位置", "id": "location", col: true, ss: true},
    {"name": "所属服务区", "id": "belongsToTheServiceArea"},
    {"name": "地面高程", "id": "groundElevation"},
    {"name": "埋深", "id": "buriedDepth", col: true},
    {"name": "维护次数", "id": "maintainTheNumberOf"},
    {"name": "当前状态", "id": "currentState", as: true, type: 'dictSelector', data: 'UPNetwork_currentState'},
    {"name": "*埋没日期", "id": "ownershipUnit", col: true, type: 'date', sort: true, as: true},
    {"name": "*使用年限", "id": "contacter"},
    {"name": "*权属单位", "id": "unitConnectionWay"},
    {"name": "单位联系人", "id": "partition"},
    {"name": "单位联系方式", "id": "numberOfMaintenance", type: 'dictSelector', data: 'UPNetwork_ownershipUnits'},
    {"name": "施工单位", "id": "constructionUnit"},
    {"name": "设计单位", "id": "designUnits"},
    {"name": "*是否监测", "id": "whetherMonitoring", type: 'dictRadio', data: 'UPNetwork_whetherTheMonitoring'},
    {"name": "坐标", "id": "position"},
    {"name": "备注", "id": "remark"},

    {"name": "井盖形状", "id": "manholeCoverShape"},
    {"name": "井盖材质", "id": "manholeCoverMaterial"},
    {"name": "井盖尺寸", "id": "capSize"},

]

buildForm(sj, 'UPNetwork_JS_JSYJ_Point', '给水管井')
buildTable(sj, 'UPNetwork_JS_JSYJ_Point', '给水管井')
buildSimpleSearch(sj, 'UPNetwork_JS_JSYJ_Point', '给水管井')
buildAdvanceSearch(sj, 'UPNetwork_JS_JSYJ_Point', '给水管井')
const jishuibiao = [
    {"name": "管点编码", "id": "ID"},
    {"name": "*管点编号", "id": "pipeCode", col: true, ss: true, sort: true},
    {"name": "*管网类型", "id": "pipeNetworkType", col: true, sort: true},
    {"name": "*管点类型", "id": "tubeType", col: true, sort: true},
    {"name": "*标准代码", "id": "standardCode"},
    {"name": "*所在道路", "id": "roadName", col: true, sort: true, as: true, type: 'dictSelector', data: 'InternetOfThingsEquipment_Road'},
    {"name": "*位置", "id": "location", col: true, ss: true},
    {"name": "所属服务区", "id": "belongsToTheServiceArea"},
    {"name": "地面高程", "id": "groundElevation"},
    {"name": "埋深", "id": "buriedDepth", col: true},
    {"name": "维护次数", "id": "maintainTheNumberOf"},
    {"name": "当前状态", "id": "currentState", col: true, as: true, type: 'dictSelector', data: 'UPNetwork_currentState'},
    {"name": "*埋没日期", "id": "ownershipUnit", type: 'date', sort: true, as: true},
    {"name": "*使用年限", "id": "contacter"},
    {"name": "*权属单位", "id": "unitConnectionWay", as: true},
    {"name": "单位联系人", "id": "partition"},
    {"name": "单位联系方式", "id": "numberOfMaintenance", type: 'dictSelector', data: 'UPNetwork_ownershipUnits'},
    {"name": "施工单位", "id": "constructionUnit"},
    {"name": "设计单位", "id": "designUnits"},
    {"name": "*是否监测", "id": "whetherMonitoring", type: 'dictRadio', data: 'UPNetwork_whetherTheMonitoring'},
    {"name": "坐标", "id": "position"},
    

    {"name": "口径", "id": "caliber"},
    {"name": "生产厂商", "id": "manufacturers"},
    {"name": "型号", "id": "model"},
    {"name": "户号", "id": "doorNumber", col: true},
    {"name": "用户名称", "id": "userName", col: true, ss: true},
    {"name": "用水性质", "id": "userName", as: true, type: 'dictSelector', data: 'UPNetwork_waterUse'},
    {"name": "通水日期", "id": "waterDate", col: true},

    {"name": "备注", "id": "remark"},

]

const objectTypeId = 'UPNetwork_JS_SB_Point'
const objectName = '给水管井'

buildForm(jishuibiao, objectTypeId, objectName)
buildTable(jishuibiao, objectTypeId, objectName)
buildSimpleSearch(jishuibiao, objectTypeId, objectName)
buildAdvanceSearch(jishuibiao, objectTypeId, objectName)
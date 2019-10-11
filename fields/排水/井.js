UPNetwork_RQ_RQYJ_Point

const psgj = [
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

    {"name": "井盖形状", "id": "manholeCoverShape"},
    {"name": "井盖材质", "id": "manholeCoverMaterial"},
    {"name": "井盖尺寸", "id": "capSize"},

    {"name": "备注", "id": "remark"},    
]

buildForm(psgj, 'UPNetwork_PS_YSJ_Point', '排水井')
buildTable(psgj, 'UPNetwork_PS_YSJ_Point', '排水井')
buildSimpleSearch(psgj, 'UPNetwork_PS_YSJ_Point', '排水井')
buildAdvanceSearch(psgj, 'UPNetwork_PS_YSJ_Point', '排水井')
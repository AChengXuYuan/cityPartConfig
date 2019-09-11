
const rqgx = [
    {"name": "管线编码", "id": "pipeId"},
    {"name": "管线编号", "id": "pipeCode", col: true, ss: true, sort: true},
    {"name": "管网类型", "id": "pipeNetworkType", col: true, sort: true},
    {"name": "管线管点分类名称", "id": "linePipeCategoryName", col: true, sort: true},
    {"name": "标准代码", "id": "standardCode"},
    {"name": "所在道路", "id": "roadName", col: true, sort: true, as: true},
    {"name": "起点号", "id": "startId", col: true, ss: true, sort: true},
    {"name": "终点号", "id": "endId", col: true, ss: true, sort: true},
    {"name": "起点埋深", "id": "startPointDepth", col: true},
    {"name": "终点埋深", "id": "endPointDepth", col: true},
    {"name": "起点管顶高程", "id": "endTopElevation"},
    {"name": "终点管顶高程", "id": "startTopElevation"},
    {"name": "管径", "id": "sectionCaliber", col: true},
    {"name": "材质", "id": "material", col: true, sort: true, as: true, type: 'dictSelector', data: 'UPNetwork_powerLineMaterial'},
    {"name": "管长（m）", "id": "length", col: true},
    {"name": "前点编号", "id": "wereNumbered"},
    {"name": "后点编号", "id": "afterPointNumber"},
    {"name": "是否是上游第一点", "id": "upstreamIsTheFirstPoint"},
    {"name": "敷设方式", "id": "embedmentType", col: true, sort: true, as: true, type: 'dictSelector', data: 'UPNetwork_currentState'},
    {"name": "敷设日期", "id": "embedmentTime", as: true, type: 'date'},
    {"name": "使用年限", "id": "useFixedNumberOfYear"},
    {"name": "当前状态", "id": "currentState", as: true},
    {"name": "权属单位", "id": "ownershipUnit", as: true, type: 'dictSelector', data: 'UPNetwork_ownershipUnits'},
    {"name": "单位联系人", "id": ""},
    {"name": "单位联系方式", "id": "unitConnectionWay"},
    {"name": "所在分区", "id": "partition"},
    {"name": "维修次数", "id": "numberOfMaintenance"},
    {"name": "施工单位", "id": "constructionUnit"},
    {"name": "设计单位", "id": "designUnits"},
    {"name": "坐标", "id": "position"},
    {"name": "是否监测", "id": "whetherMonitoring", type: 'dictRadio', data: 'UPNetwork_whetherTheMonitoring'},
    {"name": "备注", "id": "remark"},
]


buildForm(rqgx, 'UPNetwork_RQ_Tubulation', '燃气管线')
buildTable(rqgx, 'UPNetwork_RQ_Tubulation', '燃气管线')
buildSimpleSearch(rqgx, 'UPNetwork_RQ_Tubulation', '燃气管线')
buildAdvanceSearch(rqgx, 'UPNetwork_RQ_Tubulation', '燃气管线')
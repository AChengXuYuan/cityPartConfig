
const dlgx = [
    {"name": "*管线编码", "id": "ID", disabled: true },
    {"name": "*管线编号", "id": "pipeCode", col: true, ss: true, sort: true, disabled: true },
    {"name": "*管网类型", "id": "pipeNetworkType", col: true, sort: true, disabled: true },
    {"name": "*管线管点分类名称", "id": "linePipeCategoryName", col: true, sort: true, disabled: true },
    {"name": "*标准代码", "id": "standardCode", disabled: true },
    {"name": "*所在道路", "id": "roadName", col: true, sort: true, as: true, disabled: true },
    {"name": "*起点号", "id": "startId", col: true, ss: true, sort: true, disabled: true },
    {"name": "*终点号", "id": "endId", col: true, ss: true, sort: true, disabled: true },
    {"name": "*起点埋深", "id": "startPointDepth", col: true, disabled: true },
    {"name": "*终点埋深", "id": "endPointDepth", col: true, disabled: true },
    {"name": "*起点管顶高程", "id": "endTopElevation", disabled: true },
    {"name": "*终点管顶高程", "id": "startTopElevation", disabled: true },
    {"name": "*管径", "id": "sectionCaliber", col: true, disabled: true },
    {"name": "*材质", "id": "material", col: true, sort: true, as: true, type: 'dictSelector', data: 'UPNetwork_powerLineMaterial', disabled: true },
    {"name": "*管长（m）", "id": "length", col: true, disabled: true },
    {"name": "*前点编号", "id": "wereNumbered"},
    {"name": "*后点编号", "id": "afterPointNumber"},
    {"name": "*是否是上游第一点", "id": "upstreamIsTheFirstPoint"},
    {"name": "*敷设方式", "id": "embedmentType", col: true, sort: true, as: true, type: 'dictSelector', data: 'UPNetwork_currentState'},
    {"name": "*敷设日期", "id": "embedmentTime", as: true, type: 'date'},
    {"name": "*使用年限", "id": "useFixedNumberOfYear"},
    {"name": "当前状态", "id": "currentState", as: true},
    {"name": "*权属单位", "id": "ownershipUnit", as: true, type: 'dictSelector', data: 'UPNetwork_ownershipUnits'},
    {"name": "单位联系人", "id": "unitConnectionPerson"},
    {"name": "单位联系方式", "id": "unitConnectionWay"},
    {"name": "所在分区", "id": "partition"},
    {"name": "维修次数", "id": "numberOfMaintenance"},
    {"name": "施工单位", "id": "constructionUnit"},
    {"name": "设计单位", "id": "designUnits"},
    {"name": "坐标", "id": "position"},
    {"name": "*是否监测", "id": "whetherMonitoring", type: 'dictRadio', data: 'UPNetwork_whetherTheMonitoring'},

    
    {"name": "电压", "id": "voltage"},
    {"name": "总孔数", "id": "totalNumberOfHoles"},
    {"name": "占用孔数", "id": "takeUpHoleNumber"},
    {"name": "电缆条数", "id": "cableArticleNumber"},
    {"name": "管理站点", "id": "manageSite"},
    
    {"name": "备注", "id": "remark"},
]


buildForm(dlgx, 'UPNetwork_DL_Tubulation', '电力管线')
buildTable(dlgx, 'UPNetwork_DL_Tubulation', '电力管线')
buildSimpleSearch(dlgx, 'UPNetwork_DL_Tubulation', '电力管线')
buildAdvanceSearch(dlgx, 'UPNetwork_DL_Tubulation', '电力管线')
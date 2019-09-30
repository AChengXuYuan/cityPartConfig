const csbj = [
    {
        name: "*部件编码",
        id: "ID"
    },
    {
        name: "*部件编号",
        id: "code",
        ss: true,
        col: true,
        sort: true
    },
    {
        name: "* 安装位置",
        id: "installationLocation",
        ss: true,
        col: true
    },
    {
        name: "*所在道路",
        id: "road",
        col: true,
        sort: true,
        as: true,
        type: 'dictSelector',
        data: 'InternetOfThingsEquipment_Road'
    },
    {
        name: "*安装日期",
        id: "installationDate",
        col: true,
        sort: true,
        type: 'date'
    },
    {
        name: "*使用年限",
        id: "yearsOfUse"
    },
    {
        name: "*主管部门",
        id: "administration",
        col: true,
        sort: true
    },
    {
        name: "*权属单位",
        id: "ownershipUnit",
        col: true,
        sort: true,
        as: true,
        type: 'dictSelector',
        data: 'InternetOfThingsEquipment_OwnershipUnit'
    },
    {
        name: "*养护单位",
        id: "maintenanceUnit"
    },
    {
        name: "所属行政区划",
        id: "administrativeDivision"
    },
    {
        name: "所在单元网格",
        id: "cellGrid"
    },
    {
        name: "所在路侧",
        id: "roadSide",
        type: 'dictSelector',
        data: 'InternetOfThingsEquipment_RoadSide'
    },
    {
        name: " 尺寸",
        id: "size",
        col: true
        
    },
    {
        name: " 型号",
        id: "model",
        col: true
        
    },
    {
        name: " 状态",
        id: "status",
        col: true,
        sort: true,
        as: true,
        type: 'dictSelector',
        data: 'InternetOfThingsEquipment_EquipmentStatus'
    },
    {
        name: "*位置坐标",
        id: "positionCoordinates"
    },
    {
        name: "二维码",
        id: "QRCode"
    },
    {
        name: "*设备图片",
        id: "pictures"
    },
    {
        name: "*是否监测",
        id: "monitor",
        as: true,
        type: 'dictRadio',
        data: 'UPNetwork_whetherTheMonitoring'
    },
    {
        name: "数据来源",
        id: "dataSources"
    },
    {
        name: "备注",
        id: "remarks"
    },
]
    
    const ObjectTypeId = 'MANG_CityComponent'
    const name = '城市部件'
    
    buildForm(csbj, ObjectTypeId, name)
    buildTable(csbj, ObjectTypeId, name)
    buildSimpleSearch(csbj, ObjectTypeId, name)
    buildAdvanceSearch(csbj, ObjectTypeId, name)

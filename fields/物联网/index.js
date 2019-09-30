const wlw = [
{
    "name": "*监测设备编号",
    "id": "code",
    col: true,
    ss: true
},
{
    "name": "* 安装位置",
    "id": "installationLocation",
    col: true,
    ss: true
},
{
    "name": "*业务大类名称",
    "id": "businessClassName"
},
{
    "name": "*监测对象类型",
    "id": "monitoringObjectType",
    type: 'dictSelector',
    data: 'InternetOfThingsEquipment_MonitoringObjectType'
},
{
    "name": "*监测对象",
    "id": "monitoringObject"
},
{
    "name": "*所在道路",
    "id": "Road",
    col: true,
    type: 'dictSelector',
    data: 'InternetOfThingsEquipment_Road',
    sort: true,
    as: true
},
{
    "name": "所在杆/箱/廊/沟/井",
    "id": " poleOrBoxOrGalleryOrDitchOrWell"
},
{
    "name": "*安装日期",
    "id": "installationDate",
    col: true,
    type: 'date',
    sort: true,
    as: true
},
{
    "name": "*使用年限",
    "id": "yearsOfUse"
},
{
    "name": "主管部门",
    "id": "administration",
    col: true,
    sort: true
},
{
    "name": "*权属单位",
    "id": "ownershipUnit",
    col: true,
    type: 'dictSelector',
    data: 'InternetOfThingsEquipment_OwnershipUnit',
    sort: true,
    as: true
},
{
    "name": "养护单位",
    "id": "maintenanceUnit"
},
{
    "name": "所属行政区划",
    "id": "administrativeDivision"
},
{
    "name": "所在单元网格",
    "id": "cellGrid"
},
{
    "name": "所在路侧",
    "id": "roadSide",
    type: 'dictSelector',
    data: 'InternetOfThingsEquipment_RoadSide'
},
{
    "name": " 尺寸",
    "id": "size",
    col: true,
    ss: true
},
{
    "name": " 型号",
    "id": "model",
    col: true,
    ss: true
},
{
    "name": "生产厂商",
    "id": "manufacturer"
},
{
    "name": " *设备状态",
    "id": "equipmentStatus",
    col: true,
    type: 'dictSelector',
    data: 'InternetOfThingsEquipment_EquipmentStatus',
    sort: true
},
{
    "name": "在线状态",
    "id": "onlineStatus",
    type: 'dictSelector',
    data: 'InternetOfThingsEquipment_OnlineStatus'
},
{
    "name": "*位置坐标",
    "id": "positionCoordinates"
},
{
    "name": "二维码",
    "id": "QRCode"
},
{
    "name": "*设备图片",
    "id": "equipmentPictures"
},
{
    "name": "数据来源",
    "id": "dataSources"
},
{
    "name": "备注",
    "id": "remarks"
}
]

const ObjectTypeId = 'MANG_EmergenciesInternetOfThingsEquipment'
const name = '物联网设备'

buildForm(wlw, ObjectTypeId, name)
buildTable(wlw, ObjectTypeId, name)
buildSimpleSearch(wlw, ObjectTypeId, name)
buildAdvanceSearch(wlw, ObjectTypeId, name)
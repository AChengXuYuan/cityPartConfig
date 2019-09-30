const jcsb = [{
    id: "code",
    name: "监测设备编号",
    col: true,
    sort: true,
    ss: true,
},
{
    id: "installation_location",
    name: "安装位置",
    col: true,
    ss: true,
},
{
    id: "business_class_name",
    name: "业务大类名称"
},
{
    id: "monitoring_object_type",
    name: "监测对象类型",
    col: true,
},
{
    id: "monitoring_object",
    name: "监测对象",
    col: true,
    ss: true,
},
{
    id: "Road",
    name: "所在道路",
    col: true,
    as: true,
    type: 'dictSelector',
    data: 'InternetOfThingsEquipment_Road'
},
{
    id: "pole_or_box_or_gallery_or_ditch_or_well",
    name: "所在杆/箱/廊/沟/井",
    col: true,
},
{
    id: "item",
    name: "检测指标代码",
    col: true,
},
{
    id: "item_name",
    name: "监测指标中文名称"
},
{
    id: "item_value",
    name: "检测值",
    col: true,
},
{
    id: "time",
    name: "时间",
    col: true,
    type: 'date'
},
{
    id: "state",
    name: "状态",
    col: true,
},
{
    id: "level",
    name: "报警等级号"
},
{
    id: "level_name",
    name: "报警等级",
    col: true,
}
]

const ObjectTypeId = 'MANG_CityComponent'
const name = '监测报警'

buildForm(jcsb, ObjectTypeId, name)
buildTable(jcsb, ObjectTypeId, name)
buildSimpleSearch(jcsb, ObjectTypeId, name)
buildAdvanceSearch(jcsb, ObjectTypeId, name)

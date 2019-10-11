
const jsgx = [
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

    {"name": "流向", "id": "flow", col: true},
    {"name": "供水性质", "id": "natureOfTheWater", col: true},
    {"name": "通水日期", "id": "waterDate", col: true, type: 'date'},

    {"name": "备注", "id": "remark"},
]

buildForm(jsgx, 'UPNetwork_JS_Tubulation', '给水管线')
buildTable(jsgx, 'UPNetwork_JS_Tubulation', '给水管线')
buildSimpleSearch(jsgx, 'UPNetwork_JS_Tubulation', '给水管线')
buildAdvanceSearch(jsgx, 'UPNetwork_JS_Tubulation', '给水管线')


function getFormItems({ name, id, type = 'nomal', data, disabled = false }) {
    const options = name === '备注' ?
    {
        "labelCol": {
            "span": 4
        },
        "wrapperCol": {
            "span": 20
        }
    } : {
        "labelCol": {
            "span": 8
        },
        "wrapperCol": {
            "span": 16
        }
    }
    const nameInfo = name.split('*')
    const rName = nameInfo[1] || name
    const required = nameInfo.length > 1
    const getWiget = (type, data) => {
        let result = {}
        switch(type) {
            case 'dictSelector':
                    result = {
                        "component": "DictSelector",
                        "componentProps": {
                            "dictName": data
                        },
                    }
                    break
            case 'dictRadio':
                    result = {
                        "component": "DictRadio",
                        "componentProps": {
                            "dictName": data
                        },
                    }
                    break;
            case 'date':
                    result = {
                        "component": "datePicker",
                        "componentProps": {},
                        "dataType": "date",
                    }
                    break
            default:
                result = {
                    "component": 'input',
                    "componentProps": {},
                }
                break
            
        }
        return result
    }
    return {
        "id": id,
        "name": id,
        "displayName": rName,
        "required": required,
        "formItemOptions": options,
        "disabled": disabled,
        "visible": true,
        ...getWiget(type, data),
    }
}

function buildForm(fields, objectypeId, objectName) {
    const formItems = fields.map(item =>  getFormItems(item))
    const formLayout = fields.reduce((pre, item, index) => {
        const { id } = item
        if (index === fields.length - 1) {
            pre.push({})
            pre[pre.length - 1][id] = { "span": 24 }
            return pre
        }
        const yu = index % 2
        yu === 0 && pre.push({})
        pre[pre.length - 1][id] = { "span": 12 }
        return pre
    }, [])
    const json = {
        "name": `${objectypeId}_from`,
        "property_set_type_id": `${objectName}表单view`,
        "is_base": 1,
        "properties": {
            "formItems": formItems,
            "formLayout": formLayout
        },
        "create_date_time": new Date().getTime(),
        "update_date_time": new Date().getTime()
    }
    console.log('*************form*********', JSON.stringify(json))
}


function buildTable(fields, objectypeId, objectName) {
    const properties = fields.reduce((pre, item) => {
        const { name, id, sort, type, data, col } = item
        if (col) {
            let props = {}
            if (type) {
                console.log(name + '    ' + type.toLowerCase().indexOf('dict'))
                props.convert = {
                    type: type.toLowerCase().indexOf('dict') > -1 ? 'dict' : type,
                    data: data
                }
            }
            const nameInfo = name.split('*')
            const rName = nameInfo[1] || name
            pre.push({
                "name": id,
                "alias": rName,
                "sort": sort ? true : false,
                ...props
            })
        }
        return pre
    }, [])
    const json = {
        "name": `${objectypeId}_table`,
        "property_set_type_id": `${objectName}表格展示view`,
        "is_base": 1,
        "properties": properties || [],
        "create_date_time": new Date().getTime(),
        "update_date_time": new Date().getTime()
    }
    console.log('*************table*********', JSON.stringify(json))
}

function buildSimpleSearch(fields, objectypeId, objectName) {
    const properties = fields.reduce((pre, item) => {
        const { name, id, ss } = item
        const nameInfo = name.split('*')
        const rName = nameInfo[1] || name
        if (ss) {
            pre.push({
                "name": id,
                "alias": rName,
                "type": "SimilarFilteringItem"
            })
        }
        return pre
    }, [])
    const json = {
        "name": `${objectypeId}_sampleSearch`,
        "property_set_type_id": `${objectName}简单查询view`,
        "is_base": 1,
        "properties": properties,
        "create_date_time": new Date().getTime(),
        "update_date_time": new Date().getTime()
    }
    console.log('*************simpleSearch*********', JSON.stringify(json))
}

function buildAdvanceSearch(fields, objectypeId, objectName) {
    const properties = fields.reduce((pre, item) => {
        const { name, id, as, type, data } = item
        const nameInfo = name.split('*')
        const rName = nameInfo[1] || name
        if (as && type) {
            if (type === 'date') {
                pre.push({
                    "name": id,
                    "alias": rName,
                    "type": "period",
                    "convertValue": [
                        { "name": "近一月", "value": [1, "m"], "type": "before_now" },
                        { "name": "近三月", "value": [3, "m"], "type": "before_now" },
                        { "name": "近半年", "value": [6, "m"], "type": "before_now" },
                        { "name": "近一年", "value": [1, "y"], "type": "before_now" }
                    ]
                })
            } else if(type.toLowerCase().indexOf('dict') > -1) {
                pre.push({
                    "name": id,
                    "alias": rName,
                    "type": "dict",
                    "convertValue": data
                })
            }
        }
        return pre
    }, [])
    const json = {
        "name": `${objectypeId}_advanceSearch`,
        "property_set_type_id": `${objectName}高级查询view`,
        "is_base": 1,
        "properties": properties,
        "create_date_time": new Date().getTime(),
        "update_date_time": new Date().getTime()
    }
    console.log('*************acvanceSearch*********', JSON.stringify(json))
}


fields, 'UPNetwork_JS_SB_Point', '给水表'
const fields = [
    {"name": "*管道编号", "id": "pipeId", ss: true, col: true, sort: true },
    {"name": "*管点编号", "id": "pipeCode", col: true},
    {"name": "*管网类型", "id": "pipeNetworkType"},
    {"name": "*管点类型", "id": "tubeType"},
    {"name": "*标准代码", "id": "standardCode"},
    {"name": "*所在道路", "id": "roadName"},
    {"name": "位置", "id": "location"},
    {"name": "所属服务区", "id": "belongsToTheServiceArea"},
    {"name": "地面高程", "id": "groundElevation"},
    {"name": "埋深", "id": "buriedDepth"},
    {"name": "维护次数", "id": "maintainTheNumberOf"},
    {"name": "当前状态", "id": "currentState"},
    {"name": "*埋没日期", "id": "ownershipUnit", type: 'date', ss: true, as: true, col: true},
    {"name": "*使用年限", "id": "contacter"},
    {"name": "*权属单位", "id": "unitConnectionWay", type: 'dictSelector', data: 'UPNetwork_ownershipUnits', ss: true, as: true, col: true},
    {"name": "单位联系人", "id": "partition"},
    {"name": "单位联系方式", "id": "numberOfMaintenance"},
    {"name": "施工单位", "id": "constructionUnit"},
    {"name": "设计单位", "id": "designUnits"},
    {"name": "*是否监测", "id": "whetherMonitoring"},
    {"name": "坐标", "id": "position"},
    {"name": "备注", "id": "remark"}
]

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
                        "component": "DictRadio",
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
        "component": "input",
        "componentProps": {},
        "formItemOptions": options,
        "disabled": disabled,
        "visible": true
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
        "name": `${objectypeId}_sampleSearch`,
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
        if (as) {
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
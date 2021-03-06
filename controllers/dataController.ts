import {makeArr, Makedata, trueFalse} from './commonFunction';
import {SysDetail, SysWriteData} from "../model/commonClass";

/**
 *desc: 数据核心模块，目前暂未开发，数据均为静态数据，无法进行交互
 *author: Marvin
 *@dataController：管理员登录的处理路由
 *@'/': 测试路由
 *@'/api/login': 管理员的登录处理路由
 *@'/api/register': 管理员的注册处理路由
 *@'/api/regnumber': 验证码处理
 *@'/api/user': 用户详情
 *@'/api/editpass': 修改用户密码
 * @'/api/edituser'： 修改用户信息
 */
const mongoose = require('mongoose');

export function dataController(app) {
    /*在线人数信息*/
    const linenumdatas = [
        {
            name: '总数',
            xAyisIndex: 1,
            type: 'line',
            data: [200, 120, 236, 350, 220, 250]
        },
        {
            name: '儿童',
            type: 'bar',
            data: [58, 60, 105, 250, 360, 200]
        },
        {
            name: '青年',
            type: 'bar',
            data: [88, 20, 215, 150, 260, 100]
        },
        {
            name: '中年',
            type: 'bar',
            data: [158, 160, 15, 20, 160, 150]
        },
        {
            name: '老年',
            type: 'bar',
            data: [258, 110, 150, 280, 160, 50]
        },
    ]
    /*系统信息指标*/
    const sysData = Makedata(5);
    /*系统警告*/
    const systemToke = [
        {
            id: 5,
            time: 2017,
            degree: 5,
            cure: '是',
            desc: 'A1！',
        },
        {
            id: 2,
            time: 2016,
            degree: 7,
            cure: '否',
            desc: 'A1！',
        },
        {
            id: 1,
            time: 2015,
            degree: 7,
            cure: '否',
            desc: 'A1！',
        }
    ];
    /*系统的详细信息*/
    const systemdatil: SysDetail[] = [
        new SysDetail(5, 2017, 5, 'A1', true, 'marvin', 'xxx', '我也不知道啥原因', '没查出原因来'),
        new SysDetail(2, 2016, 7, 'A1', true, 'marvin', 'xxx', '你问我我哪儿知道', '没啥意见'),
        new SysDetail(1, 2015, 7, 'A1', true, 'marvin', 'xxx', '不知道', '不知道'),
    ];
    /*系统解析文件配*/
    const sysaccount: SysWriteData[] = [
        new SysWriteData('东北', 20, 102, false, 0.2, 0.4, 0.9, 'xxxxxxxxxxxxxxxxxxxxxx'),
        new SysWriteData('华北', 32, 402, true, 0.4, 0.58, 0.8, 'xxxxxxxxxxxxxxxxxxxxxx'),
        new SysWriteData('西北', 46, 982, true, 0.45, 0.47, 0.5, 'xxxxxxxxxxxxxxxxxxxxxx'),
        new SysWriteData('西南', 54, 412, false, 0.89, 0.59, 0.4, 'xxxxxxxxxxxxxxxxxxxxxx'),
        new SysWriteData('华南', 66, 582, true, 0.45, 0.36, 0.2, 'xxxxxxxxxxxxxxxxxxxxxx'),
        new SysWriteData('华中', 10, 252, false, 0.14, 0.7, 0.1, 'xxxxxxxxxxxxxxxxxxxxxx'),
        new SysWriteData('华东', 2780, 402, true, 0.258, 0.99, 0.4, 'xxxxxxxxxxxxxxxxxxxxxx'),
    ]
    /*系统的分布的具体信息的配置文件*/
    const dataSafeMap = [
        {
            media: [
                {name: '北京', value: 11},
                {name: '天津', value: 11},
                {name: '上海', value: 11},
                {name: '重庆', value: 11},
                {name: '河北', value: 11},
                {name: '河南', value: 11},
                {name: '云南', value: 11},
                {name: '辽宁', value: 11},
                {name: '黑龙江', value: 44},
                {name: '湖南', value: 47},
                {name: '安徽', value: 47},
                {name: '山东', value: 47},
                {name: '新疆', value: 47},
                {name: '江苏', value: 47},
                {name: '浙江', value: 47},
                {name: '江西', value: 47},
                {name: '湖北', value: 47},
                {name: '广西', value: 47},
                {name: '甘肃', value: 47},
                {name: '山西', value: 47},
                {name: '内蒙古', value: 21},
                {name: '陕西', value: 32},
                {name: '吉林', value: 32},
                {name: '福建', value: 32},
                {name: '贵州', value: 32},
                {name: '广东', value: 32},
                {name: '青海', value: 32},
                {name: '西藏', value: 32},
                {name: '四川', value: 32},
                {name: '宁夏', value: 32},
                {name: '海南', value: 32},
                {name: '台湾', value: 32},
                {name: '香港', value: 32},
                {name: '澳门', value: 87}
            ],
            memory: [

                {name: '北京', value: 78},
                {name: '天津', value: 78},
                {name: '上海', value: 78},
                {name: '广东', value: 78},
                {name: '台湾', value: 78},
                {name: '香港', value: 78},
                {name: '澳门', value: 36}
            ],
            service: [
                {name: '北京', value: 47},
                {name: '天津', value: 47},
                {name: '上海', value: 47},
                {name: '重庆', value: 47},
                {name: '河北', value: 47},
                {name: '安徽', value: 47},
                {name: '新疆', value: 47},
                {name: '浙江', value: 47},
                {name: '江西', value: 21},
                {name: '山西', value: 21},
                {name: '内蒙古', value: 30},
                {name: '吉林', value: 41},
                {name: '福建', value: 41},
                {name: '广东', value: 41},
                {name: '西藏', value: 41},
                {name: '四川', value: 41},
                {name: '宁夏', value: 41},
                {name: '香港', value: 39},
                {name: '澳门', value: 39}
            ]
        },
        {
            pie: [
                {value: 355, name: '负载均衡'},
                {value: 200, name: '关系型数据库'},
                {value: 310, name: '对象存储'},
                {value: 235, name: '云磁盘'},
                {value: 200, name: '内容分发'},
                {value: 200, name: '应用引擎'}
            ]
        }
    ];
    /*系统的开发的参数配置文件*/
    const sysOption = [
        {
            code: '**sdff555',
            lineTime: '2018-07-02',
            develodTeam: 'Zero',
            evenind: 'Marvin',
            director: 'Marvin',
            status: '良好',
            loophole: '暂无',
            bugTime: '10min'
        }
    ]
    const zoomData = {time: new Date(), data: makeArr()}
    /*用来发送系统夫人具体的参数的函数*/
    app.get('/api/data', (req, res) => {
        res.json(sysData);
    });
    /*用来发送在线人数*/
    app.get('/api/linenumber', (req, res) => {
        // noinspection JSIgnoredPromiseFromCall
        res.json(linenumdatas);
    })
    /*用来发送所有的系统警告的消息*/
    app.get('/api/sysmessage', (req, res) => {

        res.send(systemToke);
    })
    /*根据具体的id来查找对应的系统警告的消息*/
    app.get('/api/sysmessage/:id', (req, res) => {
        // console.log(req.params.id);
        // res.send('666666');
        res.json(systemdatil.find((systemdatil) => systemdatil.id == req.params.id));
    });
    /*用来模拟用户是否对消息进行标记成功*/
    app.get('/api/sysmeswrite/:id', (req, res) => {
        //console.log(req.params.id);
        res.send(trueFalse());
    });
    /*用来发送系统的地图部分的数据*/
    app.get('/api/sysdatamap', (req, res) => {
        res.json(dataSafeMap)
    });
    /*发送数据分布部分的系统开发信息*/
    app.get('/api/sysdevelope', (req, res) => {
        res.json(sysOption)
    });
    /*发送数据分析页面的数据*/
    app.get('/api/syszoomdata', (req, res) => {
        res.json(zoomData)
    });
    app.get('/api/accountdata', (req, res) => {
        if (req.query.area) {
            // console.log(req.query.area);
            res.json(sysaccount.find((sysaccount) => sysaccount.area == req.query.area));
        } else {
            console.log('ddd');
        }
    });
}
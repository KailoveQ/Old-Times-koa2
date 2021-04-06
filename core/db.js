const Sequelize = require('sequelize')

const {
  dbName,
  host,
  port,
  user,
  password
} = require('../config/config').database

const sequelize = new Sequelize(dbName,user,password,{
  dialect:'mysql', //指定数据库类型
  host,
  port,
  logging:true,     // 显示数据库永远是的信息
  timezone:'+08:00',  // 时区
  define:{          // 配置个性化参数！！
    //create_time update_time delete_time 最好都存在
    timestamps:true,
    paranoid:true,
    createdAt:'created_at',
    updatedAt:'updated_at', //改变名字
    deletedAt:'deleted_at',
    underscored:true,       //驼峰转换为 下划线


  }
})

sequelize.sync({
  force:false // 这里慎重啊！！！ 不要 true
  })

module.exports={
  sequelize
}
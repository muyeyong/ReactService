/*
能操作products集合数据的Model
 */
// 1.引入mongoose
const mongoose = require('mongoose')

// 2.字义Schema(描述文档结构)
const productSchema = new mongoose.Schema({
  woId: { type: String, required: true }, // 所属分类的id
  userId: { type: String, required: true },
  createDate: { type: Number, required: true },
  deadline: { type: Number, required: true },
  parentId: { type: String, required: true }, // 所属分类的id
  selfId: { type: String, required: true },
  serviceName: { type: String, required: true },
  cost: { type: Number, required: true }, // 价格 
  address: { type: String, required: true },
  status: { type: Number, default: 0 }, // 商品状态: 0:等待接收 1：订单派送中 3：拒接  3: 订单派送中  4：订单进行中   5 or 6：订单完成(不能操作)
  imgs: { type: Array, default: [] }, // n个图片文件名的json字符串
  detail: { type: String },
  serviceStaffId: { type: String, default: '' }
})


// 3. 定义Model(与集合对应, 可以操作集合)
const ProductModel = mongoose.model('products', productSchema)

// 4. 向外暴露Model
module.exports = ProductModel
const Router = require('koa-router')
const {Flow} = require('../../models/flow')
const router = new Router({
  prefix:'/v1/classic'
})

const {PositiveIntegerValidator} = require('../../validators/validator')
const {Auth} = require('../../../middlewares/auth')

router.get('/latest',new Auth(1).m,async (ctx,next)=>{

  const flow = await Flow.findOne({
    order: [
      ['index', 'DESC']
    ]
  })
  // const art = await Art.getData(flow.art_id, flow.type)
  // const i = art.get('image')
  // const t = art.image
  // const s = art.getDataValue('image')
  // const likeLatest = await Favor.userLikeIt(
  //   flow.art_id, flow.type, ctx.auth.uid)
  // art.setDataValue('index', flow.index)
  // art.setDataValue('like_status', likeLatest)
  ctx.body = flow

})

module.exports = router
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import {mock, Random} from 'mockjs'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(
    mock({
      // 属性 list 的值是一个数组，其中含有 1 到 10 个元素, 数组长度是1-10之间的一个随机数
      'list|1-10': [{
        'name|1': [Random.cname(), Random.cname(), Random.cname()],
        // 意思是： 1. key值是name，从数组中选出一项，而random数组一共长度为2，从一个长度为2的随机数组中选出一项来作为name的value
        birthday: Random.date('yyyy-mm-dd'),
        address: Random.county(true),
      }]
  })
  // 使用mockjs来生成随机数据，作为模拟api返回的数据
  )
}

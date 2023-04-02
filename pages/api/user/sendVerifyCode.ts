import { NextApiRequest, NextApiResponse } from 'next';
import {format} from 'date-fns';
import md5 from 'md5';
import { encode } from 'js-base64';
import request from 'service/fetch';

export default async function sendVerifyCode (req: NextApiRequest, res: NextApiResponse) {
  const {to = '', templateId = '1'} = req.body;
  const appId = '';
  const AccountId = '';
  // 从第三方收发库里获取
  const AuthToken = '';
  const NowDate = format(new Date(), 'yyyyMMddHHmmss');
  const SigParameter = md5(`${AccountId}${AuthToken}${NowDate}`);
  const Authorization = encode(`${AccountId}:${NowDate}`);
  const verifyCode = Math.floor(Math.random() * (9999-1000)) + 1000;
  const expireMin = '5';
  const url = `https://app.cloopen.com:8883/2013-12-26/Accounts/${AccountId}/SMS/TemplateSMS?sig=${SigParameter}`

  const response = await request.post(url, {
    to,
    templateId,
    appId,
    datas: {
      verifyCode,
      expireMin,
    }
  }, {
    headers: {
      Authorization
    }
  })

  console.log(response);

  res.status(200).json({
    code: 0,
    data: '123'
  })
}
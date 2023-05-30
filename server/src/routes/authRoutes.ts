import express from 'express'

import { loginUser, logoutUser, verifyToken } from '../controllers/authController'

const router = express.Router()



router.post('/login', loginUser)
router.get('/verify-token', verifyToken )
router.post('/logout',logoutUser )


// router.post('/token', (req:MyRequest, res:MyResponse)=>{
//   const refreshToken = req.body.token
//   if(refreshToken ===null) return res.sendStatus(401)
//   if(!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
//   const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;
//
//   if (!refreshTokenSecret) {
//     throw new Error('ACCESS_TOKEN_SECRET is not defined');
//   }
//   const secret: Secret = refreshTokenSecret;
//   jwt.verify(refreshToken, secret, (err:any, user:any)=>{
//     if(err) return res.sendStatus(403)
//
//     const userObject:object={
//
//       "_id": user._id,
//       "slug": user.slug,
//       "firstName": user.firstName,
//       "lastName": user.lastName,
//       "email": user.email,
//       "userName": user.userName,
//       "password": user.password,
//       "birthDate": user.birthDate,
//       "mobileNumber": user.mobileNumber,
//       "city": user.city,
//       "updatedAt": user.updatedAt,
//       "createdAt": user.createdAt,
//       "accountType": user.accountType,
//       "activeProfile": user.activeProfile,
//       "contracts": user.contracts,
//       "profile": user.profile,
//       "__v": user.__v
//     }
//
//     const accessToken = generateAccessToken(userObject )
//     res.json({accessToken: accessToken})
//   })
// })

export default router
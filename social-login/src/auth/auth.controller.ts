import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { getUser } from 'src/common/decorator/auth.user.decorator';
import { Response, Request } from 'express';

@Controller('auth')
export class AuthController {
  //*     GOOGLE      */
  // @Get('google')
  // @UseGuards(AuthGuard('google'))
  // async googleAuth() {
  //   //
  // }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthCallback(@Req() req: Request, @getUser() google) {
    console.log(typeof google);
    return google;
  }

  //*     NAVER     */
  // @Get('naver')
  // @UseGuards(AuthGuard('naver'))
  // async naverAuth() {
  //   //
  // }

  @Get('naver/callback')
  @UseGuards(AuthGuard('naver'))
  async naverAuthCallback(@getUser() naver) {
    return naver;
  }

  //*     KAKAO     */

  @Get('kakao/callback')
  @UseGuards(AuthGuard('kakao'))
  async kakaoAuthCallback(
    @getUser() kakao,
    @Res() res: Response,
    @Req() req: Request,
  ) {
    res.setHeader('authorization', 'asdfjasdhy3jbdkjsafh8hxcv');

    return res.send('asdf');
  }

  @Get()
  async kakaotest() {
    return '모징';
  }
}

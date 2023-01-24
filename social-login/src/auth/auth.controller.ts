import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { getUser } from 'src/common/decorator/auth.user.decorator';

@Controller('auth')
export class AuthController {
  //*     GOOGLE      */
  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {
    //
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthCallback(@getUser() google) {
    return google;
  }

  //*     NAVER     */
  @Get('naver')
  @UseGuards(AuthGuard('naver'))
  async naverAuth() {
    //
  }

  @Get('naver/callback')
  @UseGuards(AuthGuard('naver'))
  async naverAuthCallback(@getUser() naver) {
    return naver;
  }

  //*     KAKAO     */
  @Get('kakao')
  @UseGuards(AuthGuard('kakao'))
  async kakaoAuth() {
    //
  }

  @Get('kakao/callback')
  @UseGuards(AuthGuard('kakao'))
  async kakaoAuthCallback(@getUser() kakao) {
    return kakao;
  }
}

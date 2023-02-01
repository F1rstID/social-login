import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-kakao';
export class KakaoStrategy extends PassportStrategy(Strategy, 'kakao') {
  constructor() {
    super({
      clientID: process.env.KAKAO_CLIENT_ID,
      clientSecret: process.env.KAKAO_CLIENT_SECRET,
      callbackURL: process.env.KAKAO_CALLBACK_URI,
      scope: ['account_email', 'profile_nickname', 'profile_image'],
    });
  }

  validate(accessToken: string, refreshToken: string, profile: Profile, done) {
    console.log(profile._json);
    return done(null, {
      id: profile.id,
      provider: profile.provider,
      email: profile._json.kakao_account.email,
      nickname: profile._json.kakao_account.profile.nickname,
    });
  }
}

import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-naver';

export class NaverStrategy extends PassportStrategy(Strategy, 'naver') {
  constructor() {
    super({
      clientID: process.env.NAVER_CLIENT_ID,
      clientSecret: process.env.NAVER_CLIENT_SECRET,
      callbackURL: process.env.NAVER_CALLBACK_URI,
    });
  }

  validate(accessToken: string, refreshToken: string, profile: Profile) {
    const profileImage = profile._json.profile_image
      ? profile._json.profile_image
      : process.env.DEFUALT_IMG_URL;

    console.log(profileImage);
    return {
      name: profile.displayName,
      email: profile._json.email,
      id: profile.id,
    };
  }
}

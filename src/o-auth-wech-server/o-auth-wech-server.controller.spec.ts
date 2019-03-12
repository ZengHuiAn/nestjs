import { Test, TestingModule } from '@nestjs/testing';
import { OAuthWechServerController } from './o-auth-wech-server.controller';

describe('OAuthWechServer Controller', () => {
  let controller: OAuthWechServerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OAuthWechServerController],
    }).compile();

    controller = module.get<OAuthWechServerController>(OAuthWechServerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

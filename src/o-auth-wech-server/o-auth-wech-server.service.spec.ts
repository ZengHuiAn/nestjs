import { Test, TestingModule } from '@nestjs/testing';
import { OAuthWechServerService } from './o-auth-wech-server.service';

describe('OAuthWechServerService', () => {
  let service: OAuthWechServerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OAuthWechServerService],
    }).compile();

    service = module.get<OAuthWechServerService>(OAuthWechServerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

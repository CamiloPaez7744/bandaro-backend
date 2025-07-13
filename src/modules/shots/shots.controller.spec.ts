import { Test, TestingModule } from '@nestjs/testing';
import { ShotsController } from './shots.controller';

describe('ShotsController', () => {
  let controller: ShotsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShotsController],
    }).compile();

    controller = module.get<ShotsController>(ShotsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

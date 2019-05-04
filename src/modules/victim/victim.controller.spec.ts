import { Test, TestingModule } from '@nestjs/testing';
import { VictimController } from './victim.controller';

describe('Victim Controller', () => {
  let controller: VictimController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VictimController],
    }).compile();

    controller = module.get<VictimController>(VictimController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

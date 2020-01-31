import { Test, TestingModule } from '@nestjs/testing';
import { SubModController } from './submod.controller';
import { SubModService } from './submod.service';
import { ReadSubModDTO } from './dto/read-submod.dto';

/**
 * Controller specs for controller unit test
 */
describe('SubModController', () => {
  let subModController: SubModController;

  beforeEach(async () => {
    const SubMod: TestingModule = await Test.createTestingModule({
      controllers: [SubModController],
      providers: [SubModService],
    }).compile();

    subModController = SubMod.get<SubModController>(SubModController);
  });

  describe('root', () => {
    it('should return object is instance of "ReadSubModDTO!"', () => {
      const readSubModDTO = subModController.getSubMod();
      expect(readSubModDTO).toBeInstanceOf(ReadSubModDTO);
    });
  });
});

import { createTest, destroyVM } from '../util';
import Apple from 'packages/apple';

describe('Apple', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Apple, true);
    expect(vm.$el).to.exist;
  });
});


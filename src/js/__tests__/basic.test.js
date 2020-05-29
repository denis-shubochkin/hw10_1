
import GameSavingLoader from '../GameSavingLoader';

test('successful object',
  (done) => {
    let gl = new GameSavingLoader();
    const exp = {
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1, name: 'Hitman', level: 10, points: 2000,
      },
    };
    gl.load().then((saving) => {
      gl = saving;
      expect(gl).toEqual(exp);
      done();
    }).catch((error) => {
      console.log(`в функции load ошибка ${error}`);
    });
  });

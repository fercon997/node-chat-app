var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('../utils/message');

describe('generateMessage', ()=> {

  it('Should create message', () => {
    var from = 'Lava';
    var text = "QLQ lacrita";
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({
      from,
      text
    })
  });

});

describe('generateLocationMessage', () => {

  it('Should generate correct location object', () => {
    var from = 'Deb';
    var latitude = 15;
    var longitude = 19;
    var url = 'https://www.google.com/maps?q=15,19';
    var message = generateLocationMessage(from, latitude, longitude);
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({
      from,
      url
    })
  });
});

var expect = require('expect');

var {generateMessage} = require('../utils/message');

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

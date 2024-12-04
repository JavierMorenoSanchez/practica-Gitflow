// test/app.test.js
import { assert } from 'chai';   // Usamos import en lugar de require
import sinon from 'sinon';        // También usamos import para sinon
import greet from '../src/modules/greeting.js';
import sayGoodbye from '../src/modules/farewell.js';

describe('Pruebas para app.js', () => {
  
  it('debería saludar correctamente al usuario', () => {
    const consoleSpy = sinon.spy(console, 'log');
    const userName = 'Javi';
    greet(userName);
    assert.isTrue(consoleSpy.calledWith(`¡Hola, ${userName}!`));
    consoleSpy.restore();
  });

  it('debería despedirse correctamente del usuario', () => {
    const consoleSpy = sinon.spy(console, 'log');
    const userName = 'Javi';
    sayGoodbye(userName);
    assert.isTrue(consoleSpy.calledWith(`¡Adiós, ${userName}!`));
    consoleSpy.restore();
  });
});
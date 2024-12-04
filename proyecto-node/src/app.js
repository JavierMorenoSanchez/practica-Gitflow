// src/app.js
import greet from './modules/greeting.js';
import sayGoodbye from './modules/farewell.js';

const userName = 'Javi';

greet(userName);      // Llama a la función greet del módulo greeting.js
sayGoodbye(userName);  // Llama a la función sayGoodbye del módulo farewell.js
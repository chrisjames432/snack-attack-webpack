import { game } from './js/game.js';
import './maincss.css'


$(function () {


   game.init();
   game.animate();
   window.game = game;

   

});
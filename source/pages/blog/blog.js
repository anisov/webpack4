import createMenu from '../../components/menu/menu';
import './blog.scss';
import 'normalize.css';
var menu = createMenu(['Главная','Блог'], 'menu');
document.body.appendChild(menu);
console.log('in blog.js');
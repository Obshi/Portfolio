import $ from 'jquery';
import MainGraphic from './graphic/MainGraphic.js';
import PlofileGraphic from './graphic/PlofileGraphic.js';
import StyleController from './StyleController.js';

window.$ = $;
class App {

    constructor() {
        this.init();
        this.activePage = 0;
    }

    init() {
        this.mainGraphic = new MainGraphic();
        this.styleController = new StyleController();
        $('.button_container').click(this.onMenuButtonClick.bind(this));
    }

    onMenuButtonClick(event) {
        switch ($(event.target).attr('id')) {
            case 'plofile_button':
                this.activePage = 0;
                break;
            case 'pictures_button':
                this.activePage = 1;
                break;
            case 'movies_button':
                this.activePage = 2;
                break;
            case 'softwares_button':
                this.activePage = 3;
                break
            default:
                this.activePage = -1;
        }
        console.log($(event.target).attr('id'));
        if (this.activePage != -1) {
            console.log(this.activePage);

            this.styleController.ChangeActiveButton($(event.target));
            this.styleController.ChangePage(this.activePage);
        }
    }



}

$(document).ready(() => new App());
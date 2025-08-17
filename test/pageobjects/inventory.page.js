import { $ } from '@wdio/globals';
import Page from './page.js';

class InventoryPage extends Page {
    // Селектори
    get cartButton() {
        return $('.shopping_cart_link');
    }

    get burgerMenu() {
        return $('#react-burger-menu-btn');
    }

    get logoutButton() {
        return $('#logout_sidebar_link');
    }

    // Метод додати продукт в корзину за назвою
    addProductToCart(productName) {
        return $(`//div[text()='${productName}']/../..//button`).click();
    }

    // Відкрити меню
    openMenu() {
        return this.burgerMenu.click();
    }

    // Вийти з акаунту
    logout() {
        return this.logoutButton.click();
    }

    open() {
        return super.open('/inventory.html');
    }
}

export default new InventoryPage();
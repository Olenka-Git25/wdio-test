describe('Checkout tests', () => {
    it('should complete checkout with valid data', async () => {
        await browser.url('https://www.saucedemo.com/');

        // Логін
        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('secret_sauce');
        await $('#login-button').click();

        // Додати перший товар у корзину
        const addToCartButton = await $('button[id^="add-to-cart"]');
        await addToCartButton.waitForExist({ timeout: 5000 });
        await addToCartButton.click();

        // Відкрити корзину
        await $('.shopping_cart_link').click();

        // Почати Checkout
        await $('#checkout').click();

        // Заповнити дані
        await $('#first-name').setValue('Olena');
        await $('#last-name').setValue('Kulenko');
        await $('#postal-code').setValue('12345');
        await $('#continue').click();

        // Завершити Checkout
        await $('#finish').click();

        // Перевірка
        const thankYouMessage = await $('.complete-header');
        await expect(thankYouMessage).toBeDisplayed();

        // Повернутись на головну
        await $('#back-to-products').click();
        await expect($('.inventory_list')).toBeDisplayed();
    });
});
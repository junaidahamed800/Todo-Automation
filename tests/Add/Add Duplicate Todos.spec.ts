// Open the site, add a todo, then add another todo with the exact same text. 
// Verify both entries appear separately and are included in the counter.

import {test,expect} from '@playwright/test'

test('Login & Verify toDos',async ({page})=>{

    await page.goto("https://todomvc.com/examples/typescript-react/#/")

    const pageHeading = page.getByRole('heading', { name: 'todos' })
    const enterTodo = page.getByRole('textbox', { name: 'What needs to be done?' })
    const todoItems = page.locator('.todo-list li')
    const todoCount = page.locator('.todo-count')
    const gotoAll = page.getByRole('link', { name: 'All' })
    const deleteTodo = page.getByRole('button', { name: '×' })

    // page level verifications
    await expect(page).toHaveTitle(/TodoMVC/)
    await expect(pageHeading).toHaveText("todos")

    // Verify Empty todos, if its not empty clear all make them empty
    await expect(todoItems).toHaveCount(0)
    // await deleteTodo.click() condition based statement

    // press enter in the input field and verify that no todo is added
    await enterTodo.press("Enter")
    await expect(todoItems).toHaveCount(0)

    // Add 4 todo's & Verify all of them
    await enterTodo.fill("Go To Walk")
    await enterTodo.press("Enter")
    // await expect(todoItems).toHaveText("Go To Walk")
    await enterTodo.fill("Go To Walk")
    await enterTodo.press("Enter")

    // verify the todo count
    await expect(page).toHaveURL("https://todomvc.com/examples/typescript-react/#/")
    await expect(todoCount).toHaveText(/2 items/)


    // buffer the item count and verify it with the todos added that were added.


})
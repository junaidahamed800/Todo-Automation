// Open the site with an empty list. Leave the input blank and press Enter; verify that no todo is added. 
// Then add four distinct todos one at a time; verify all four appear and the counter says **4 items left**.

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
    await enterTodo.fill("Take a Bath")
    await enterTodo.press("Enter")
    // await expect(todoItems).toHaveText("Take a Bath")
    await enterTodo.fill("Sleep Early")
    await enterTodo.press("Enter")
    // await expect(todoItems).toHaveText("Sleep Early")
    await enterTodo.fill("Watch a Movie")
    await enterTodo.press("Enter")
    // await expect(todoItems).toHaveText("Watch a Movie")
    await expect(todoItems).toHaveCount(4)
    // verify the todo count
    await expect(page).toHaveURL("https://todomvc.com/examples/typescript-react/#/")
    await expect(todoCount).toHaveText(/4 items/)


})
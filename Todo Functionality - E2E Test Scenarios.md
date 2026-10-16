# TodoMVC — End-to-End Test Scenarios

Application: https://todomvc.com/examples/typescript-react/#/

## Add

1. Open the site, submit an empty input, then add four distinct todos one at a time. Verify all four appear and the counter says **4 items left**.
2. Open the site, add a todo, then add another todo with the exact same text. Verify both entries appear separately and are included in the counter.

## Edit

3. Open the site, add a todo, double-click its text, replace the text, and press Enter. Verify the updated text appears and the counter is unchanged.
4. Open the site, add a todo, double-click its text, change the text, and press Escape. Verify the edit is canceled and the original text remains.
5. Open the site, add a todo, double-click its text, clear the edit field, and press Enter. Verify the todo is removed and the counter decreases.

## Complete / Toggle all

6. Open the site, add multiple todos, complete one, and then uncomplete it. Verify its completed state changes each time and the active-item counter updates accordingly.
7. Open the site, add several active todos, select **Mark all as complete**, and then select it again. Verify all todos are completed after the first selection and active after the second.
8. Open the site, add a todo and complete it, open the **Completed** filter, and uncheck the todo. Verify it leaves the Completed view and is counted as active.

## Delete / Clear completed

9. Open the site, add multiple todos, and delete one using its **×** control. Verify only that todo is removed; then delete the remaining todos and verify the empty-list state.
10. Open the site, add active and completed todos, and select **Clear completed**. Verify completed todos are removed and active todos remain; clear all completed todos and verify the button is no longer shown.

## Filters and routing

11. Open the site, add both active and completed todos, and visit **All**, **Active**, and **Completed**. Verify each filter displays the appropriate todos and the URL hash changes to `#/`, `#/active`, or `#/completed`.
12. Open the site, add active and completed todos, navigate between filters, and use browser Back and Forward. Verify the URL hash and displayed todos follow the navigation history.
13. Open the site directly at `https://todomvc.com/examples/typescript-react/#/completed`. Verify the Completed filter is selected and only completed todos are displayed.

## Counter

14. Open the site, add two todos, and complete one. Verify the counter shows **1 item left**; complete the other and verify **0 items left**; uncomplete both and verify **2 items left**.

## Persistence (reload)

15. Open the site, add one active and one completed todo, select a filter, and reload the page. Verify both todos and their completion states persist, the selected hash route remains, and the displayed list and counter are correct.

## Negative and edge cases

16. Open the site and submit an empty value, then a spaces-only value. Verify neither submission creates a todo.
17. Open the site, add a very long todo, and verify the full text appears in the list.
18. Open the site, add a todo containing special characters such as `<`, `>`, `&`, quotes, `#`, `/`, and an emoji. Verify the text is displayed as entered.
19. Open the site, add a todo, edit it to an empty value, and press Enter. Verify the todo is removed.
20. Open the site, add completed todos, and clear them all. Verify the empty-list state hides the counter, filters, toggle-all control, and **Clear completed** button.

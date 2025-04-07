# React-Mastering-100

👨‍💻Learning and Mastering React.js. 100 days Challenge!

# Day 2 (Props)🚀

1. Props, js properties, are an object whith contain data from parent component to child component.
2. They are used topass data from parent to child component.
3. Props are read-only and we cant change their values from child component.
4. We can destructure props in the head or seperate variable.
5. We can pass any types of data to props even functions.
6. when we are rendering lists, each item should have a unique key prop. This helps React identify which items have changed, been added, or removed, making the DOM updates more efficient and bug-free.
7. we can pass array of objects to ptops too.

8. Components with children prop: we can pass elements/copmonentsas children.

# what is props.children?

props.children is a special prop automatically passed to every component. It contains any nested JSX (aka child elements) placed between a component’s opening and closing tags.

    1. Wrap other components or elements.
    2. Be more reusable and flexible.
    3. Follow the “composition over inheritance” pattern, which is a React best practice.

🤔 Why not just put the elements inside the Card component directly?

1.  That’s fine if the content will never change.
2.  Using children makes our component a wrapper — now we can reuse the Card for any content.

components

💡 When NOT to use children

1. If the content is always the same or driven by props (like a title + text passed as values), use props instead.

🤔 Why prop.children and not div or sectio? | stucturaly same, logically no.

1. Gives us reusability.
2. Keeps our code clean and maintainable.
3. Follows React best practices (composition, abstraction).

# what is props drilling:

1. Prop drilling refers to the process of passing data from a parent component down to deeply nested child components through props, even if some of those intermediate components don't need the data themselves. Essentially, props are passed "through" several layers of components until they reach the component that actually needs them.

🔴 Why Prop Drilling Can Be a Problem:

        Unnecessary Complexity.
        Less Readability.
        Difficult to Maintain.

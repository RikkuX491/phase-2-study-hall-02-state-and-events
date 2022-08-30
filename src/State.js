/* 
 * Lecture #2 - Topic 1 & 4: Creating & Updating State, and useState
 *
 * State is data that is dynamic in your component: it changes over time as users interact with your application.
 * State provides us with a way to maintain and update information within a component without requiring its parent to somehow send updated information.
 * Whenever you have a component that needs to work with state, you must first tell React to create some state for the component.
 * To do this, we must first import a function from React called useState.
 * 
 * Syntax to import useState:
 * import { useState } from 'react'
 * 
 * Syntax to create state:
 * const [variableName, setVariableName] = useState(value);
 * 
 * ...where variableName represents any name for the variable, and setVariableName is a setter function we get back from calling useState.
 * value represents the initial value of the state - variableName is a reference to this value.
 * 
 * Syntax to update state:
 * setVariableName(value)
 * 
 * ...where value represents the updated value of the state - variableName is a reference to this value.
 */

/* Write the appropriate import statement here to import useState */

function State(){

    /* Write the code here to create state to keep track of the selected language */

    const greetingsObjects = [
        {
            id: 1,
            language: "English",
            text: "Hello!"
        },
        {
            id: 2,
            language: "Spanish",
            text: "Hola!"
        },
        {
            id: 3,
            language: "Chinese",
            text: "你好！"
        },
        {
            id: 4,
            language: "Japanese",
            text: "こんにちは！"
        },
        {
            id: 5,
            language: "Korean",
            text: "안녕하세요！"
        }
    ]

    /* Write the code here to find the correct greetingsObject depending on the selected language */

    /* Write the code here to handle the event for changing between options of the drop-down menu and updating state for the selected language */

    return (
        <>
            <select> {/* "select" should have the correct event listener to handle changing between options of the drop-down menu */}
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="Chinese">Chinese</option>
                <option value="Japanese">Japanese</option>
                <option value="Korean">Korean</option>
            </select>
            <h1>{/* Display the text for the selected language */}</h1>
        </>
    );
}

/*
 * Lecture #2 - Topic 2 & 3: Events, and Callbacks
 *
 * We attach an event listener to an element much like we add a prop.
 * The listener name is always comprised of 'on', and the event name itself, for example 'click'.
 * These are joined together and camel-cased, so if we wanted to add a 'click' handler, we'd call the prop 'onClick'.
 * This prop takes a callback function as a value. It can either be a reference to a function, or an inline function.
 * We can update state based on events.
 */

export default State;
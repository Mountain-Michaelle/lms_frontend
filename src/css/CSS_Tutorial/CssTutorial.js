import React from 'react';
import '../CSS_Tutorial/CssTutorial';


const CssTutorial = () => {
    return(
        <div className="styles">
            <article>Flex-box is one dimensional layout model used to distribute space between items, 
                create flexible and efficient layouts and control their alignment
            </article>
            <h3>Layout modes</h3>
            <article>
                <ul>
                    <li>Block, for section in a webpage</li>
                    <li>Inline, for text</li>
                    <li>Table, for two dimensional table data </li>
                    <li>Position, for explicit position of an element</li>
                </ul>
            </article>
            <h3>Flexibilities With Flexbox</h3>
            <ul>
                <li>Arrange items</li>
                <li>Spacing</li>
                <li>Alignment of Items</li>
                <li>Order of items</li>
                <li>bootstrap 4 is built on top the flex layout</li> 
            </ul>

            <h2>Terminologies Used in Flex Box</h2>
            <ul>
                <li>Flex Container</li>
                <li>Flex items</li>
                <h4>Flex Axes</h4>
                <li>Main axis</li>
                <li>Flex axis</li>
            </ul>
            <p>Starting point of Flex Axes is "Main Start" and "Main End" <i>The differen between the Main
                Start and the Main End is called  the MAIN SIZE, <strong>The Same thing is applied to the Cross Axis</strong></i>
            </p>
            <img className="descriptive-image" src="" alt="Descriptive image" />
            <h2> Flex Container Properties, that can be applied to a Container</h2>
            <ul>
                <li>Display properties</li>
                <li>Flex-direction</li>
                <li>Flex-Wrap</li>
                <li>Flex-row : short hand for flex-direction and flex-wrap</li>
                <li>justify-content <strong>This aligns content items along the main axis</strong></li>
                <li>align-items <strong>This defined how the flex items are layed out along the cross axis</strong></li>
                <li>align-contents : <strong>This aligns items along the cross axis instead of the main axis</strong></li>
                <li>align-content<strong>This is similar to justify-content with the difference being that it will align item along the cross axis instead of the main axis</strong></li>
            </ul>
        </div>
    )
}

export default CssTutorial;
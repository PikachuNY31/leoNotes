import React from 'react';

function NoteCard(props) {

    return (

        <div class="card">
            <div class="card__side card__side--front">
                <div class="card__picture card__picture--1">
                    &nbsp;
                </div>
                <h4 class="card__heading">
                    <span class="card__heading-span card__heading-span--1">{props.name}</span>
                </h4>
                <div class="card__details">
                    <p>
                        {props.description}
                    </p>
                </div>
            </div>
            <div class="card__side card__side--back card__side--back-1">
                <div class="card__cta">
                    <div class="card__price-box">
                        <p class="card__price-only">
                            Only
                        </p>
                        <p class="card__price-value">{'$' + props.price}</p>
                    </div>
                    <button class='btn btn--white' onClick={props.setCartToggle}>Buy Now!</button>
                    <div> <button class='btn2 add-to-cart'>Add to Cart</button></div>
                   
                </div>
            </div>
        </div>

    )
}

export default NoteCard;
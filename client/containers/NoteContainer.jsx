import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCards } from '../slices/cardSlice'
import NoteCard from '../components/NoteCard';

function NoteContainer(props) {

    const cards = useSelector((state) => state.cards);
    const dispatch = useDispatch();

    const [noteCards, setNoteCards] = useState([]);

    

    console.log('cards', cards);
    useEffect(() => {
        dispatch(getCards());
        const cardHolder = [];
        cards.forEach(card => {
            cardHolder.push(<NoteCard name={card.note_title} description={card.description} price={card.price} />);
        })
        setNoteCards(cardHolder);
    }, [])

    return (
        <div class="NoteContainer">
            <section class="section-tours" id="section-tours">
                <div class="u-center-text u-margin-bottom-big">
                    <h2 class="heading-secondary">Note Packages</h2>
                </div>
                <div class="row">
                    {/* {cards.length &&
                        cards.map(card => {
                            return <NoteCard name={card.noteTitle} description={card.description} price={card.price} />
                        })} */}
                    {noteCards}

                    {/* <NoteCard setCartToggle={props.setCartToggle} name={'React'} description={'These are notes about React'} price={'100'} />
                    <NoteCard setCartToggle={props.setCartToggle} name={'Redux'} description={'These are notes about Redux'} price={'200'} />
                    <NoteCard setCartToggle={props.setCartToggle} name={'Express'} description={'These are notes about Express'} price={'500'} /> */}
                    {/* <div class="u-center-text u-margin-top-huge">
                        <a href="#" class="btn btn--green">Discover all tours</a>
                    </div> */}
                </div>
            </section>
        </div>
    )
}

export default NoteContainer;
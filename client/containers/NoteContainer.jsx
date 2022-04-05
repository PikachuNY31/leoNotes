import React from 'react';
import NoteCard from '../components/NoteCard';


function NoteContainer() {


    return (
        <div class="NoteContainer">
            <section class="section-tours" id="section-tours">
                <div class="u-center-text u-margin-bottom-big">
                    <h2 class="heading-secondary">Note Packages</h2>
                </div>
                <div class="row">
                    <NoteCard name={'React'} description={'These are notes about React'} price={'100'} />
                    <NoteCard name={'Redux'} description={'These are notes about Redux'} price={'200'} />
                    <NoteCard name={'Express'} description={'These are notes about Express'} price={'500'} />
                    {/* <div class="u-center-text u-margin-top-huge">
                        <a href="#" class="btn btn--green">Discover all tours</a>
                    </div> */}
                </div>
            </section>
        </div>
    )
}

export default NoteContainer;
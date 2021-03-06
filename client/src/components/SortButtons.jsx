import React from 'react';

function SortButtons(props) {
    return (
        <div>
            <input onChange={props.search} value={props.searchBar} name="text-name" type="text" placeholder="Search Genre"/>
            <button onClick={e => props.filterFunction('Gaming')} type="button" className="btn podcastSortBtn">Gaming</button>
            <button onClick={e => props.filterFunction('True Crime')} type="button" className="btn podcastSortBtn">True Crime</button>
            <button onClick={e => props.filterFunction('All')} type="button" className="btn podcastSortBtn">All</button>
            <button type="button" className="btn podcastSortBtn">Likes</button>
            <button type="button" className="btn podcastSortBtn">Dislikes<br/></button>
        </div>
    )
}
export default SortButtons;
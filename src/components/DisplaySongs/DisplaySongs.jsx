import React from 'react';

const DisplaySongs = (props) => {
    return ( 
        <table>
            <tr>
                <th>Title</th>
                <th>Artist</th>
            </tr>
            {props.songs.map}
        </table>
     );
}
 
export default DisplaySongs;
import React from 'react';
import LastMovieInDb from './LastMovieInDb';
import CategoriaList from './CategoriaList';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <LastMovieInDb />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <CategoriaList />

        </div>
    )
}

export default ContentRowCenter;
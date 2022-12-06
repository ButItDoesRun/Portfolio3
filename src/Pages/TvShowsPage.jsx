import React, { useEffect, useState } from 'react';
import Container from "react-bootstrap/Container";
import PaginationListNoToken from '../PageComponents/PaginationListNoToken';
import TvShowList from '../PageComponents/TvShowsPageComponents/TvShowList';

const TvShowsPage = () => {
    let [TvShowsContent, setTvShowsContent] = useState(null);
    const url = "https://localhost:5001/api/titles/tvshows"; 

    useEffect(() => {
    }, [TvShowsContent]);

    return (
        <Container>
            <PaginationListNoToken url={url} setContent={setTvShowsContent}></PaginationListNoToken>
            {(TvShowsContent === null) ?
                <p>Loading content...</p> :
                <TvShowList tvshowList={TvShowsContent}></TvShowList>
            }
        </Container>
    );
};

export default TvShowsPage;
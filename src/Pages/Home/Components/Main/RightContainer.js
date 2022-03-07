import React, { useContext } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import API_db from './../../../../API/db.json'
import FilterContext from './../../filters'

const RightContainer = () => {
    const [filters, setFilters] = useContext(FilterContext)
        return(
            <div className="main_rightContainer">
                {API_db.map((book) => (
                    <div className="book">
                        {book.book_releaseMonth === (filters.filterMonth + 1) ? (
                            <Card sx={{ m: 1, maxWidth: '100%'}}>
                            <CardMedia
                                component="img"
                                height="140"
                                width="auto"
                                image={book.book_photography}
                                alt={book.book_name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h7" component="b">
                                    {book.book_name}
                                </Typography>
                                <br />
                                {book.book_isNew === true ? (<Typography gutterBottom variant="h7"component="b" color="secondary">
                                    NOWOŚĆ!
                                </Typography>): "" }
                                <Typography variant="body2" color="text.secondary">
                                    Data wydania: {book.book_releaseDay}/{book.book_releaseMonth}/{book.book_releaseYear}
                                </Typography>
                            </CardContent>
                        </Card>
                        ) : ''}
                    </div>
            ))}
            </div>
        )
}

export default RightContainer

{/* <Card sx={{ m: 1, width: 200, maxWidth: '30%'}}>
                        <CardMedia
                            component="img"
                            height="140"
                            width="auto"
                            image={book.book_photography}
                            alt={book.book_name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h7" component="b">
                                {book.book_name}
                            </Typography>
                            <br />
                            {book.book_isNew === true ? (<Typography gutterBottom variant="h7"component="b" color="secondary">
                                NOWOŚĆ!
                            </Typography>): "" }
                            <Typography variant="body2" color="text.secondary">
                                Data wydania: {book.book_releaseDay}/{book.book_releaseMonth}/{book.book_releaseYear}
                            </Typography>
                        </CardContent>
                    </Card> */}
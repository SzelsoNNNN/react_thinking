import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import API_db from './../../API/db.json'

export default class RightContainer extends Component {
    render() {
        return(
            <div className="main_rightContainer">
                {API_db.map((book) => (
                    <Card sx={{ m: 1, width: 200, maxWidth: '30%'}}>
                        <CardMedia
                            component="img"
                            height="140"
                            width="auto"
                            image={book.book_photography}
                            alt="green iguana"
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
            ))}
            </div>
        )
    }
}
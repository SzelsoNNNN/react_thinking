import React, { useContext } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import API_db from './../../../../API/db.json'
import FilterContext from './../../filters'

const RightContainer = () => {
    const [filters, setFilters] = useContext(FilterContext)
    const books = []
        API_db.map(book => {
            if(filters.filterText !== '') {
                if(book.book_name.toLowerCase().includes(filters.filterText.toLowerCase())) {
                    books.push(book)
                }
            } else {
                if(filters.filterYear !== -2) {
                    if(filters.filterYear !== -1) {
                        if(book.book_releaseYear === filters.filterYear) {
                            books.push(book)
                        }
                    } else {
                        if(book.book_releaseMonth === (filters.filterMonth + 1)) {
                            books.push(book)
                        }
                    }
                } else {
                    books.push(book)
                }
            }
        })
        if(books[0]) {
            return(
                <div className="main_rightContainer">
                    {books.map((book) => (
                        <Card sx={{ m: 1, width: '23.3%'}}>
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
                ))}
                </div>
            )
        } else {
            return (
                <Stack sx={{ width: '100%' }} spacing={3}>
                    <Alert severity="info" color="secondary">
                        <AlertTitle><strong>BŁĄD</strong></AlertTitle>
                        Nie znaleziono żadnych wyników
                    </Alert>
                </Stack>
            )
        }

}

export default RightContainer
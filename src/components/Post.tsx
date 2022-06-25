import {
    Container,
    CssBaseline,
    Grid,
    ThemeProvider,
    Card,
    CardContent,
    Typography
} from "@material-ui/core";
import { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IPost } from '../interfaces/IPost';
import { theme, API_URL } from '../utils/util';

const Post: FunctionComponent = () => {
    const {id} = useParams();
    const [post, setPost] = useState<IPost>();

    useEffect(() => {
        fetch(`${API_URL}/${id}`)
            .then(data => data.json())
            .then(data => setPost(data))
    }, [setPost, id]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <main>
                    <Grid item xs={12} md={12} >
                        <Card variant="outlined" style={{marginTop: "20px", padding: "20px"}}>
                            <CardContent>
                                <Typography component="h2" variant="h5">
                                    <strong>Titulo:</strong> {post?.title }
                                </Typography>
                                <Typography variant="subtitle1" paragraph style={{marginTop: "10px"}}>
                                    <strong>Texto:</strong> { post?.body }
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </main>
            </Container>
        </ThemeProvider>
    );
};

export default Post;

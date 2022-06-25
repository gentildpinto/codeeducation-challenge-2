import {
    Container,
    CssBaseline,
    Grid,
    ThemeProvider
} from "@material-ui/core";
import { 
    FunctionComponent,
    useEffect,
    useState
} from "react";
import { IPost } from "../interfaces/IPost";
import { Posts } from "./Posts";
import { theme, API_URL } from '../utils/util';


const Home: FunctionComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        fetch(API_URL)
            .then(data => data.json())
            .then(data => setPosts(data))
    }, [setPosts]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <main>
                    <Grid container spacing={4}>
                        {posts.map((post, key) => (
                            <Posts post={post} key={key} />
                        ))}
                    </Grid>
                </main>
            </Container>
        </ThemeProvider>
    );
};

export default Home;

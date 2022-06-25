import { 
    Card,
    CardActionArea,
    CardContent,
    Grid,
    Typography 
} from "@material-ui/core";

interface PostProps {
    post: {
        id: string;
        title: string;
        body: string;
    };
}

export const Posts = (props: PostProps, key?: number) => {
    return (
        <Grid item xs={12} md={12} key={key}>
            <CardActionArea component="a" href={`/${props?.post.id}`}>
                <Card variant="outlined" style={{marginTop: "20px", padding: "20px"}}>
                    <CardContent>
                        <Typography component="h2" variant="h5">
                            <strong>Titulo:</strong> {props?.post.title }
                        </Typography>
                        <Typography variant="subtitle1" paragraph style={{marginTop: "10px"}}>
                            <strong>Texto:</strong> { props?.post.body }
                        </Typography>
                    </CardContent>
                </Card>
            </CardActionArea>
        </Grid>
    );
};
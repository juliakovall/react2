import { Card, CardContent, CardMedia, Typography } from "@mui/material";

function ProductCard() {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        component="img"
        height="200"
        image="https://picsum.photos/400"
      />

      <CardContent>
        <Typography variant="h5">React Course</Typography>

        <Typography>Material UI card component example.</Typography>
      </CardContent>
    </Card>
  );
}

export default ProductCard;

import Header from "./components/Header";
import UserForm from "./components/UserForm";
import ProductCard from "./components/ProductCard";
import { Container, Typography } from "@mui/material";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <Container sx={{ mt: 5 }}>
        <Typography variant="h4" className="page-title">
          Material UI Components
        </Typography>

        <UserForm />

        <div className="card-wrapper">
          <ProductCard />
        </div>
      </Container>
    </>
  );
}

export default App;

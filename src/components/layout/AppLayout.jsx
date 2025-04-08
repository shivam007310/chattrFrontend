import Title from "../shared/Title";
import Header from "./Header";
import Grid from "@mui/material/Grid";

const AppLayout = () => (WrappedComponent) => {
  return (props) => (
    <>
      <Title />
      <Header />

      <Grid container height="calc(100vh - 4rem)" sx={{ width: "100%" }}>
        <Grid
          size={{ sm: 4, md: 3 }}
          sx={{ display: { xs: "none", sm: "block" } }}
          bgcolor="primary.main"
          height="100%"
        >
          First
        </Grid>

        <Grid
          size={{ xs: 12, sm: 8, md: 5, lg: 6 }}
          height="100%"
          bgcolor="secondary.main"
        >
          <WrappedComponent {...props} />
        </Grid>

        <Grid
          size={{ lg: 3, md: 4 }}
          sx={{ display: { xs: "none", md: "block" }, padding:"2rem",bgcolor:"rgba(0,0,0,0.85)" }}
          bgcolor="primary.main"
          height="100%"
        >
          Third
        </Grid>
      </Grid>

      {/* <div>Footer</div> */}
    </>
  );
};

export default AppLayout;

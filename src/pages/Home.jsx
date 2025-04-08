import AppLayout from "../components/layout/AppLayout";

const Home=()=>{
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
    </div>
  );
}

export default AppLayout()(Home);
// This code defines a functional component named `Home` using React.
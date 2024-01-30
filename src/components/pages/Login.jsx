import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Login = () => {
  return (
    <>
      <Navbar></Navbar>
      <main className=" mb-40 mt-20 flex flex-col items-center justify-center self-center ">
        <div>
          <h2 className="mb-6 text-3xl font-bold">
            Insira seus dados de login
          </h2>
          <form method="post" className="flex flex-col  justify-center gap-2">
            <input
              className="border text-xl"
              type="username"
              placeholder="usuário"
            ></input>
            <input
              className="border text-xl"
              type="password"
              placeholder="senha"
            ></input>
            <div className="flex justify-between gap-3">
              <button className="border bg-roxoMuitoJogo p-2 font-bold text-white">
                Entrar
              </button>
              <button className=" border bg-roxoMuitoJogo p-2 font-bold text-white">
                Registrar
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Login;

const Footer = () => {
  return (
    <footer className="mt-24 flex h-72 w-full flex-col items-center justify-center gap-5 bg-roxoMuitoJogo md:h-96 md:items-stretch">
      <div className="mt-14 flex flex-col items-start justify-around gap-7 text-xs text-white md:items-center lg:flex-row">
        <div>
          <p>PAGUE COM FACILIDADE, RECEBA INSTANTANEAMENTE.</p>
          <p className="text-xl md:text-6xl">
            Pix, boleto ou cartão.<br></br> Você é quem escolhe :)
          </p>
        </div>
        <div className="flex gap-8">
          <button className="bg-white p-3 text-roxoMuitoJogo shadow-2xl hover:opacity-50">
            MEUS PEDIDOS
          </button>
          <button className="bg-white p-3 text-roxoMuitoJogo shadow-2xl hover:opacity-50">
            LOGIN
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-around gap-60  text-sm  text-white md:flex-row">
        <p className="hidden md:flex">MUITOJOGO.COM.BR</p>
        <div className="flex justify-center gap-3 text-center">
          <a>Termos e Condições</a>
          <a>Política de Privacidade</a>
          <a>Política de Reembolso</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

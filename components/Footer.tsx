interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="py-96 grid place-content-center">
      <p className="font-sans text-2xl text-center pb-16">
        This is a design test by Calin Ennis for Monogram
      </p>
      <span className="text-center text-5xl">💜</span>
    </footer>
  );
};

export default Footer;

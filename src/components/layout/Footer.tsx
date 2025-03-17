const Footer = () => {
  return (
    <footer className="dark:bg-[var(--magic-engineering-black)] text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-sm text-[var(--gold)]">
          © {new Date().getFullYear()} LOL Dex. All rights reserved.
        </p>
        <p className="text-xs mt-2 opacity-75">
          LOL Dex is not endorsed by Riot Games and does not reflect the views
          or opinions of Riot Games or anyone officially involved in producing
          or managing Riot Games properties. Riot Games and all associated
          properties are trademarks or registered trademarks of Riot Games, Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

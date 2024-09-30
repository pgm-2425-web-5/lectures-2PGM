const AgeChecker = () => {
  const age = 32;

  if (age < 18) {
    return <span>Sorry, je moet 18 jaar of ouder zijn om de inhoud van deze website te bekijken.</span>;
  }
  return <span>Je bent {age} jaar oud, dat is oud genoeg om de inhoud van deze website te bekijken.</span>;
};

export default AgeChecker;

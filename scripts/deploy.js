const hh = require("hardhat");

async function main() {
  const Film = await hh.ethers.getContractFactory("FilmmakerDAO");
  console.log('Created factory...')

  const film = await Film.deploy();
  console.log('Deployed factory...')

  await film.deployed();
  console.log("FilmmakerDAO Season 0 deployed to:", film.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

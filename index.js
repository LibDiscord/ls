const { default: { stream } } = require("got");
const { createWriteStream } = require("fs");
const { execSync } = require("child_process");
const path = "./Lavalink.jar";

// Based on https://github.com/Cog-Creators/Lavalink-Jars/, untill that koltin based one is fixed.
const lljar = "https://github.com/davidffa/lavalink/releases/download/v1.1.4/Lavalink.jar";
// temp code untill I made jar options & checking.
// aka selection between downloading the "custom" "dev" "dev-with-plugins"

const start = () => {
     const download = stream(lljar).pipe(createWriteStream('Lavalink.jar'));
     download.on("finish", () => {
         execSync("java -jar Lavalink.jar", { stdio: "inherit" });
     });
 };

start();

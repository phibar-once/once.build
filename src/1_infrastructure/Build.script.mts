import GitRepository from "../../../../../Once.Modules/dist/once.modules/main/2_systems/GitRepository.class.mjs";

console.log("BUILD.SCRIPT", process.env.WATCH);
console.log("PROCESS CWD", process.cwd());

const watch = process.env.WATCH == "true";
const repo = await GitRepository.init({ baseDir: process.cwd() });
const subs = await repo.getSubmodules();
subs.forEach((sub) => sub.build());

for (let sub of subs) {
  try {
    await sub.build();
    
  } catch (error) {
console.error("ERROR",error);
    
  }
  break;
}

import * as core from "@actions/core";
import * as fs from "fs";
import { execSync } from "child_process";

async function run() {
  try {
    // Obtém os inputs da action
    const requiredFile = core.getInput("required_file");
    const runLinter = core.getInput("run_linter") === "true";

    // Verifica se o arquivo obrigatório existe
    if (!fs.existsSync(requiredFile)) {
      core.setFailed(`Erro: O arquivo necessário "${requiredFile}" não foi encontrado!`);
      return;
    } else {
      core.info(`✅ Arquivo "${requiredFile}" encontrado.`);
    }

    // Executa o linter se necessário
    if (runLinter) {
      core.info("🔍 Executando linter...");
      try {
        execSync("npx eslint . --ext .ts,.js", { stdio: "inherit" });
      } catch (error) {
        core.setFailed("❌ O linter encontrou erros no código.");
      }
    }

    core.info("🚀 Validações concluídas com sucesso!");
  } catch (error: any) {
    core.setFailed(`Erro ao executar a action: ${error.message}`);
  }
}

run();

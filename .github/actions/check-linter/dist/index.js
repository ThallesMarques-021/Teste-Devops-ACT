"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core = require("@actions/core");
const fs = require("fs");
const child_process_1 = require("child_process");
async function run() {
    try {
        // Obtém os inputs da action
        const requiredFile = core.getInput("required_file");
        const runLinter = core.getInput("run_linter") === "true";
        // Verifica se o arquivo obrigatório existe
        if (!fs.existsSync(requiredFile)) {
            core.setFailed(`Erro: O arquivo necessário "${requiredFile}" não foi encontrado!`);
            return;
        }
        else {
            core.info(`✅ Arquivo "${requiredFile}" encontrado.`);
        }
        // Executa o linter se necessário
        if (runLinter) {
            core.info("🔍 Executando linter...");
            try {
                (0, child_process_1.execSync)("npx eslint . --ext .ts,.js", { stdio: "inherit" });
            }
            catch (error) {
                core.setFailed("❌ O linter encontrou erros no código.");
            }
        }
        core.info("🚀 Validações concluídas com sucesso!");
    }
    catch (error) {
        core.setFailed(`Erro ao executar a action: ${error.message}`);
    }
}
run();

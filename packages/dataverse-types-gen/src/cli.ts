#!/usr/bin/env node
import "dotenv/config";
import { generate, loadConfig } from "./generator.js";

const printUsage = () => {
    console.log(`Usage: dataverse-types-gen [--config <path>]

Generates TypeScript types and optionset enums from a Microsoft Dataverse
environment's $metadata endpoint.

Options:
  --config <path>   Path to config JSON (default: ./dataverse-types.config.json)
  --help, -h        Show this help

Config JSON shape:
  {
    "entities": ["account", "contact", ...],
    "outputDir": "src/dataverse-gen"
  }

Environment variables (loaded from .env if present):
  SERVER_URL              Dataverse environment URL (e.g. https://org.crm.dynamics.com)
  AUTHORITY_URL           OAuth authority (e.g. https://login.microsoftonline.com/<tenant-id>)
  DYNAMICS_CLIENT_ID      Azure AD app client ID
  DYNAMICS_CLIENT_SECRET  Azure AD app client secret
`);
};

const parseArgs = (argv: string[]): { configPath: string } => {
    let configPath = "dataverse-types.config.json";
    for (let i = 0; i < argv.length; i++) {
        const a = argv[i];
        if (a === "--help" || a === "-h") {
            printUsage();
            process.exit(0);
        } else if (a === "--config") {
            const next = argv[i + 1];
            if (!next) {
                console.error("Error: --config requires a path argument");
                process.exit(2);
            }
            configPath = next;
            i++;
        } else {
            console.error(`Error: unknown argument '${a}'`);
            printUsage();
            process.exit(2);
        }
    }
    return { configPath };
};

const main = async () => {
    const { configPath } = parseArgs(process.argv.slice(2));
    const config = loadConfig(configPath);
    await generate({
        config,
        regenCommand: `npx dataverse-types-gen --config ${configPath}`
    });
};

main().catch((err: unknown) => {
    console.error(err instanceof Error ? err.message : err);
    process.exit(1);
});

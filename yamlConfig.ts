import { readFileSync } from "fs";
import yaml from "yaml";
export const yamlConfig = () => {
  try {
    const readData = readFileSync("dev.yml", "utf8");
    const data = yaml.parse(readData);
    data;
    data.forEach((element: { name: string; value: string }) => {
      process.env[element.name] = element.value;
    });
  } catch (error) {
    console.error("Error reading or parsing YAML file:", error);
  }
};

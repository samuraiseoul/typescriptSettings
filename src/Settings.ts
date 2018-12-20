import * as FileSystem from "fs";
import ReadonlyObjectInterface from "./ReadonlyObjectInterface";

export default class Settings {
    private static readonly SETTINGS_FILE = './settings.json';

    private static readonly SETTINGS_FILE_ENCODING = 'utf8';

    private constructor() {} //prevent instantiation attempts

    private static settings : ReadonlyObjectInterface;

    public static getSettings() : ReadonlyObjectInterface {
        if(!this.settings) {
            this.settings = this.readInSettings();
        }
        return this.settings;
    }

    private static readInSettings() : ReadonlyObjectInterface {
        return JSON.parse(FileSystem.readFileSync(this.SETTINGS_FILE, this.SETTINGS_FILE_ENCODING));
    }
}
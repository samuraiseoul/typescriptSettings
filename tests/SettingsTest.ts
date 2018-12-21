import * as assert from "assert";
import Settings from "../src/Settings";

describe("Settings", function testSettings() {
    describe("Get Settings", function getSettings() { // typescriptSettings.json in base dir
        it("opens and reads the typescriptSettings file", function openAndRead() {
            assert.strictEqual(Settings.getSettings().field, "value");
        });

        it("returns settings of type", function getTypedSetting() {
            interface BasicSetting {
                "secret" : string;
            }
            assert.strictEqual(Settings.getSetting<BasicSetting>((settings) => settings.basic as BasicSetting).secret, "apiKey");
        });
    });
});
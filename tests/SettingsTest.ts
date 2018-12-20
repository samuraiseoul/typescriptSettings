import * as assert from "assert";
import Settings from "../src/Settings";

describe("Settings", function testSettings() {
    describe("Get Settings", function getSettings() { // typescriptSettings.json in base dir
        it("opens and reads the typescriptSettings file", function openAndRead() {
            assert.strictEqual(Settings.getSettings().field, "value");
        });
        it("only has one field", function openAndRead() {
            assert.strictEqual(Object.keys(Settings.getSettings()).length, 1);
        });
    });
});
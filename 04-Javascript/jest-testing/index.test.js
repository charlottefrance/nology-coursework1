import {getName} from "./index.js";

it("Should return the string 'Charlotte, 21 years old.'", () => {
    const output = getName('Charlotte', 21);
    expect(output).toBe('Charlotte, 21 years old');
})
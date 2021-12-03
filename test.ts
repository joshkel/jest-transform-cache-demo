describe("test", () => {
    it("does something", () => {
        let a = null;
        a ??= 2;
        expect(a).toEqual(2);
    });
});

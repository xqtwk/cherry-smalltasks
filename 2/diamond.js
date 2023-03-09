function renderDiamond(rows) {
    if (rows % 2 === 0) {
        rows--;
    }
    function renderRows(n) {
        var spaces = Math.abs((rows - 1) / 2 - n);
        var stars = rows - 2 * spaces;
        console.log(" ".repeat(spaces) + "*".repeat(stars));
        if (n < (rows - 1) / 2) {
            renderRows(n + 1);
        }
    }
    function renderReverseRows(n) {
        var spaces = Math.abs(n + 1 - rows);
        var stars = rows - 2 * spaces;
        console.log(" ".repeat(spaces) + "*".repeat(stars));
        if (n > (rows - 1) / 2) {
            if (spaces < Math.floor(rows / 2)) {
                renderReverseRows(n + 1);
            }
        }
    }
    renderRows(0);
    renderReverseRows(rows);
}
renderDiamond(11);

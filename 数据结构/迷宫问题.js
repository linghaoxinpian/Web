var filed = new Array();
var MAX_N, MAX_M;
var way = 0;
function dfs(x, y) {
    if (x < MAX_N && y < MAX_M && 0 < x && 0 < y) {
        for (dx = -1; dx <= 1; dx++) {
            for (dy = -1; dy <= 1; dy++) {
                var nx = dx + x;
                var ny = dy + y;
                if (filed[nx][ny] == '.') {
                    dfs(nx, ny);
                    way++;
                }
            }
        }

    }
}
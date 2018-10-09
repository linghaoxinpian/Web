/*
有一个大小为 N×M的园子，雨后积起了水。八连通的积水被认为是连接在一起的。请求出 园子里总共有多少水洼？
（八连通指的是下图中相对 W 的*的部分）
***
*W*
*** 
输入 :
W........WW.
.WWW.....WWW
....WW...WW.
.........WW.
.........W..
..W......W..
.W.W.....WW.
W.W.W.....W.
.W.W......W.
..W.......W.
输出：3
*/

var field = [[], []];
var MAX_M, MAX_N;

function dfs(x, y) {
    //当前位置置为'.'
    field[x, y] = '.';
    for (dx = -1; dx <= 1; dx++) {
        for (dy = -1; dy <= 1; dy++) {
            //移动
            var nx = dx + x;
            var ny = dy + y;
            //判断是是否在规定范围内,且是积水
            if (0 <= nx && 0 <= ny && nx <= MAX_N && ny <= MAX_M && field[nx, ny] == 'W') dfs(nx, ny);
        }
    }
    return;
}

function solve() {
    var res = 0;
    for (i = 0; i < MAX_N; i++) {
        for (j = 0; j < MAX_M; j++) {
            if (field[i, j] == 'W') {
                dfs(i, j);
                //'W'的地方最少都是一个水洼
                res++;
            }
        }
    }
}
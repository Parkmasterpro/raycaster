let map = {
    walls: [
        {
			x: 0,
			y: 0,
			width: 10,
			height: 110
		},
		{
			x: 100,
			y: 0,
			width: 10,
			height: 110
		},
		{
			x: 0,
			y: 0,
			width: 110,
			height: 10
		},
		{
			x: 0,
			y: 100,
			width: 110,
			height: 10
		},
		{
			x: 25,
			y: 40,
			width: 20,
			height: 45
		}
    ],
    draw: function(scale = 1, xshift = 0, yshift = 0) {

        ctx.fillStyle = "gray";

        for (var i = 0; i < map.walls.length; i++) {
            ctx.fillRect(
                map.walls[i].x*scale+xshift,
                map.walls[i].y*scale+yshift,
                map.walls[i].width*scale,
                map.walls[i].height*scale
                );
            ctx.fillStyle = "yellow";
            ctx.fillRect(
                player.x*scale+xshift,
                player.y*scale+yshift,
                5*scale, 5*scale
                );
        }
    },
    touchingWalls(object) {
        for (var i = 0; i < map.walls.length; i++) {
            if (isTouching(object, map.walls[i])) {
                return true;
            }
        }
        return false;
    }
};

// Create canvas variable
var canvas = new fabric.Canvas('myCanvas');
blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function new_image(getImage)
{
	fabric.Image.fromURL(get_image, function(Img)  {
		block_Image_Object = Img;

		block_Image_Object.scaleToWidth(block_Image_Width);
		block_Image_Object.scaleToHeight(block_Image_Height);
		block_Image_Object.set({
			top:block_y
			left:block_x
		});
		canvas.add(block_Image_Object);
	});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '61') // adicione os códigos adequados às teclas
	{
		blockX = 10;
		new_image('rr.png')
		console.log('a')
	}
	if(keyPressed == '76')
	{
		blockX = 200;
		new_image('rr1.png')
		console.log('v')
	}
	
	if(keyPressed == '65')
	{
		blockX =350;
		new_image('yr.png')
		console.log('e')
	}
	if(keyPressed == '72')
	{
		blockX = 600;
		new_image('pr.png')
		console.log('r')
	}
	if(keyPressed == '73')
	{
		blockX = 700;
		new_image('gr.png')
		console.log('i')
	}
	
}


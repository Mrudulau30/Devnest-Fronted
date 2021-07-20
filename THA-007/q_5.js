/*5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. 
Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder.
 Try To Attempt : Difficult Level Increased */

 function cylinder(radius,height)
{
    this.radius = radius;
    this.height = height;
  
    this.volume = function () 
    {
        return Math.PI * this.radius * 2 * this.height;
    };

}
var c = new cylinder(10,10);
console.log('Volume of a cylinder =', c.volume().toFixed(4));

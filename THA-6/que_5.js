//Write a JavaScript program to find the most frequent item of an array
//Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//Sample Output : a ( 5 times ) */

arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

var count=0;
ans=0;
for(var i=0 ; i<arr1.length ; i++)
{
for(var j=i+1;j<arr1.length;j++)
{
    if(arr1[i]==arr1[j])
    {
        count++;
    }
}
if(count>ans)
{
    ans=count
    var d=arr1[i]
}
var count=0;
}
ans++
//console.log()
console.log(d +" ( "+ ans+ " times" +" ) ")
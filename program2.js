var sum = 0;

for(i=0;i<process.argv.length;i++) 
{
   factor=process.argv[i];
   //console.log(i + " " + factor + " " + process.argv[i] );
   if (isNaN(factor)) continue;
   sum += Number(factor);

}   

console.log(sum);
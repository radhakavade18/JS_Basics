let a = 100;
{
    let a = 10;
    console.log("inner", a);
}
console.log("outer",a);
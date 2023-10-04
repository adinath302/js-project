function divide(numerator, denominator) {
    try {
        if (denominator === 0) {
            throw new Error("Division by zero is not allowed.")
        }
        return numerator, denominator;
    }
    catch (error) {
        throw error;
    }
}

try{
    const result = divide(10,0)
    console.log("result : " + result)
}catch(error){
    console.log("Error: ",error.massage)
}
interface Irequest {
    initialNumber: number;
    limitNumber: number;
}

class GeneratePalindromesService {

    execute({initialNumber, limitNumber }: Irequest) {

        if(limitNumber < 0) {
            throw new Error("Limit number must be positive!")
        };

        if(initialNumber > limitNumber) {
            throw new Error("Limit number must be greater than the initial number!")
        };

        if(initialNumber < 0){
            throw new Error("Initial number must be positive!")
        };
        
        const palindromes = [];
        
        for(let i = initialNumber; i <= limitNumber; i++) {
            let convertString = i.toString().split('').reverse().join('');
            
            if( i === parseInt(convertString)) {
                palindromes.push(i);
            };
        };
          
        return palindromes;
    }
};

export { GeneratePalindromesService }